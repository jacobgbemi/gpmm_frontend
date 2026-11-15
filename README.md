# GlintPM Frontend (gpmm_frontend)

Cross-platform mobile app for GlintPM — training, career opportunities, resources, and support.

**Stack:** React Native · Expo · TypeScript · Expo Router · TanStack Query · Axios

## Phase 00 — Foundation

This branch delivers the project foundation only:

- Expo + TypeScript project
- App identifiers and metadata
- Environment configuration (`.env.example`)
- Theme tokens (GlintPM palette)
- Central API client foundation
- Root layout with Expo Router + React Query
- Feature-oriented folder structure
- Lint / typecheck / test scripts

Feature screens, design system components, and auth are implemented in later phases.

## Getting started

```bash
# Install dependencies
npm install

# Copy environment example
cp .env.example .env

# Start Expo
npx expo start
```

Then open in Expo Go, Android emulator, or iOS simulator.

## Environment

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_API_BASE_URL` | Django API base, e.g. `http://localhost:8000/api/v1` |
| `EXPO_PUBLIC_APP_ENV` | `development` \| `staging` \| `production` |

`EXPO_PUBLIC_*` values are embedded in the client. Never put secrets in them.

## Scripts

| Command | Purpose |
|---|---|
| `npm start` | Start Expo dev server |
| `npm run android` | Start with Android |
| `npm run ios` | Start with iOS |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm test` | Jest |

## Documentation

See the repository `docs/` folder and `AGENTS.md` for product, architecture, and phase instructions.

## Branch

`frontend-phase-00` (foundation). Do not push or merge without review and explicit approval per the master development workflow.
