# PHASE 01 — FRONTEND FOUNDATION AND PROJECT SETUP

## 1. Objective
Set up the GlintPM mobile application frontend using React Native, Expo and TypeScript. Support Android and iOS from a shared codebase.

## 2. Coding Agent Instructions
Before writing code:
1. Read project documentation.
2. Inspect the existing frontend repository.
3. Confirm Expo SDK and compatible React Native version.
4. Review backend API architecture.
5. Confirm development environment and dependencies.
6. Report missing requirements before making architectural decisions.
Do not overwrite working code without understanding it.

## 3. Technology Requirements
Use React Native, Expo, TypeScript, approved navigation solution, a suitable API client, server-state management, React Native-compatible form validation, secure credential storage, ESLint, Prettier and approved test framework. Verify current official docs and compatibility; avoid unnecessary dependencies.

## 4. Project Structure
Establish a feature-based structure similar to:
```text
src/
  app/
  assets/
  components/common/
  components/forms/
  components/layout/
  features/auth/
  features/dashboard/
  features/courses/
  features/enrollments/
  features/career/
  features/resources/
  features/support/
  features/payments/
  features/notifications/
  features/profile/
  hooks/
  navigation/
  services/api/
  store/
  theme/
  types/
  utils/
  constants/
```
Adapt to the approved architecture.

## 5. Setup Tasks
1. Initialise Expo.
2. Configure TypeScript and entry point.
3. Configure app name and identifiers.
4. Configure Android/iOS metadata.
5. Configure environment variables.
6. Configure development and production API base URLs.
7. Set up linting, formatting and testing.
8. Create folder structure and basic app screen.
9. Verify app on Android and iOS simulator/device as available.

## 6. Environment
Create `.env.example` documenting variables such as `EXPO_PUBLIC_API_BASE_URL=`. Never bundle confidential backend or payment secrets. Expo public variables are exposed in the client bundle.

## 7. API Foundation
Create central API client supporting base URL, authentication headers, JSON, timeouts, network failures, consistent HTTP error handling and avoiding duplicated configuration. Do not add feature endpoints in this phase.

## 8. Testing
Verify startup, TypeScript, linting, entry screen, environment config, API connectivity to development backend and Android/iOS startup.

## 9. Acceptance Criteria
Expo and TypeScript configured; Android/iOS startup verified as available; structure established; environment documented; API client available; tests/lint configured; no critical setup errors.

## 10. Deliverables
Working frontend, Expo configuration, TypeScript configuration, environment example, API client foundation, test setup and updated setup docs.

## 11. Final Instruction
Do not proceed until acceptance criteria are satisfied. Report files, dependencies, tests and outstanding issues.
