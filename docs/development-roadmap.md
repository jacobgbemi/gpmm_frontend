# GlintPM Mobile App — Development Roadmap

## 1. Delivery approach
Build incrementally. Complete and verify each phase before expanding scope. Frontend and backend work may proceed in parallel when API contracts and dependencies are clear.

## 2. Phases

### Phase 1 — Project Foundation and Architecture
- Initialize React Native/Expo/TypeScript frontend.
- Initialize Django/DRF backend.
- Configure PostgreSQL.
- Establish environment configuration.
- Establish repository conventions and baseline checks.

### Phase 2 — Design System and UI Foundation
- Implement brand tokens.
- Build reusable components.
- Establish navigation shell.
- Build shared loading, empty, and error states.

### Phase 3 — Backend Core and Authentication
- Implement user model strategy.
- Implement authentication and profile APIs.
- Configure permissions.
- Build login and registration screens.
- Implement secure credential storage and logout.

### Phase 4 — Training Academy
- Implement course catalog and tracks.
- Implement modules, lessons, cohorts, and sessions.
- Implement enrollment and progress foundations.
- Build academy screens.

### Phase 5 — Home Dashboard
- Implement dashboard aggregation endpoint.
- Build personalized dashboard.
- Integrate course, job, resource, and notification summaries.

### Phase 6 — Career Hub
- Implement job categories and listings.
- Implement search and filters.
- Implement saved jobs.
- Build job detail and outbound application flows.

### Phase 7 — Professional Resources
- Implement resource categories and records.
- Implement access control.
- Select and configure storage if required.
- Build resource browsing and detail screens.

### Phase 8 — Job Support and Consulting
- Implement support enquiry model and API.
- Build enquiry form and validation.
- Implement staff enquiry management.

### Phase 9 — Payments and Enrollment
- Select payment provider.
- Implement payment initiation and verification.
- Implement webhook handling and idempotency.
- Connect verified payments to enrollment.
- Test with provider sandbox.

### Phase 10 — Notifications and User Profile
- Implement notification records and APIs.
- Build notification and profile screens.
- Add push notifications only if approved and configured.

### Phase 11 — Integration and Testing
- Complete API integration.
- Test critical user journeys.
- Perform security and regression checks.
- Test on physical devices.
- Resolve release-blocking defects.

### Phase 12 — Deployment and App Release
- Configure production backend and database.
- Configure storage, domain, HTTPS, logs, and backups.
- Generate and test release builds.
- Prepare store assets and required disclosures.
- Release using an approved rollout plan.

## 3. Dependencies
- Authentication precedes protected user workflows.
- Course and enrollment foundations precede payment-to-enrollment integration.
- Resource access rules precede private file delivery.
- Payment provider selection precedes provider-specific payment implementation.
- Production infrastructure selection precedes final deployment.

## 4. Delivery controls
Use `phase-acceptance-criteria.md` to determine whether a phase is complete. Use `architecture-decisions.md` to govern technology changes.

## 5. Scope control
Do not add the project controls command center, XER analysis, DCMA checks, or AI schedule review to the initial MVP without an explicit scope decision.
