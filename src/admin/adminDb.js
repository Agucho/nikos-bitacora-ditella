import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/client';

const BUENOS_AIRES_TIMEZONE = 'America/Argentina/Buenos_Aires';

function getBuenosAiresDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: BUENOS_AIRES_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);

  return {
    year: Number(parts.find((p) => p.type === 'year').value),
    month: Number(parts.find((p) => p.type === 'month').value),
    day: Number(parts.find((p) => p.type === 'day').value)
  };
}

export function calcCurrentDay(startDate) {
  if (!startDate) return null;

  const start = new Date(startDate);
  const startParts = getBuenosAiresDateParts(start);
  const todayParts = getBuenosAiresDateParts(new Date());

  const startDay = new Date(startParts.year, startParts.month - 1, startParts.day);
  const todayDay = new Date(todayParts.year, todayParts.month - 1, todayParts.day);

  const diffMs = todayDay.getTime() - startDay.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

  return Math.max(1, Math.min(60, diffDays));
}

export function calcStreak(journalByDay, currentDay) {
  if (!currentDay) return 0;
  let streak = 0;
  for (let day = currentDay; day >= 1; day -= 1) {
    if (journalByDay[day]?.completed) {
      streak += 1;
    } else if (streak > 0) {
      break;
    }
  }
  return streak;
}

export function getUserStatus(startDate, journalByDay, currentDay) {
  if (!startDate || !currentDay) return 'sin actividad';

  const completedEntries = Object.values(journalByDay).filter((e) => e?.completed);
  if (completedEntries.length === 0) return 'sin actividad';

  const latestCompleted = Math.max(...completedEntries.map((e) => e.day));

  return latestCompleted >= currentDay - 1 ? 'al día' : 'con retraso';
}

export async function fetchAllUsers() {
  const snap = await getDocs(collection(db, 'users'));
  return snap.docs.map((docSnap) => ({
    uid: docSnap.id,
    journalByDay: {},
    ...docSnap.data()
  }));
}

export async function fetchUserJournal(uid) {
  const snap = await getDocs(
    query(collection(db, `users/${uid}/journal`), orderBy('day', 'asc'))
  );
  const byDay = {};
  snap.docs.forEach((d) => {
    const data = d.data();
    byDay[data.day] = data;
  });
  return byDay;
}
