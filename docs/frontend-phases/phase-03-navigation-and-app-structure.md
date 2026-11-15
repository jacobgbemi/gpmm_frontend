# PHASE 03 — NAVIGATION AND APPLICATION STRUCTURE

## 1. Objective
Implement clear application navigation for GlintPM mobile.

## 2. Main Sections
Provide navigation to Home, Training, Career, Resources, Support and Profile, arranged according to approved UX. Use bottom tabs where appropriate.

## 3. Navigation Requirements
Implement main and authentication navigation, public/authenticated screens, screen transitions, back navigation, deep-link-ready routes where supported, and state restoration where appropriate.

## 4. Authentication-Based Navigation
Unauthenticated users may access welcome, login, registration, password recovery and approved public course information. Authenticated users access relevant app sections. Frontend route guards do not replace backend authorization.

## 5. Structure
Example conceptual structure:
```text
app/
  (auth)/
    login
    register
    forgot-password
  (tabs)/
    home
    training
    career
    resources
    support
    profile
```
Adapt to the selected navigation framework.

## 6. Transitions and Initialisation
Ensure back navigation, authentication redirects, modal dismissal and protected routes behave correctly. Handle initial loading, auth restoration, API initialisation, offline state and session expiry. Do not show protected content before auth state is resolved.

## 7. Testing
Test main/auth navigation, back navigation, protected screens, login/logout transitions and session expiry.

## 8. Acceptance Criteria
Navigation works consistently across platforms, protected routes are handled, no broken routes or redirect loops, and loading/session states are managed.

## 9. Deliverables
Navigation configuration, route structure, auth guards, tests and documentation.

## 10. Final Instruction
Do not proceed until major navigation paths are tested.
