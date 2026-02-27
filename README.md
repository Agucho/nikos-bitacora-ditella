# Bitacora Di Tella - Demo 1

React web app (mobile/tablet-first) with Firebase backend:
- Firebase Auth (email magic-link)
- Firestore
- Cloud Functions
- Storage-backed media section

## Run frontend

1. Copy env file:
```bash
cp .env.example .env
```

2. Fill Firebase web config values in `.env`.

3. Install and run:
```bash
npm install
npm run dev
```

## Run/deploy functions

1. Install Firebase CLI and login.
2. Set project id in `.firebaserc`.
3. Install dependencies and deploy:
```bash
cd functions
npm install
cd ..
firebase deploy --only functions,firestore:rules,storage:rules
```

## Deploy hosting

```bash
npm run build
firebase deploy --only hosting
```

## Material Extra assets

Local media is copied to `public/material-extra`.
In production, migrate media to Firebase Storage and keep URLs in Firestore/config.

## Skill for reusable scaffolding

Reusable skill scaffold is included at:
- `.skills/react-firebase-poc/SKILL.md`
