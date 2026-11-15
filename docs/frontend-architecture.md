# GlintPM Mobile App — Frontend Architecture

## 1. Stack
- React Native
- Expo
- TypeScript
- Expo Router
- TanStack Query
- Axios
- React Hook Form
- Zod
- Expo SecureStore

Confirm package compatibility and current documentation when initializing or upgrading the project.

## 2. Suggested structure
```text
mobile/
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── learn/
│   │   ├── career/
│   │   ├── resources/
│   │   └── support/
│   └── _layout.tsx
├── src/
│   ├── components/
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── courses/
│   │   ├── career/
│   │   ├── resources/
│   │   ├── support/
│   │   ├── payments/
│   │   ├── notifications/
│   │   └── profile/
│   ├── lib/
│   │   ├── api/
│   │   ├── storage/
│   │   └── validation/
│   ├── hooks/
│   ├── theme/
│   ├── types/
│   └── utils/
├── assets/
└── package.json
```

Adapt this structure to the initialized repository rather than moving existing code without approval.

## 3. Navigation
Primary tabs:
- Home
- Learn
- Career
- Resources
- Support

Authentication screens should be separate from authenticated tabs. Protect routes for user experience, but always enforce authorization in the backend.

## 4. Feature organization
Keep feature-specific screens, components, hooks, schemas, and API functions close to their feature where practical. Shared components belong in the shared component area.

## 5. API layer
- Use one configured Axios client.
- Read API base URL from environment configuration.
- Centralize authentication headers and error normalization.
- Define TypeScript types for API contracts.
- Do not call the database directly from the mobile app.
- Do not place secrets in the mobile bundle.

## 6. State management
- Local component state: React state.
- Server state: TanStack Query.
- Shared client state: lightweight context or an approved state solution only where needed.
- Authentication state: one clearly defined owner.

Clear or isolate user-specific cached data when the authenticated account changes.

## 7. Forms
Use React Hook Form and Zod where appropriate. Frontend schemas improve usability; backend validation remains authoritative.

## 8. UI states
Every data-driven screen should consider:
- Initial/loading.
- Loaded with data.
- Empty.
- Error.
- Refreshing.
- Permission denied, where applicable.

## 9. Design system
Use the GlintPM palette:
- Green: `#085634`
- Gold: `#F3BA25`
- Cyan: `#1EC9DF`

Use shared tokens for colors, typography, spacing, borders, and radii. Avoid hardcoding inconsistent styles throughout the app.

## 10. Accessibility and responsiveness
- Provide accessible labels for controls.
- Ensure readable text and adequate contrast.
- Support smaller screens and larger text where practical.
- Avoid clipped content and horizontal overflow.
- Ensure touch targets are usable.

## 11. Testing
Test reusable components, critical interactions, form validation, navigation, and API-driven states. Follow `testing-strategy.md`.
