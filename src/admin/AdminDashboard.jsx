import { useEffect, useMemo, useState } from 'react';
import { getExerciseForDay } from '../data/exercises';
import {
  calcCurrentDay,
  calcStreak,
  fetchAllUsers,
  fetchUserJournal,
  getUserStatus
} from './adminDb';
import { isAdminUser } from '../config';
import './admin.css';

function participantTypeDisplay(user) {
  if (isAdminUser(user)) return 'Admin';
  if (user.participantType === 'student') return 'Estudiante';
  if (user.participantType === 'guest') return 'Invitado/a';
  return '—';
}

const SITUATION_LABELS = {
  situacion: 'Situación',
  cuerpo: 'Cuerpo',
  pensamientos: 'Pensamientos',
  emociones: 'Emociones'
};

const COGNITIVE_LABELS = {
  visualizacion: 'Visualización',
  pensamientosNuevos: 'Pensamientos nuevos',
  intento: 'Intento',
  cambioEmocion: 'Cambio en emociones',
  cambioCuerpo: 'Cambio en cuerpo',
  menosIncomoda: 'Menos incómoda',
  masEficaz: 'Más eficaz'
};

function statusCssClass(status) {
  if (status === 'al día') return 'admin-status--al-dia';
  if (status === 'con retraso') return 'admin-status--con-retraso';
  return 'admin-status--sin-actividad';
}

// Default sort: con retraso → sin actividad → al día
const STATUS_ORDER = { 'con retraso': 0, 'sin actividad': 1, 'al día': 2 };

// Status order used only for the manual column sort (asc = al día first)
const STATUS_ORDER_COLUMN = { 'al día': 0, 'con retraso': 1, 'sin actividad': 2 };

function defaultSort(a, b) {
  const diff = (STATUS_ORDER[a.status] ?? 3) - (STATUS_ORDER[b.status] ?? 3);
  if (diff !== 0) return diff;
  // within group: streak desc, then latestCompleted desc
  const streakDiff = (b.streak ?? 0) - (a.streak ?? 0);
  if (streakDiff !== 0) return streakDiff;
  return (b.latestCompleted ?? -1) - (a.latestCompleted ?? -1);
}

function compareUsers(a, b, field, direction) {
  const dir = direction === 'asc' ? 1 : -1;

  if (field === 'status') {
    const diff = (STATUS_ORDER_COLUMN[a.status] ?? 3) - (STATUS_ORDER_COLUMN[b.status] ?? 3);
    if (diff !== 0) return diff * dir;
    // tiebreaker: latestCompleted descending
    return (b.latestCompleted ?? -1) - (a.latestCompleted ?? -1);
  }

  if (field === 'name') {
    return (a.name || '').localeCompare(b.name || '', 'es') * dir;
  }

  if (field === 'participantType') {
    return participantTypeDisplay(a).localeCompare(participantTypeDisplay(b), 'es') * dir;
  }

  if (field === 'startDate') {
    if (!a.startDate && !b.startDate) return 0;
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return a.startDate.localeCompare(b.startDate) * dir;
  }

  // numeric fields: currentDay, latestCompleted, streak — nulls always last
  if (a[field] == null && b[field] == null) return 0;
  if (a[field] == null) return 1;
  if (b[field] == null) return -1;
  return (a[field] - b[field]) * dir;
}

// ─── Main component ───────────────────────────────────────────────────────────

