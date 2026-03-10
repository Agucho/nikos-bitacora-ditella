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

// Emulator support
if (app && (import.meta.env.DEV || window.location.hostname === 'localhost')) {
  console.log('Firebase Emulators: Connecting...');
  
  if (db) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Firebase Emulators: Firestore connected (port 8080)');
  }
  
  if (auth) {
    connectAuthEmulator(auth, 'http://localhost:9099');
    console.log('Firebase Emulators: Auth connected (port 9099)');
  }
  
  if (storage) {
    connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Firebase Emulators: Storage connected (port 9199)');
  }
  
  if (functions) {
    connectFunctionsEmulator(functions, 'localhost', 5001);
    console.log('Firebase Emulators: Functions connected (port 5001)');
  }
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
