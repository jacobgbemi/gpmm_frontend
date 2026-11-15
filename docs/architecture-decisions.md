# GlintPM Mobile App — Architecture Decision Records

## 1. Purpose
This document records major technical decisions. Do not change an accepted decision simply because another option exists. Propose and review significant changes before implementation.

Statuses: Proposed, Accepted, Implemented, Superseded, Rejected.

## ADR-001: Mobile framework
**Status:** Accepted  
**Decision:** React Native with Expo and TypeScript.

**Context:** GlintPM needs Android and iOS support without maintaining two independent native apps.

**Reasons:** Shared code, TypeScript support, Expo tooling, and faster MVP delivery.

**Consequences:** Verify Expo compatibility for native capabilities. Some advanced integrations may require native configuration. iOS distribution must follow Apple's current requirements.

## ADR-002: Frontend language
**Status:** Accepted  
**Decision:** TypeScript.

Use explicit types for API contracts, shared data, and component props. Avoid `any` unless there is a documented reason.

## ADR-003: Navigation
**Status:** Accepted  
**Decision:** Expo Router.

Primary areas: Home, Learn, Career, Resources, Support. Protect routes for user experience, but enforce access on the backend.

## ADR-004: Backend framework
**Status:** Accepted  
**Decision:** Django with Django REST Framework.

Use Django for domain logic, ORM, migrations, permissions, and admin; DRF for API development.

## ADR-005: Database
**Status:** Accepted  
**Decision:** PostgreSQL.

Use relational constraints, transactions, migrations, and indexes based on actual query patterns.

## ADR-006: API architecture
**Status:** Accepted  
**Decision:** Versioned REST API under `/api/v1/`.

The frontend must not access the production database directly. Document API contracts and avoid silent breaking changes.

## ADR-007: Server-state management
**Status:** Accepted  
**Decision:** TanStack Query.

Use it for server data, caching, mutations, and invalidation. Avoid duplicating server state unnecessarily in global client state.

## ADR-008: HTTP client
**Status:** Accepted  
**Decision:** Axios.

Use a centralized configured client. Do not create unrelated HTTP configurations throughout features.

## ADR-009: Forms
**Status:** Accepted  
**Decision:** React Hook Form with Zod.

Frontend validation supports usability but does not replace backend validation.

## ADR-010: Authentication and token storage
**Status:** Accepted in principle; details to be finalized in Phase 3.  
**Decision:** Backend-managed authentication with secure client-side token storage. Expo SecureStore is preferred on supported platforms.

Finalize token type, expiry, refresh, rotation, and invalidation behaviour before production. Secure storage alone does not make an authentication system secure.

## ADR-011: Internal administration
**Status:** Accepted  
**Decision:** Django Admin; Django Unfold is the preferred theme.

Restrict staff permissions and audit consequential administrative actions where appropriate.

## ADR-012: File storage
**Status:** Proposed  
**Decision:** Select a secure object-storage provider for production files.

Evaluate cost, reliability, region performance, access controls, and Django integration. Private files must not be publicly accessible by default.

## ADR-013: Payment processing
**Status:** Proposed  
**Decision:** Use a third-party payment provider; do not directly store card data.

Evaluate Nigerian and international payment support, currencies, fees, settlements, refunds, webhook reliability, and documentation. Verify payments server-side and handle webhooks idempotently.

## ADR-014: Application state
**Status:** Accepted  
**Decision:** React state for local UI, TanStack Query for server state, and lightweight shared state only where necessary.

## ADR-015: Deployment and builds
**Status:** Accepted in principle; providers to be selected.  
**Decision:** Use EAS Build for mobile builds, production-appropriate Django hosting, PostgreSQL, and HTTPS.

Separate development, staging, and production. Secure secrets and configure backups and rollback procedures.

## 3. Architectural boundaries

### Frontend
- Displays data and collects input.
- Performs client-side validation.
- Manages navigation and local UI state.
- Calls authorized backend APIs.

### Backend
- Enforces business rules and permissions.
- Validates all submitted data.
- Manages transactions and integrations.
- Controls access to restricted content.

### Database
- Persists data.
- Enforces relational integrity and transaction consistency.

**Non-negotiable:** the frontend is not trusted to enforce critical business rules or security permissions.

## 4. MVP boundary
Initial MVP:
- Authentication.
- Dashboard.
- Training Academy.
- Career Hub.
- Professional Resources.
- Job Support and Consulting.
- Payments and Enrollment.
- Notifications and Profile.

Not included unless separately approved:
- XER analysis.
- DCMA 14-point schedule checks.
- Automated schedule risk analysis.
- Project cost/payment assurance.
- AI schedule review.
- Full project controls command center.

## 5. Architecture change proposal
### Title
[Proposal title]

### Existing decision
[ADR reference]

### Problem
[Explain]

### Proposed change
[Explain]

### Benefits and disadvantages
[List]

### Security and cost implications
[Explain]

### Migration impact
[Explain]

### Recommendation and approval
[Document]
