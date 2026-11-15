# PHASE 12 — PROFILE, NOTIFICATIONS AND SETTINGS

## 1. Objective
Build profile, notification centre and settings. Users view/update permitted profile information and manage notifications/settings.

## 2. Screens
Profile, edit profile, notification centre, notification details if appropriate, preferences if supported, settings, About GlintPM and logout confirmation.

## 3. Profile
Show backend-supported full name, email, phone, country, image and other approved fields. Integrate:
- `GET /api/v1/users/me/`
- `PATCH /api/v1/users/me/`
Allow only authorised fields. Never allow changing staff permissions, payment verification or enrollment entitlements.

## 4. Profile Editing
Form validation, save/cancel, loading/success/error. Refresh profile after successful update.

## 5. Notifications API
- `GET /api/v1/notifications/`
- `POST /api/v1/notifications/{notification_id}/read/`
- `POST /api/v1/notifications/read-all/`

Use exact contracts.

## 6. Notification Behaviour
Display title, message, time, read/unread and action if supplied. Support individual/all read, unread count, relevant navigation, empty state and refresh. In-app notifications do not imply push is enabled.

## 7. Push Notifications
Only if approved and implemented by backend: integrate selected provider, request permission appropriately, register token through documented flow, handle denial/token changes and deep-link navigation. Do not invent device-registration endpoint. If outside MVP, leave future-ready but unsupported flow unimplemented.

## 8. Preferences and Settings
Only implement backend-supported preference controls. Settings may include account, privacy, terms, About and logout according to requirements.

## 9. Logout
Confirm; call backend where supported; clear credentials and sensitive cache; reset authenticated navigation; return to auth screen.

## 10. Testing
Profile read/update, invalid updates, notifications, read/all-read, unread count, navigation, logout and cleanup.

## 11. Acceptance Criteria
Profile and permitted edits work, notifications and statuses work, preferences only if supported, settings navigation works, logout clears local sensitive state.

## 12. Deliverables
Screens, API integration, notification centre, settings, logout integration and tests.

## 13. Final Instruction
Test profile, notification and logout workflows.
