import { httpsCallable } from 'firebase/functions';
import {
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  collection,
  serverTimestamp,
  setDoc
} from 'firebase/firestore';
import { db, functions, hasFirebaseConfig } from './client';

const useCallables = import.meta.env.VITE_USE_CALLABLES !== 'false';

function ensureFirebase() {
  if (!hasFirebaseConfig || !db) {
    throw new Error('Firebase is not configured. Add variables from .env.example');
  }
}

async function callOrFallback(functionName, payload, fallback) {
  ensureFirebase();

  if (useCallables && functions) {
    try {
      const call = httpsCallable(functions, functionName);
      const result = await call(payload);
      return result.data;
    } catch (error) {
      console.warn(`${functionName} callable failed, using direct Firestore fallback`, error);
    }
  }

  return fallback();
}

export async function upsertProfile(uid, profile) {
  return callOrFallback('upsertProfile', profile, async () => {
    const ref = doc(db, `users/${uid}`);
    const payload = {
      updatedAt: serverTimestamp()
    };

    if (typeof profile.name === 'string') {
      payload.name = profile.name.trim();
    }

    if (typeof profile.email === 'string') {
      payload.email = profile.email.trim();
    }

    if (typeof profile.startDate === 'string' && profile.startDate) {
      payload.startDate = profile.startDate;
    }

    await setDoc(
      ref,
      payload,
      { merge: true }
    );
    return { ok: true };
  });
}

export async function saveEmotionEntry(uid, payload) {
  const dateKey = payload.dateKey;
  return callOrFallback('saveEmotionEntry', payload, async () => {
    const ref = doc(db, `users/${uid}/emotions/${dateKey}`);
    await setDoc(
      ref,
      {
        dateKey,
        pleasure: payload.pleasure,
        energy: payload.energy,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
    return { ok: true };
  });
}

export async function saveJournalEntry(uid, payload) {
  const dataForCallable = {
    ...payload,
    completedOnDay: payload.completed ? (payload.completedOnDay ?? null) : null
  };
  return callOrFallback('saveJournalEntry', dataForCallable, async () => {
    const ref = doc(db, `users/${uid}/journal/${String(payload.day)}`);
    await setDoc(
      ref,
      {
        day: payload.day,
        data: payload.data,
        completed: payload.completed,
        completedOnDay: payload.completed ? (payload.completedOnDay ?? null) : null,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
    return { ok: true };
  });
}

export function watchProfile(uid, onData, onError) {
  ensureFirebase();
  return onSnapshot(doc(db, `users/${uid}`), (snap) => {
    onData(snap.exists() ? snap.data() : null);
  }, onError);
}

export function watchEmotions(uid, onData, onError) {
  ensureFirebase();
  const ref = query(collection(db, `users/${uid}/emotions`), orderBy('dateKey', 'asc'));
  return onSnapshot(ref, (snap) => {
    onData(snap.docs.map((docItem) => ({ id: docItem.id, ...docItem.data() })));
  }, onError);
}

export function watchJournal(uid, onData, onError) {
  ensureFirebase();
  const ref = query(collection(db, `users/${uid}/journal`), orderBy('day', 'asc'));
  return onSnapshot(ref, (snap) => {
    const byDay = {};
    snap.docs.forEach((docItem) => {
      const data = docItem.data();
      byDay[data.day] = data;
    });
    onData(byDay);
  }, onError);
}

export async function getProfile(uid) {
  ensureFirebase();
  const snap = await getDoc(doc(db, `users/${uid}`));
  return snap.exists() ? snap.data() : null;
}
