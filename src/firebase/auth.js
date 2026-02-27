import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink
} from 'firebase/auth';
import { auth, hasFirebaseConfig } from './client';

const EMAIL_STORAGE_KEY = 'bitacora.emailForSignIn';
const PROFILE_STORAGE_KEY = 'bitacora.pendingProfile';
export const MAGIC_LINK_EMAIL_REQUIRED_CODE = 'bitacora/email-link-email-required';

function getActionUrl() {
  const envUrl = (import.meta.env.VITE_MAGIC_LINK_REDIRECT_URL || '').trim();
  const isProd = import.meta.env.PROD;

  // In production, always return to the current deployed origin.
  // This prevents localhost redirects from leaking into hosting builds.
  if (isProd) {
    return window.location.origin;
  }

  return envUrl || window.location.origin;
}

export function hasMagicLinkInUrl(url = window.location.href) {
  if (!hasFirebaseConfig || !auth) {
    return false;
  }

  return isSignInWithEmailLink(auth, url);
}

export function persistPendingProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function consumePendingProfile() {
  const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
  localStorage.removeItem(PROFILE_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function getPendingMagicLinkEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY) || '';
}

export async function sendMagicLink(email) {
  if (!hasFirebaseConfig || !auth) {
    throw new Error('Firebase is not configured. Add variables from .env.example');
  }

  const actionCodeSettings = {
    url: getActionUrl(),
    handleCodeInApp: true
  };

  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  localStorage.setItem(EMAIL_STORAGE_KEY, email);
}

export async function completeMagicLinkSignIn(emailOverride) {
  if (!hasFirebaseConfig || !auth) {
    return null;
  }

  if (!hasMagicLinkInUrl(window.location.href)) {
    return null;
  }

  let email = (emailOverride || localStorage.getItem(EMAIL_STORAGE_KEY) || '').trim();

  if (!email) {
    const error = new Error('Confirmá tu email para completar el ingreso.');
    error.code = MAGIC_LINK_EMAIL_REQUIRED_CODE;
    throw error;
  }

  localStorage.setItem(EMAIL_STORAGE_KEY, email);
  const result = await signInWithEmailLink(auth, email, window.location.href);
  localStorage.removeItem(EMAIL_STORAGE_KEY);
  window.history.replaceState({}, document.title, window.location.pathname);
  return result.user;
}
