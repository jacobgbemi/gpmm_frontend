# Phase 02 — Manual dependency installation

`package.json` and `package-lock.json` were intentionally left unchanged. Install these development dependencies manually before running the new component-rendering tests:

```bash
npx expo install @testing-library/react-native --dev
npx expo install @types/jest --dev
```

The repository already includes `jest` and `jest-expo`. The Expo SDK 58 testing guide recommends `@testing-library/react-native` and `@types/jest` for a TypeScript Expo project. The current React Native Testing Library v14 line uses the newer `test-renderer` peer rather than the deprecated `react-test-renderer`; verify the peer version that matches the project's installed React 19.3 minor before installing it if npm does not resolve it automatically.

Optional icon package (not required by the current components):

```bash
npx expo install @expo/vector-icons
```

No date-picker package is required. `DatePickerField` uses a React Native modal and the shared calendar/date helpers.

After installing dependencies:

```bash
npm test -- --runInBand
npm run typecheck
npm run lint
```

Do not run `npm install` with package versions chosen independently of the Expo SDK. Prefer `npx expo install` for Expo-compatible packages and review any peer-dependency warnings before accepting the installation.
