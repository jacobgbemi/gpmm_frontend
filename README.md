# GlintPM Mobile App (Frontend)

Cross-platform mobile application for GlintPM customers and learners.

**Stack:** React Native · Expo · TypeScript · Expo Router · TanStack Query · Axios · React Hook Form + Zod · Expo SecureStore

## Phase 01 — Frontend Foundation

This branch establishes the project foundation only:

- Expo + TypeScript project
- App metadata (name, bundle IDs)
- Environment configuration (`.env.example`)
- Central Axios API client
- Theme tokens (brand palette)
- Folder structure for features and shared code
- ESLint, Prettier, Jest configuration
- Minimal entry screen confirming startup

No authentication, navigation shell, or feature screens are implemented in this phase.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Expo Go app (optional, for device testing)
- Android Studio / Xcode for simulators (optional)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Align native modules with the Expo SDK (important)
npx expo install --fix

# 3. Copy environment file
cp .env.example .env

# 4. Start the development server
npm start
```

Then press `a` (Android), `i` (iOS), or scan the QR code with Expo Go.

> **Target:** Expo SDK 52 · React 18.3.1 · React Native 0.76.x  
> Unit-test libraries were intentionally omitted in Phase 01 to avoid peer-dependency conflicts. They will be added in a later phase with compatible versions.

## Scripts

| Command            | Description                    |
|--------------------|--------------------------------|
| `npm start`        | Start Expo dev server          |
| `npm run android`  | Open on Android                |
| `npm run ios`      | Open on iOS                    |
| `npm run lint`     | Run ESLint                     |
| `npm run format`   | Format with Prettier           |
| `npm run typecheck`| TypeScript check               |
| `npm test`         | Run Jest tests                 |

## Project structure (Phase 01)

```
glintpm-mobile/
├── app/                    # Expo Router entry points
│   ├── _layout.tsx
│   └── index.tsx
├── src/
│   ├── components/         # Shared UI (common, forms, layout)
│   ├── features/           # Feature modules (auth, dashboard, …)
│   ├── lib/
│   │   ├── api/            # Axios client & helpers
│   │   └── storage/        # SecureStore wrappers
│   ├── theme/              # Colors, spacing, typography
│   ├── constants/          # Env and static config
│   ├── types/
│   ├── hooks/
│   ├── utils/
│   └── ...
├── assets/
├── .env.example
├── app.json
├── package.json
└── tsconfig.json
```

## Environment variables

Only `EXPO_PUBLIC_*` variables are embedded in the client bundle.  
Never put backend secrets, payment keys, or private credentials in the mobile app.

See `.env.example` for the documented variables.

## Next phase

Phase 02 — Design system and reusable components.

## Documentation

Project documentation lives in the repository `docs/` folder (product requirements, architecture, API contracts, phase files, etc.).
