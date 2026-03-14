/**
 * Set to true to allow new user registrations (name + email, "Comenzar").
 * Set to false to show only the "existing account" message and email-only login link.
 * Existing users can always sign in via magic link.
 */
export const REGISTRATION_ENABLED = true;

/**
 * Emails that have admin privileges.
 * These users can access future Bitácora days and will be allowed into /admin.
 */
export const ADMIN_EMAILS = [
  'nikoshonik@gmail.com',
  'ebachrach@utdt.edu',
  'agustin.amuchastegui@gmail.com',
  'manuel@ibercover.com',
  'agucho@gmail.com'
];

/**
 * Returns true when the provided Firebase user belongs to the admin allowlist.
 * @param {import('firebase/auth').User | null} user
 */
export function isAdminUser(user) {
  if (!user || !user.email) return false;
  return ADMIN_EMAILS.includes(user.email.toLowerCase().trim());
}
