# Demo Rollout Checklist

1. Firebase project
- Auth email-link enabled.
- Hosting target configured.
- Firestore + Storage created in correct region.

2. Runtime config
- `.env` variables filled.
- Redirect URL in auth matches deployed URL.

3. Security
- Firestore rules deployed.
- Storage rules deployed.
- Callable functions deployed.

4. Content
- Upload meditation media to Storage.
- Verify media metadata/cards in app.

5. Device QA
- iPhone Safari portrait.
- iPad Safari portrait and landscape.
- Verify safe-area + fixed header/nav behavior.
