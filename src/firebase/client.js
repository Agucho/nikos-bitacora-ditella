import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

const app = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;
const storage = app ? getStorage(app) : null;
const functionsRegion = import.meta.env.VITE_FIREBASE_FUNCTIONS_REGION || 'us-central1';
const functions = app ? getFunctions(app, functionsRegion) : null;

// Connect to emulators if running on localhost
if (typeof window !== 'undefined' && window.location.hostname === 'localhost' && app) {
  if (auth) connectAuthEmulator(auth, 'http://localhost:9099');
  if (db) connectFirestoreEmulator(db, 'localhost', 8080);
  if (storage) connectStorageEmulator(storage, 'localhost', 9199);
  if (functions) connectFunctionsEmulator(functions, 'localhost', 5001);
  console.log('Firebase Emulator Suite connected');
}

export {
  app,
  auth,
  db,
  storage,
  functions,
  functionsRegion,
  hasFirebaseConfig
};
