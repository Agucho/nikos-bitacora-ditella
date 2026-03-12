const { setGlobalOptions } = require('firebase-functions/v2');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onDocumentWritten } = require('firebase-functions/v2/firestore');
const admin = require('firebase-admin');

admin.initializeApp();
setGlobalOptions({ region: 'us-central1', maxInstances: 10 });

const db = admin.firestore();

function assertAuthenticated(request) {
  if (!request.auth?.uid) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }
  return request.auth.uid;
}

exports.upsertProfile = onCall(async (request) => {
  const uid = assertAuthenticated(request);
  const payload = request.data || {};

  const nextProfile = {
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };

  if (typeof payload.name === 'string') {
    nextProfile.name = payload.name.trim();
  }

  if (typeof payload.email === 'string') {
    nextProfile.email = payload.email.trim();
  }

  if (typeof payload.startDate === 'string' && payload.startDate) {
    nextProfile.startDate = payload.startDate;
  }

  await db.doc(`users/${uid}`).set(
    nextProfile,
    { merge: true }
  );

  return { ok: true };
});

exports.saveEmotionEntry = onCall(async (request) => {
  const uid = assertAuthenticated(request);
  const payload = request.data || {};

  const dateKey = String(payload.dateKey || '');
  const pleasure = Number(payload.pleasure);
  const energy = Number(payload.energy);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
    throw new HttpsError('invalid-argument', 'dateKey must use YYYY-MM-DD format.');
  }

  if (!Number.isInteger(pleasure) || pleasure < 1 || pleasure > 10) {
    throw new HttpsError('invalid-argument', 'pleasure must be an integer between 1 and 10.');
  }

  if (!Number.isInteger(energy) || energy < 1 || energy > 10) {
    throw new HttpsError('invalid-argument', 'energy must be an integer between 1 and 10.');
  }

  await db.doc(`users/${uid}/emotions/${dateKey}`).set(
    {
      dateKey,
      pleasure,
      energy,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    },
    { merge: true }
  );

  return { ok: true };
});

exports.saveJournalEntry = onCall(async (request) => {
  const uid = assertAuthenticated(request);
  const payload = request.data || {};

  const day = Number(payload.day);
  const completed = Boolean(payload.completed);
  const data = payload.data && typeof payload.data === 'object' ? payload.data : null;

  if (!Number.isInteger(day) || day < 1 || day > 60) {
    throw new HttpsError('invalid-argument', 'day must be an integer between 1 and 60.');
  }

  if (!data) {
    throw new HttpsError('invalid-argument', 'data payload is required.');
  }

  let completedOnDay = null;
  if (completed && payload.hasOwnProperty('completedOnDay')) {
    const raw = payload.completedOnDay;
    const num = raw !== undefined && raw !== null ? Number(raw) : null;
    if (typeof num === 'number' && !Number.isNaN(num) && num >= 1 && num <= 60) {
      completedOnDay = num;
    }
  }

  const docData = {
    day,
    data,
    completed,
    completedOnDay,
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };

  await db.doc(`users/${uid}/journal/${day}`).set(
    docData,
    { merge: true }
  );

  return { ok: true };
});

exports.onJournalWrite = onDocumentWritten('users/{uid}/journal/{dayId}', async (event) => {
  const uid = event.params.uid;
  const snap = await db.collection(`users/${uid}/journal`).get();

  let completedCount = 0;
  let latestCompletedDay = 0;
  const completedDays = [];

  snap.forEach((docItem) => {
    const item = docItem.data();
    if (item.completed) {
      completedCount += 1;
      completedDays.push(item.day);
      if (item.day > latestCompletedDay) {
        latestCompletedDay = item.day;
      }
    }
  });

  completedDays.sort((a, b) => a - b);
  let streak = 0;
  for (let i = completedDays.length - 1; i >= 0; i -= 1) {
    if (i === completedDays.length - 1) {
      streak = 1;
      continue;
    }

    if (completedDays[i + 1] - completedDays[i] === 1) {
      streak += 1;
    } else {
      break;
    }
  }

  await db.doc(`users/${uid}/meta/progress`).set(
    {
      completedCount,
      latestCompletedDay,
      streak,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    },
    { merge: true }
  );
});