export function AdminDashboard({ user }) {
  const [rawUsers, setRawUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortField, setSortField] = useState(null);   // null = default sort
  const [sortDirection, setSortDirection] = useState('asc');

  function handleSort(field) {
    if (field === sortField) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }

  function handleResetSort() {
    setSortField(null);
    setSortDirection('asc');
  }

  useEffect(() => {
    let cancelled = false;

    fetchAllUsers()
      .then(async (users) => {
        const withJournals = await Promise.all(
          users.map(async (u) => {
            try {
              const journalByDay = await fetchUserJournal(u.uid);
              return { ...u, journalByDay };
            } catch {
              return { ...u, journalByDay: {} };
            }
          })
        );
        if (!cancelled) setRawUsers(withJournals);
      })
      .catch((e) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  const enrichedUsers = useMemo(() => rawUsers
  .map((u) => {
    const currentDay = calcCurrentDay(u.startDate);
    const streak = calcStreak(u.journalByDay, currentDay);
    const completedEntries = Object.values(u.journalByDay).filter((e) => e?.completed);
    const latestCompleted = completedEntries.length > 0
      ? Math.max(...completedEntries.map((e) => e.day))
      : null;
    const status = getUserStatus(u.startDate, u.journalByDay, currentDay);
    return { ...u, currentDay, streak, latestCompleted, status };
  })
  .filter((u) => u.name && u.email && u.participantType),
[rawUsers]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return enrichedUsers;
    return enrichedUsers.filter((u) =>
      (u.name || '').toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q)
    );
  }, [enrichedUsers, search]);

  const sorted = useMemo(
    () => sortField
      ? [...filtered].sort((a, b) => compareUsers(a, b, sortField, sortDirection))
      : [...filtered].sort(defaultSort),
    [filtered, sortField, sortDirection]
  );

  const metrics = useMemo(() => ({
    total: enrichedUsers.length,
    alDia: enrichedUsers.filter((u) => u.status === 'al día').length,
    conRetraso: enrichedUsers.filter((u) => u.status === 'con retraso').length,
    sinActividad: enrichedUsers.filter((u) => u.status === 'sin actividad').length,
  }), [enrichedUsers]);

  if (selectedUser) {
    return (
      <UserDetail
        userData={selectedUser}
        adminUser={user}
        onBack={() => setSelectedUser(null)}
      />
    );
  }

  return (
    <div className="admin-shell">
      <AdminHeader user={user} />

      <main className="admin-main">
        <h1 className="admin-title">Participantes</h1>

        {loading && <p className="admin-loading">Cargando participantes…</p>}
        {error && <p className="admin-error">Error al cargar datos: {error}</p>}

        {!loading && !error && (
          <>
            <div className="admin-metrics">
              <div className="admin-metric-card">
                <span className="admin-metric-value">{metrics.total}</span>
                <span className="admin-metric-label">Participantes</span>
              </div>
              <div className="admin-metric-card admin-metric-card--al-dia">
                <span className="admin-metric-value">{metrics.alDia}</span>
                <span className="admin-metric-label">Al día</span>
              </div>
              <div className="admin-metric-card admin-metric-card--con-retraso">
                <span className="admin-metric-value">{metrics.conRetraso}</span>
                <span className="admin-metric-label">Con retraso</span>
              </div>
              <div className="admin-metric-card admin-metric-card--sin-actividad">
                <span className="admin-metric-value">{metrics.sinActividad}</span>
                <span className="admin-metric-label">Sin actividad</span>
              </div>
            </div>

            <div className="admin-toolbar">
              <input
                className="admin-search"
                type="search"
                placeholder="Buscar por nombre o email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="admin-count">
                {sorted.length} {sorted.length === 1 ? 'participante' : 'participantes'}
              </span>
              {sortField && (
                <button type="button" className="admin-reset-sort" onClick={handleResetSort}>
                  Restablecer orden
                </button>
              )}
            </div>

            <UserTable
              users={sorted}
              onSelect={setSelectedUser}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </>
        )}
      </main>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function AdminHeader({ user }) {
  return (
    <header className="admin-header">
      <div className="admin-header-inner">
        <div className="admin-brand">
          <img src="/header-bitacora.jpg" alt="Bitácora Di Tella" />
          <span className="admin-badge">Admin</span>
        </div>
        <div className="admin-header-meta">
          <span className="admin-user-email">{user.email}</span>
          <a className="admin-exit" href="/">← Volver a la app</a>
        </div>
      </div>
    </header>
  );
}

// ─── User table ───────────────────────────────────────────────────────────────

function SortTh({ field, label, sortField, sortDirection, onSort }) {
  const active = sortField === field;
  return (
    <th
      className={`admin-th-sortable${active ? ' admin-th-active' : ''}`}
      onClick={() => onSort(field)}
    >
      {label}
      <span className="admin-sort-arrow">
        {active ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅'}
      </span>
    </th>
  );
}

function UserTable({ users, onSelect, sortField, sortDirection, onSort }) {
  const sortProps = { sortField, sortDirection, onSort };

  if (users.length === 0) {
    return (
      <div className="admin-table-wrap">
        <p className="admin-empty">No se encontraron participantes.</p>
      </div>
    );
  }

  return (
    <div className="admin-table-wrap">
      <div className="admin-table-scroll">
        <table className="admin-table">
          <thead>
            <tr>
              <SortTh field="name" label="Nombre" {...sortProps} />
              <th>Email</th>
              <SortTh field="participantType" label="Tipo" {...sortProps} />
              <SortTh field="startDate" label="Inicio" {...sortProps} />
              <SortTh field="currentDay" label="Día actual" {...sortProps} />
              <SortTh field="latestCompleted" label="Último completado" {...sortProps} />
              <SortTh field="streak" label="Racha" {...sortProps} />
              <SortTh field="status" label="Estado" {...sortProps} />
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <UserRow key={u.uid} user={u} onSelect={onSelect} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function rowTintClass(status) {
  if (status === 'al día') return 'admin-row--al-dia';
  if (status === 'con retraso') return 'admin-row--con-retraso';
  return 'admin-row--sin-actividad';
}

function UserRow({ user, onSelect }) {
  return (
    <tr
      className={`admin-table-row ${rowTintClass(user.status)}`}
      onClick={() => onSelect(user)}
    >
      <td className="admin-name-cell">{user.name || '—'}</td>
      <td className="admin-email-cell">{user.email || '—'}</td>
      <td className="admin-cell-muted">{participantTypeDisplay(user)}</td>
      <td className="admin-cell-muted">{user.startDate || '—'}</td>
      <td className="admin-cell-muted">{user.currentDay ? `Día ${user.currentDay}` : '—'}</td>
      <td className="admin-cell-muted">{user.latestCompleted ? `Día ${user.latestCompleted}` : '—'}</td>
      <td className="admin-cell-muted">{user.streak > 0 ? `${user.streak} 🔥` : '0'}</td>
      <td>
        <span className={`admin-status ${statusCssClass(user.status)}`}>
          {user.status}
        </span>
      </td>
    </tr>
  );
}

// ─── User detail ──────────────────────────────────────────────────────────────

function UserDetail({ userData, adminUser, onBack }) {
  const [expandedDays, setExpandedDays] = useState(new Set());

  function toggleDay(day) {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
      }
      return next;
    });
  }

  const completedCount = Object.values(userData.journalByDay).filter((e) => e?.completed).length;

  return (
    <div className="admin-shell">
      <AdminHeader user={adminUser} />

      <main className="admin-main">
        <button type="button" className="admin-back" onClick={onBack}>
          ← Volver a participantes
        </button>

        <div className="admin-detail-card">
          <h2 className="admin-detail-name">{userData.name || '(sin nombre)'}</h2>
          <p className="admin-detail-email">{userData.email || '—'}</p>

          <div className="admin-detail-meta">
            <div className="admin-detail-stat">
              <span className="admin-stat-label">Tipo</span>
              <span className="admin-stat-value admin-stat-value--small">
                {participantTypeDisplay(userData)}
              </span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Inicio</span>
              <span className="admin-stat-value admin-stat-value--small">
                {userData.startDate || '—'}
              </span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Día actual</span>
              <span className="admin-stat-value">{userData.currentDay ?? '—'}</span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Último completado</span>
              <span className="admin-stat-value">{userData.latestCompleted ?? '—'}</span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Racha</span>
              <span className="admin-stat-value">{userData.streak}</span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Completados</span>
              <span className="admin-stat-value admin-stat-value--small">{completedCount} / 60</span>
            </div>

            <div className="admin-detail-stat">
              <span className="admin-stat-label">Estado</span>
              <span className={`admin-status ${statusCssClass(userData.status)}`}>
                {userData.status}
              </span>
            </div>
          </div>
        </div>

        <p className="admin-days-title">Registro de días</p>

        <div className="admin-days-list">
          {Array.from({ length: 60 }, (_, i) => i + 1).map((day) => (
            <DayRow
              key={day}
              day={day}
              entry={userData.journalByDay[day] || null}
              isExpanded={expandedDays.has(day)}
              onToggle={() => toggleDay(day)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// ─── Day row ──────────────────────────────────────────────────────────────────

function DayRow({ day, entry, isExpanded, onToggle }) {
  const exercise = getExerciseForDay(day);
  const isCompleted = entry?.completed === true;
  const wasLate = isCompleted && entry.completedOnDay != null && entry.completedOnDay !== entry.day;
  const hasEntry = entry !== null;

  let statusText;
  let statusClass;

  if (!hasEntry || !isCompleted) {
    statusText = hasEntry ? 'Sin completar' : 'Pendiente';
    statusClass = 'admin-day-status-text--pending';
  } else if (wasLate) {
    statusText = 'Completado tarde';
    statusClass = 'admin-day-status-text--late';
  } else {
    statusText = 'Completado';
    statusClass = 'admin-day-status-text--completed';
  }

  const canExpand = hasEntry && entry.data;

  return (
    <div className="admin-day-row">
      <div
        className="admin-day-header"
        role="button"
        tabIndex={0}
        onClick={canExpand ? onToggle : undefined}
        onKeyDown={canExpand ? (e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(); } : undefined}
        style={canExpand ? {} : { cursor: 'default' }}
      >
        <span className="admin-day-number">Día {day}</span>
        <span className="admin-day-title-text">{exercise.title}</span>
        <span className={`admin-day-status-text ${statusClass}`}>{statusText}</span>
        {canExpand && (
          <span className={`admin-day-chevron ${isExpanded ? 'admin-day-chevron--open' : ''}`}>
            ▶
          </span>
        )}
      </div>

      {isExpanded && canExpand && (
        <DayBody data={entry.data} exercise={exercise} />
      )}
    </div>
  );
}

// ─── Day body (expanded content) ─────────────────────────────────────────────

function DayBody({ data, exercise }) {
  const hasRatings = data.pleasure != null || data.energy != null;
  const hasGratitude = data.gratitude && data.gratitude.trim();

  const variableEntries = (exercise.fields || []).filter(
    (f) => data.variableExercise?.[f.id] && String(data.variableExercise[f.id]).trim()
  );

  const filledSituations = (data.situations || []).filter(
    (row) => row && Object.values(row).some((v) => typeof v === 'string' && v.trim())
  );

  const filledCognitive = (data.cognitiveWork || []).filter(
    (row) => row && Object.values(row).some((v) => typeof v === 'string' && v.trim())
  );

  const hasAnything = hasRatings || variableEntries.length > 0 || hasGratitude
    || filledSituations.length > 0 || filledCognitive.length > 0;

  if (!hasAnything) {
    return (
      <div className="admin-day-body">
        <span style={{ color: '#bbb', fontSize: '13px' }}>Sin contenido guardado.</span>
      </div>
    );
  }

  return (
    <div className="admin-day-body">
      {hasRatings && (
        <div>
          <p className="admin-section-title">Emocionómetro</p>
          <div className="admin-ratings-row">
            {data.pleasure != null && (
              <div className="admin-rating-item">
                <span className="admin-rating-label">Placer</span>
                <span className="admin-rating-value">{data.pleasure}</span>
              </div>
            )}
            {data.energy != null && (
              <div className="admin-rating-item">
                <span className="admin-rating-label">Energía</span>
                <span className="admin-rating-value">{data.energy}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {variableEntries.length > 0 && (
        <div>
          <p className="admin-section-title">Ejercicio del día</p>
          <div className="admin-field-list">
            {variableEntries.map((f) => (
              <div key={f.id} className="admin-field-item">
                <span className="admin-field-label">{f.label}</span>
                <span className="admin-field-value">{data.variableExercise[f.id]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasGratitude && (
        <div>
          <p className="admin-section-title">Gratitud</p>
          <span className="admin-field-value">{data.gratitude}</span>
        </div>
      )}

      {filledSituations.length > 0 && (
        <div>
          <p className="admin-section-title">Situaciones incómodas</p>
          {filledSituations.map((row, i) => (
            <div key={i} className="admin-group-block">
              {Object.entries(row)
                .filter(([, v]) => typeof v === 'string' && v.trim())
                .map(([key, val]) => (
                  <div key={key} className="admin-field-item">
                    <span className="admin-field-label">
                      {SITUATION_LABELS[key] || key}
                    </span>
                    <span className="admin-field-value">{val}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}

      {filledCognitive.length > 0 && (
        <div>
          <p className="admin-section-title">Trabajo cognitivo</p>
          {filledCognitive.map((row, i) => (
            <div key={i} className="admin-group-block">
              {Object.entries(row)
                .filter(([, v]) => typeof v === 'string' && v.trim())
                .map(([key, val]) => (
                  <div key={key} className="admin-field-item">
                    <span className="admin-field-label">
                      {COGNITIVE_LABELS[key] || key}
                    </span>
                    <span className="admin-field-value">{val}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
