#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <project_dir> [--with-install]"
  exit 1
fi

TARGET_DIR="$1"
WITH_INSTALL="false"

if [[ "${2:-}" == "--with-install" ]]; then
  WITH_INSTALL="true"
fi

mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"

if [[ ! -f package.json ]]; then
  cat > package.json <<'JSON'
{
  "name": "react-firebase-poc",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^11.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.7"
  }
}
JSON
fi

mkdir -p src/firebase functions

if [[ ! -f .env.example ]]; then
  cat > .env.example <<'ENV'
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_FUNCTIONS_REGION=us-central1
VITE_MAGIC_LINK_REDIRECT_URL=http://localhost:5173
ENV
fi

if [[ ! -f firebase.json ]]; then
  cat > firebase.json <<'JSON'
{
  "functions": { "source": "functions" },
  "hosting": {
    "public": "dist",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
JSON
fi

if [[ ! -f functions/package.json ]]; then
  cat > functions/package.json <<'JSON'
{
  "name": "functions",
  "private": true,
  "main": "index.js",
  "engines": { "node": "20" },
  "dependencies": {
    "firebase-admin": "^13.0.1",
    "firebase-functions": "^6.2.1"
  }
}
JSON
fi

if [[ "$WITH_INSTALL" == "true" ]]; then
  npm install
  (cd functions && npm install)
fi

echo "Bootstrap complete at $TARGET_DIR"
