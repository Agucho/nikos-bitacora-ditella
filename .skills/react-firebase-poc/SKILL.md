---
name: react-firebase-poc
description: Scaffold and deliver React web apps backed by Firebase Auth (magic-link), Firestore, Cloud Functions, and Storage. Use when starting a mobile/tablet-first demo or pilot with this stack, especially when the user wants reusable project bootstrapping and a consistent Firebase architecture.
---

# React Firebase POC

Build a React web app and Firebase backend with the same conventions used in this repository.

## Workflow

1. Confirm product scope:
- Screens and user flow.
- Auth mode: email magic-link.
- Firestore data model.
- Storage media requirements.
- Which actions must go through Cloud Functions.

2. Bootstrap from script:
- Run `scripts/bootstrap-react-firebase.sh <project_dir>`.
- If `--with-install` is provided, install both frontend and functions dependencies.

3. Configure Firebase:
- Copy `.env.example` to `.env` and fill web config values.
- Set project id in `.firebaserc`.
- Keep callable writes in frontend and lock direct writes in Firestore rules.

4. Implement product modules:
- `Emotionometer`: save daily pleasure/energy.
- `Bitacora`: 60-day grid + day detail forms.
- `Material Extra`: media gallery backed by Storage paths.

5. Validate before handoff:
- Frontend runs in local dev.
- Functions compile/start.
- Rules match callable-only write model.
- Mobile/tablet layout check.

## Files to Reuse

- Script: `scripts/bootstrap-react-firebase.sh`
- Schema: `references/firestore-schema.md`
- Checklist: `references/demo-rollout-checklist.md`
