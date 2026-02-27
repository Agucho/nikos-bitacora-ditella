import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import { auth, hasFirebaseConfig, storage } from './firebase/client';
import {
  completeMagicLinkSignIn,
  consumePendingProfile,
  getPendingMagicLinkEmail,
  hasMagicLinkInUrl,
  MAGIC_LINK_EMAIL_REQUIRED_CODE,
  persistPendingProfile,
  sendMagicLink
} from './firebase/auth';
import {
  saveEmotionEntry,
  saveJournalEntry,
  upsertProfile,
  watchEmotions,
  watchJournal,
  watchProfile
} from './firebase/db';
import { getExerciseForDay } from './data/exercises';
import { materialExtraItems } from './data/materialExtra';

const NAV_ITEMS = [
  { key: 'emotion', label: 'Emocionómetro' },
  { key: 'calendar', label: 'Bitácora' },
  { key: 'material', label: 'Material Extra' }
];

function formatDate(date) {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`;
}

function toDateKey(date) {
  return date.toISOString().split('T')[0];
}

function calculateCurrentDay(startDate) {
  if (!startDate) {
    return 1;
  }

  const start = new Date(startDate);
  const today = new Date();
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diffMs = todayDay.getTime() - startDay.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(60, diffDays));
}

function calculateStreak(entriesByDay) {
  let streak = 0;
  for (let day = 60; day >= 1; day -= 1) {
    const entry = entriesByDay[day];
    if (entry?.completed) {
      streak += 1;
    } else if (streak > 0) {
      break;
    }
  }
  return streak;
}

function emptySituation() {
  return {
    situacion: '',
    cuerpo: '',
    pensamientos: '',
    emociones: ''
  };
}

const situationFields = [
  { key: 'situacion', label: 'SITUACIÓN', placeholder: 'Describe la situación...' },
  { key: 'cuerpo', label: 'CUERPO', placeholder: '¿Qué sentiste en tu cuerpo?' },
  { key: 'pensamientos', label: 'PENSAMIENTOS DURANTE', placeholder: '¿Qué pensabas?' },
  { key: 'emociones', label: 'EMOCIONES DURANTE Y DESPUÉS', placeholder: '¿Qué emociones experimentaste?' }
];

const cognitiveFields = [
  { key: 'visualizacion', label: 'VISUALIZACIÓN', placeholder: 'Describe la situación...' },
  { key: 'pensamientosNuevos', label: 'PENSAMIENTOS NUEVOS / PRECISOS', placeholder: '¿Qué pensamientos nuevos introduces?' },
  { key: 'intento', label: 'INTENTAR USARLOS EN LA SITUACIÓN REAL', placeholder: '¿Cómo los usaste?' },
  { key: 'cambioEmocion', label: '¿CAMBIÓ LA EMOCIÓN O SU INTENSIDAD?', placeholder: 'Describe...' },
  { key: 'cambioCuerpo', label: '¿CAMBIÓ ALGUNA SEÑAL DEL CUERPO?', placeholder: 'Describe...' },
  { key: 'menosIncomoda', label: '¿LA SITUACIÓN FUE MENOS INCÓMODA?', placeholder: 'Describe...' },
  { key: 'masEficaz', label: '¿ACTUÉ O ME SENTÍ MÁS EFICAZ?', placeholder: 'Describe...' }
];

function emptyCognitive() {
  return {
    visualizacion: '',
    pensamientosNuevos: '',
    intento: '',
    cambioEmocion: '',
    cambioCuerpo: '',
    menosIncomoda: '',
    masEficaz: ''
  };
}

function ensureMinLength(items, minLength, factory) {
  const next = Array.isArray(items) ? [...items] : [];
  while (next.length < minLength) {
    next.push(factory());
  }
  return next;
}

function createDraft(dayNumber, rawData) {
  const base = rawData || {};
  return {
    pleasure: base.pleasure ?? 5,
    energy: base.energy ?? 5,
    gratitude: base.gratitude || '',
    situations: ensureMinLength(base.situations, 3, emptySituation),
    cognitiveWork: ensureMinLength(base.cognitiveWork, 3, emptyCognitive),
    variableExercise: base.variableExercise || {},
    dayNumber
  };
}

function hasAnyText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isDayCompleted(dayNumber, draft) {
  const exercise = getExerciseForDay(dayNumber);

  let variableComplete = false;
  if (exercise.type === 'rating') {
    variableComplete = true;
  } else {
    variableComplete = exercise.fields.some((field) => hasAnyText(draft.variableExercise[field.id]));
  }

  if (dayNumber <= 10) {
    const situationCount = draft.situations.filter((row) => Object.values(row).some(hasAnyText)).length;
    return hasAnyText(draft.gratitude) && situationCount >= 3 && variableComplete;
  }

  const cognitiveCount = draft.cognitiveWork.filter((row) => Object.values(row).some(hasAnyText)).length;
  return cognitiveCount >= 3 && variableComplete;
}

function storageGet(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function storageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getDisplayName(profile, user) {
  const profileName = profile?.name?.trim();
  if (profileName) {
    return profileName;
  }

  const email = user?.email?.trim();
  if (email) {
    return email;
  }

  return 'Usuario';
}

function getInitial(value) {
  return (value?.trim()?.charAt(0) || 'U').toUpperCase();
}

function App() {
  const guestModeKey = 'bitacora.guestMode';
  const [activeTab, setActiveTab] = useState('emotion');
  const [status, setStatus] = useState('');
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [guestMode, setGuestMode] = useState(() => localStorage.getItem(guestModeKey) === '1');
  const [profile, setProfile] = useState(null);
  const [emotionDraft, setEmotionDraft] = useState({ pleasure: 5, energy: 5 });
  const [emotions, setEmotions] = useState([]);
  const [journalByDay, setJournalByDay] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayDraft, setDayDraft] = useState(null);
  const [authForm, setAuthForm] = useState({ name: '', email: '' });
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [pendingProfile] = useState(() => consumePendingProfile());
  const [materialItems, setMaterialItems] = useState(materialExtraItems);
  const [selectedMaterial, setSelectedMaterial] = useState(materialExtraItems[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSendingMagicLink, setIsSendingMagicLink] = useState(false);
  const [isSavingEmotion, setIsSavingEmotion] = useState(false);
  const [isSavingDay, setIsSavingDay] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isCompletingMagicLink, setIsCompletingMagicLink] = useState(false);
  const [needsMagicLinkEmailConfirm, setNeedsMagicLinkEmailConfirm] = useState(false);

  const currentDay = useMemo(() => calculateCurrentDay(profile?.startDate), [profile?.startDate]);
  const hasProgramStarted = Boolean(profile?.startDate);
  const streak = useMemo(() => calculateStreak(journalByDay), [journalByDay]);
  const selectedExercise = useMemo(() => (selectedDay ? getExerciseForDay(selectedDay) : null), [selectedDay]);
  const displayName = useMemo(() => getDisplayName(profile, user), [profile, user]);
  const avatarInitial = useMemo(() => getInitial(displayName), [displayName]);
  const isAuthActionBusy = isSendingMagicLink || isCompletingMagicLink;

  useEffect(() => {
    if (guestMode && hasMagicLinkInUrl()) {
      setGuestMode(false);
      localStorage.removeItem(guestModeKey);
      setStatus('Magic-link detectado. Modo invitado desactivado.');
      return;
    }

    if (guestMode) {
      setAuthLoading(false);
      setProfile(storageGet('bitacora.guest.profile', { name: 'Invitado/a', email: '', startDate: null }));
      setEmotions(storageGet('bitacora.guest.emotions', []));
      setJournalByDay(storageGet('bitacora.guest.journal', {}));
      return;
    }

    if (!hasFirebaseConfig || !auth) {
      setAuthLoading(false);
      return;
    }

    if (hasMagicLinkInUrl()) {
      setIsCompletingMagicLink(true);
      setNeedsMagicLinkEmailConfirm(false);
      completeMagicLinkSignIn().catch((error) => {
        if (error?.code === MAGIC_LINK_EMAIL_REQUIRED_CODE) {
          setNeedsMagicLinkEmailConfirm(true);
          setAuthForm((current) => ({
            ...current,
            email: current.email || pendingProfile?.email || getPendingMagicLinkEmail()
          }));
          return;
        }

        setStatus(error.message || 'No se pudo completar el ingreso con magic-link.');
      }).finally(() => {
        setIsCompletingMagicLink(false);
      });
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [guestMode, guestModeKey, pendingProfile]);

  useEffect(() => {
    if (!user || !guestMode) {
      return;
    }

    setGuestMode(false);
    localStorage.removeItem(guestModeKey);
    setStatus('Sesión iniciada. Modo invitado desactivado.');
  }, [guestMode, guestModeKey, user]);

  useEffect(() => {
    if (!user || guestMode) {
      return undefined;
    }

    const unwatchProfile = watchProfile(user.uid, (nextProfile) => {
      setProfile(nextProfile || { name: '', email: user.email || '', startDate: null });
    }, (error) => setStatus(error.message));

    const unwatchEmotions = watchEmotions(user.uid, (nextItems) => {
      setEmotions(nextItems);
    }, (error) => setStatus(error.message));

    const unwatchJournal = watchJournal(user.uid, (nextMap) => {
      setJournalByDay(nextMap);
    }, (error) => setStatus(error.message));

    return () => {
      unwatchProfile();
      unwatchEmotions();
      unwatchJournal();
    };
  }, [user, guestMode]);

  useEffect(() => {
    if (!user || !pendingProfile || guestMode) {
      return;
    }

    upsertProfile(user.uid, {
      name: pendingProfile.name || '',
      email: user.email || pendingProfile.email || ''
    }).catch((error) => {
      setStatus(error.message || 'No se pudo guardar el perfil.');
    });
  }, [user, pendingProfile, guestMode]);

  useEffect(() => {
    if (!status) {
      return undefined;
    }

    const timeout = setTimeout(() => setStatus(''), 2800);
    return () => clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (!storage) {
      return;
    }

    let cancelled = false;

    Promise.all(
      materialExtraItems.map(async (item) => {
        try {
          const storageUrl = await getDownloadURL(ref(storage, item.storagePath));
          return { ...item, src: storageUrl };
        } catch (_error) {
          return item;
        }
      })
    ).then((items) => {
      if (!cancelled) {
        setMaterialItems(items);
        setSelectedMaterial(items[0]);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  function openDay(dayNumber) {
    const existing = journalByDay[dayNumber]?.data;
    setDayDraft(createDraft(dayNumber, existing));
    setSelectedDay(dayNumber);
  }

  function closeDay() {
    setSelectedDay(null);
    setDayDraft(null);
  }

  function updateSituation(index, field, value) {
    setDayDraft((current) => {
      const next = { ...current, situations: [...current.situations] };
      next.situations[index] = { ...next.situations[index], [field]: value };
      return next;
    });
  }

  function updateCognitive(index, field, value) {
    setDayDraft((current) => {
      const next = { ...current, cognitiveWork: [...current.cognitiveWork] };
      next.cognitiveWork[index] = { ...next.cognitiveWork[index], [field]: value };
      return next;
    });
  }

  function updateVariable(fieldId, value) {
    setDayDraft((current) => ({
      ...current,
      variableExercise: {
        ...current.variableExercise,
        [fieldId]: value
      }
    }));
  }

  async function handleSaveEmotion() {
    if (isSavingEmotion) {
      return;
    }

    const today = toDateKey(new Date());
    const payload = {
      dateKey: today,
      pleasure: Number(emotionDraft.pleasure),
      energy: Number(emotionDraft.energy)
    };

    setIsSavingEmotion(true);
    try {
      if (guestMode) {
        const next = emotions.filter((item) => item.dateKey !== today).concat(payload).sort((a, b) => a.dateKey.localeCompare(b.dateKey));
        setEmotions(next);
        storageSet('bitacora.guest.emotions', next);
        setStatus('Dia guardado en modo invitado');
        return;
      }

      if (!user) {
        setStatus('Primero iniciá sesión.');
        return;
      }

      await saveEmotionEntry(user.uid, payload);
      setStatus('Dia guardado');
    } catch (error) {
      setStatus(error.message || 'No se pudo guardar el emocionómetro.');
    } finally {
      setIsSavingEmotion(false);
    }
  }

  async function handleSaveDay() {
    if (isSavingDay) {
      return;
    }

    if (!selectedDay || !dayDraft) {
      return;
    }

    const nowIso = new Date().toISOString();
    const completed = isDayCompleted(selectedDay, dayDraft);
    const shouldStartProgram = completed && !profile?.startDate;
    const payload = {
      day: selectedDay,
      data: dayDraft,
      completed
    };

    setIsSavingDay(true);
    try {
      if (guestMode) {
        const next = {
          ...journalByDay,
          [selectedDay]: payload
        };
        setJournalByDay(next);
        storageSet('bitacora.guest.journal', next);

        if (shouldStartProgram) {
          const nextProfile = {
            ...(profile || { name: 'Invitado/a', email: '' }),
            startDate: nowIso
          };
          setProfile(nextProfile);
          storageSet('bitacora.guest.profile', nextProfile);
        }

        setStatus('Día guardado en modo invitado.');
        closeDay();
        return;
      }

      if (!user) {
        setStatus('Primero iniciá sesión.');
        return;
      }

      await saveJournalEntry(user.uid, payload);
      if (shouldStartProgram) {
        await upsertProfile(user.uid, { startDate: nowIso });
      }
      setStatus('Bitácora guardada.');
      closeDay();
    } catch (error) {
      setStatus(error.message || 'No se pudo guardar la bitácora.');
    } finally {
      setIsSavingDay(false);
    }
  }

  async function handleMagicLinkRequest(event) {
    event.preventDefault();
    if (isSendingMagicLink) {
      return;
    }

    if (!hasFirebaseConfig) {
      setStatus('Falta configurar Firebase en .env.');
      return;
    }

    const email = authForm.email.trim();
    if (!email) {
      setStatus('Ingresá tu email para continuar.');
      return;
    }

    setIsSendingMagicLink(true);
    try {
      persistPendingProfile({
        name: authForm.name.trim(),
        email
      });
      await sendMagicLink(email);
      setMagicLinkSent(true);
      setStatus('Te enviamos un magic-link. Abrilo en este mismo dispositivo.');
    } catch (error) {
      setStatus(error.message || 'No se pudo enviar el magic-link.');
    } finally {
      setIsSendingMagicLink(false);
    }
  }

  async function handleMagicLinkConfirm(event) {
    event.preventDefault();

    if (isCompletingMagicLink) {
      return;
    }

    const email = authForm.email.trim();
    if (!email) {
      setStatus('Ingresá el mismo email que usaste para recibir el magic-link.');
      return;
    }

    setIsCompletingMagicLink(true);
    try {
      setNeedsMagicLinkEmailConfirm(false);
      await completeMagicLinkSignIn(email);
      setStatus('Ingreso completado.');
    } catch (error) {
      if (error?.code === MAGIC_LINK_EMAIL_REQUIRED_CODE) {
        setNeedsMagicLinkEmailConfirm(true);
        setStatus('Confirmá tu email para continuar.');
        return;
      }

      setNeedsMagicLinkEmailConfirm(true);
      setStatus(error.message || 'No se pudo completar el ingreso con magic-link.');
    } finally {
      setIsCompletingMagicLink(false);
    }
  }

  async function handleSignOut() {
    if (isSigningOut) {
      return;
    }

    setMenuOpen(false);
    setIsSigningOut(true);

    try {
      if (guestMode) {
        setGuestMode(false);
        localStorage.removeItem(guestModeKey);
        setProfile(null);
        setEmotions([]);
        setJournalByDay({});
        setSelectedDay(null);
        setDayDraft(null);
        setActiveTab('emotion');
        setStatus('Sesión cerrada.');
        return;
      }

      if (!auth || !user) {
        setStatus('No hay una sesión activa.');
        return;
      }

      await signOut(auth);
      setProfile(null);
      setEmotions([]);
      setJournalByDay({});
      setSelectedDay(null);
      setDayDraft(null);
      setActiveTab('emotion');
      setStatus('Sesión cerrada.');
    } catch (error) {
      setStatus(error.message || 'No se pudo cerrar la sesión.');
    } finally {
      setIsSigningOut(false);
    }
  }

  const todayKey = toDateKey(new Date());
  const points = [
    ...emotions
      .filter((item) => item.dateKey !== todayKey)
      .map((item) => ({
        x: ((item.pleasure - 1) / 9) * 100,
        y: ((item.energy - 1) / 9) * 100,
        id: item.dateKey,
        isLive: false
      })),
    {
      x: ((emotionDraft.pleasure - 1) / 9) * 100,
      y: ((emotionDraft.energy - 1) / 9) * 100,
      id: `live-${todayKey}`,
      isLive: true
    }
  ];

  if (authLoading) {
    return <div className="screen-center">Cargando...</div>;
  }

  if (!guestMode && !user) {
    const showMagicLinkConfirm = needsMagicLinkEmailConfirm;
    return (
      <div className="app-shell auth-only">
        <BrandHeader />
        <main className="section active profile-view">
          <div className="profile-card">
            <h1>
              {showMagicLinkConfirm ? 'Confirmá tu email' : <>Bienvenidos a<br />Desafíos de Liderazgo</>}
            </h1>
            <p>
              {showMagicLinkConfirm
                ? 'Usá el mismo email con el que recibiste el magic-link para completar el ingreso.'
                : 'Crea tu perfil para comenzar'}
            </p>

            <form className="profile-form" onSubmit={showMagicLinkConfirm ? handleMagicLinkConfirm : handleMagicLinkRequest}>
              {!showMagicLinkConfirm && (
                <>
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    type="text"
                    value={authForm.name}
                    placeholder="Tu nombre"
                    disabled={isAuthActionBusy}
                    onChange={(event) => setAuthForm((current) => ({ ...current, name: event.target.value }))}
                  />
                </>
              )}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={authForm.email}
                placeholder="tu@email.com"
                disabled={isAuthActionBusy}
                onChange={(event) => setAuthForm((current) => ({ ...current, email: event.target.value }))}
                required
              />

              <button type="submit" className="btn btn-primary" disabled={isAuthActionBusy}>
                {showMagicLinkConfirm ? (
                  <ButtonLabel loading={isCompletingMagicLink} loadingText="Confirmando...">Confirmar ingreso</ButtonLabel>
                ) : (
                  <ButtonLabel loading={isSendingMagicLink} loadingText="Enviando...">Comenzar</ButtonLabel>
                )}
              </button>
            </form>

            {!showMagicLinkConfirm && magicLinkSent && (
              <p className="auth-help">Revisá tu email y abrí el magic-link en este mismo navegador/dispositivo.</p>
            )}
            {!showMagicLinkConfirm && !hasFirebaseConfig && <p className="auth-help warning">Falta Firebase config en `.env`.</p>}
          </div>
        </main>
        <StatusToast message={status} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <BrandHeader avatarInitial={avatarInitial} onAvatarClick={() => setMenuOpen(true)} />
      <main className="content-area">
        <section className={`section ${activeTab === 'emotion' ? 'active' : ''}`}>
          <header className="section-header">
            <h1>¿Cómo te sentiste hoy?</h1>
            <p>{formatDate(new Date())}</p>
          </header>

          <div className="question-block">
            <label htmlFor="pleasureSlider">¿Qué tan bien te sentiste hoy?</label>
            <input
              id="pleasureSlider"
              className="slider"
              type="range"
              min="1"
              max="10"
              value={emotionDraft.pleasure}
              onChange={(event) => setEmotionDraft((current) => ({ ...current, pleasure: Number(event.target.value) }))}
            />
            <div className="scale-labels"><span>1</span><span>10</span></div>
            <div className="value-display">{emotionDraft.pleasure}</div>
          </div>

          <div className="question-block">
            <label htmlFor="energySlider">¿Qué nivel de energía tuviste hoy?</label>
            <input
              id="energySlider"
              className="slider"
              type="range"
              min="1"
              max="10"
              value={emotionDraft.energy}
              onChange={(event) => setEmotionDraft((current) => ({ ...current, energy: Number(event.target.value) }))}
            />
            <div className="scale-labels"><span>1</span><span>10</span></div>
            <div className="value-display">{emotionDraft.energy}</div>
          </div>

          <div className="chart-panel">
            <p>Tu mapa emocional</p>
            <div className="chart-grid">
              <span className="chart-axis-label-y">Energía</span>
              <span className="chart-axis-label-x">Placer</span>
              {points.map((point) => (
                <span
                  key={point.id}
                  className={`chart-point ${point.isLive ? 'live' : ''}`}
                  style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
                />
              ))}
            </div>
          </div>

          <button className="btn btn-primary" onClick={handleSaveEmotion} disabled={isSavingEmotion}>
            <ButtonLabel loading={isSavingEmotion} loadingText="Guardando...">Guardar día</ButtonLabel>
          </button>
        </section>

        <section className={`section ${activeTab === 'calendar' ? 'active' : ''}`}>
          {!selectedDay && (
            <>
              <header className="section-header">
                <h1>60 días con vos mismo</h1>
                <p>Reto de autoconocimiento</p>
                <div className="pill">Racha: {streak} días</div>
              </header>

              <div className="calendar-grid">
                {Array.from({ length: 60 }, (_, index) => {
                  const day = index + 1;
                  const entry = journalByDay[day];
                  const classes = ['day-cell'];
                  if (entry?.completed) {
                    classes.push('completed');
                  } else if (hasProgramStarted && day < currentDay) {
                    classes.push('incomplete');
                  }
                  if (day === currentDay) {
                    classes.push('today');
                  }

                  return (
                    <button key={day} className={classes.join(' ')} onClick={() => openDay(day)}>
                      {day}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {selectedDay && dayDraft && (
            <div className="day-detail">
              <button className="back-link" onClick={closeDay}>← VOLVER</button>
              <h2>Día {selectedDay}</h2>

              {selectedDay <= 10 && (
                <div className="exercise-block">
                  <h3>Ejercicios diarios</h3>
                  <h4 className="exercise-index">1. Gratitud</h4>
                  <div className="field-wrap">
                    <label className="micro-label">HOY AGRADEZCO A... / POR...</label>
                    <textarea
                      value={dayDraft.gratitude}
                      onChange={(event) => setDayDraft((current) => ({ ...current, gratitude: event.target.value }))}
                      placeholder="Escribe aquí..."
                    />
                  </div>

                  <h4 className="exercise-index">2. Situaciones incómodas (mínimo 3)</h4>
                  <div className="field-wrap">
                    {dayDraft.situations.map((row, index) => (
                      <div key={`s-${index}`} className="card-row">
                        <strong>SITUACIÓN {index + 1}</strong>
                        {situationFields.map((field) => (
                          <div key={field.key} className="card-field">
                            <label className="micro-label">{field.label}</label>
                            <textarea
                              placeholder={field.placeholder}
                              value={row[field.key]}
                              onChange={(event) => updateSituation(index, field.key, event.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDayDraft((current) => ({ ...current, situations: [...current.situations, emptySituation()] }))}
                    >
                      + AÑADIR OTRA SITUACIÓN
                    </button>
                  </div>
                </div>
              )}

              {selectedDay >= 11 && (
                <div className="exercise-block">
                  <h3>Situaciones incómodas - Trabajo cognitivo</h3>
                  <div className="field-wrap">
                    {dayDraft.cognitiveWork.map((row, index) => (
                      <div key={`c-${index}`} className="card-row">
                        <strong>SITUACIÓN {index + 1}</strong>
                        {cognitiveFields.map((field) => (
                          <div key={field.key} className="card-field">
                            <label className="micro-label">{field.label}</label>
                            <textarea
                              placeholder={field.placeholder}
                              value={row[field.key]}
                              onChange={(event) => updateCognitive(index, field.key, event.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDayDraft((current) => ({ ...current, cognitiveWork: [...current.cognitiveWork, emptyCognitive()] }))}
                    >
                      + AÑADIR OTRA SITUACIÓN
                    </button>
                  </div>
                </div>
              )}

              <div className="exercise-block">
                <h3>Ejercicio del día</h3>
                <h4>{selectedExercise.title}</h4>

                {selectedExercise.type === 'rating' && selectedExercise.fields.map((field) => {
                  const value = dayDraft.variableExercise[field.id] ?? 5;
                  return (
                    <div key={field.id} className="field-wrap">
                      <label>{field.label}</label>
                      <input
                        className="slider"
                        type="range"
                        min="1"
                        max="10"
                        value={value}
                        onChange={(event) => updateVariable(field.id, Number(event.target.value))}
                      />
                      <div className="value-display small">{value}</div>
                    </div>
                  );
                })}

                {selectedExercise.type !== 'rating' && selectedExercise.fields.map((field) => {
                  const value = dayDraft.variableExercise[field.id] || '';
                  if (field.type === 'textarea') {
                    return (
                      <div key={field.id} className="field-wrap">
                        <label>{field.label}</label>
                        <textarea value={value} onChange={(event) => updateVariable(field.id, event.target.value)} />
                      </div>
                    );
                  }

                  return (
                    <div key={field.id} className="field-wrap">
                      <label>{field.label}</label>
                      <input type="text" value={value} onChange={(event) => updateVariable(field.id, event.target.value)} />
                    </div>
                  );
                })}
              </div>

              <button className="btn btn-primary" onClick={handleSaveDay} disabled={isSavingDay}>
                <ButtonLabel loading={isSavingDay} loadingText="Guardando...">Guardar día</ButtonLabel>
              </button>
            </div>
          )}
        </section>

        <section className={`section ${activeTab === 'material' ? 'active' : ''}`}>
          <header className="section-header">
            <h1>Material Extra</h1>
            <p>Meditaciones guiadas</p>
          </header>

          <div className="material-intro">
            Elegí una meditación y reproducila cuando lo necesites.
          </div>

          <div className="media-player-block">
            <div className="media-player-head">
              <span>Reproduciendo</span>
              <h3>{selectedMaterial.title}</h3>
            </div>
            <video
              key={selectedMaterial.id}
              controls
              preload="metadata"
              playsInline
              src={selectedMaterial.src}
            />
          </div>

          <div className="media-list">
            {materialItems.map((item) => (
              <button
                key={item.id}
                className={`media-list-item ${selectedMaterial.id === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMaterial(item)}
              >
                <video
                  className="media-thumb-video"
                  src={item.src}
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={(event) => {
                    const video = event.currentTarget;
                    if (video.currentTime === 0) {
                      try {
                        video.currentTime = 0.05;
                      } catch (_error) {
                        // Ignore browsers that block programmatic seek before interaction.
                      }
                    }
                  }}
                  aria-hidden="true"
                />
                <div className="media-list-copy">
                  <strong>{item.title}</strong>
                  <span>Meditación guiada</span>
                </div>
                <span className="media-list-action">Ver</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={activeTab === item.key ? 'active' : ''}
            onClick={() => setActiveTab(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {menuOpen && (
        <FullScreenMenu
          name={displayName}
          avatarInitial={avatarInitial}
          isSigningOut={isSigningOut}
          onClose={() => setMenuOpen(false)}
          onSignOut={handleSignOut}
        />
      )}

      <StatusToast message={status} />
    </div>
  );
}

function BrandHeader({ avatarInitial, onAvatarClick }) {
  return (
    <header className="brand-header">
      <div className="left-brand brand-logo">
        <img src="/logo-di-tela.jpeg" alt="Universidad Torcuato Di Tella" />
      </div>
      <div className="separator">x</div>
      <div className="right-brand">Estanislao Bachrach</div>
      {onAvatarClick && (
        <button type="button" className="avatar-button" onClick={onAvatarClick} aria-label="Abrir menú">
          {avatarInitial}
        </button>
      )}
    </header>
  );
}

function FullScreenMenu({ name, avatarInitial, isSigningOut, onClose, onSignOut }) {
  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menú">
      <div className="menu-panel">
        <div className="menu-head">
          <button type="button" className="menu-close" onClick={onClose} aria-label="Cerrar menú" disabled={isSigningOut}>×</button>
        </div>
        <div className="menu-user">
          <span className="menu-avatar">{avatarInitial}</span>
          <p>{name}</p>
        </div>
        <div className="menu-actions">
          <button type="button" className="menu-action" onClick={onSignOut} disabled={isSigningOut}>
            <ButtonLabel loading={isSigningOut} loadingText="Saliendo...">Salir</ButtonLabel>
          </button>
        </div>
      </div>
    </div>
  );
}

function ButtonLabel({ loading, loadingText, children }) {
  return (
    <span className="button-label">
      {loading && <span className="button-spinner" aria-hidden="true" />}
      <span>{loading ? loadingText : children}</span>
    </span>
  );
}

function StatusToast({ message }) {
  return <div className={`status-toast ${message ? 'show' : ''}`}>{message || ' '}</div>;
}

export default App;
