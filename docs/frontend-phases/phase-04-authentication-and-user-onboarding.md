# PHASE 04 — AUTHENTICATION AND USER ONBOARDING

## 1. Objective
Implement frontend authentication and onboarding: account registration, login, password recovery and secure account access.

## 2. Screens
Welcome, registration, login, forgot-password, password-reset according to backend flow, email verification if required, and onboarding if specified.

## 3. Registration
Collect only fields required by backend contract (potentially full name, email, password and confirmation). Validate required fields, email and backend password rules. Show field errors, prevent repeat submissions and show feedback.

## 4. Login
Email/password, visibility toggle, loading state, invalid-credentials feedback and forgot-password navigation. Connect to documented endpoint.

## 5. Authentication Integration
Use documented backend strategy for token/session lifecycle, secure storage, auth state, headers, refresh if supported, logout and session expiry. Do not invent token formats or endpoints.

## 6. Session Restore
On launch, restore credentials, validate/refresh via supported flow, load user profile, route appropriately. If invalid, securely clear credentials and return to auth. Avoid unnecessary login prompts.

## 7. Logout
Call backend logout if supported, clear credentials and sensitive cached data, reset authenticated navigation.

## 8. Error Handling
Handle invalid credentials, duplicate email, weak password, network/server failures, expired sessions, invalid verification links and rate limits. Avoid exposing technical details.

## 9. Testing
Successful/invalid registration and login, password recovery, session restoration, logout, expired token and secure storage.

## 10. Acceptance Criteria
Registration/login integrate with backend; session persists securely; logout clears state; recovery follows contract; errors clear; protected navigation works.

## 11. Deliverables
Auth screens/service/state, secure storage integration, validation and tests.

## 12. Final Instruction
Do not proceed until complete auth flow is tested against backend.
