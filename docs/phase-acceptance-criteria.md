# GlintPM Mobile App — Phase Acceptance Criteria

## 1. Purpose
A phase is complete only when its required functionality is implemented, tested, documented, and free of unresolved critical defects. Compilation or visual appearance alone is not sufficient.

## 2. General acceptance rules
For every phase:
- Code follows the approved architecture.
- Relevant automated tests pass.
- Loading, empty, success, and error states are handled.
- Permissions are enforced where applicable.
- Documentation is updated.
- No secrets are committed.
- Known limitations are reported.

## 3. Phase criteria

### Phase 1 — Project Foundation and Architecture
Frontend:
- Expo and TypeScript project initializes.
- Expo Router is configured.
- App runs on an Android development device.
- Environment configuration and Git ignore rules exist.

Backend:
- Django and DRF initialize.
- PostgreSQL connection works.
- Initial app structure and admin are available.
- API versioning structure is established.

Acceptance: frontend and backend run independently; database connectivity and setup instructions are verified.

### Phase 2 — Design System and UI Foundation
- Brand tokens are implemented.
- Reusable buttons, inputs, cards, headers, and navigation components exist.
- Shared loading, empty, and error states exist.
- Small-screen layouts are usable.
- Interactive components have accessible labels.

Acceptance: consistent visual system with no major clipping or overflow.

### Phase 3 — Backend Core and Authentication
- User model strategy is implemented.
- Registration, login, profile, and logout behaviour are implemented.
- Protected endpoints reject unauthenticated requests.
- Object-level permissions are tested.
- Secure token storage is implemented on supported platforms.

Acceptance: registration and login work; unauthorized access is denied; logout clears local credentials.

### Phase 4 — Training Academy
- Courses, categories, tracks, modules, lessons, cohorts, and sessions are represented.
- Listing and detail APIs work.
- Enrollment status and progress are available as required.
- Frontend course browsing and detail screens work.

Acceptance: users can browse courses and view accurate track/cohort information; restricted content is protected.

### Phase 5 — Home Dashboard
- User-specific dashboard API is implemented.
- Course, career, resource, and notification summaries are integrated as available.
- New-user empty state is handled.

Acceptance: dashboard data is backend-driven and does not expose another user's data.

### Phase 6 — Career Hub
- Job categories and listings are implemented.
- Search and filters work.
- Saved jobs work.
- External application links work.
- Inactive/expired listing behaviour is defined.

Acceptance: users can search, view, save, and unsave jobs; records are user-scoped.

### Phase 7 — Professional Resources
- Resource categories and metadata are implemented.
- Access levels are enforced.
- Storage and download mechanisms are protected.
- Frontend browsing and detail screens work.

Acceptance: restricted files cannot be accessed through an unprotected URL.

### Phase 8 — Job Support and Consulting
- Enquiry model, validation, and API are implemented.
- Form includes all specified fields and option labels.
- Admin staff can retrieve and manage enquiries.

Acceptance: valid enquiries are stored; invalid submissions receive useful errors; confirmation is shown only after successful submission.

### Phase 9 — Payments and Enrollment
- Provider is selected and configured.
- Backend initiates and verifies payments.
- Webhooks are authenticated and idempotent.
- Enrollment follows verified payment only.
- Sandbox tests pass.

Acceptance: frontend success alone cannot grant enrollment; duplicate events do not duplicate payment effects.

### Phase 10 — Notifications and User Profile
- Notification listing and read state work.
- User profile retrieval and permitted updates work.
- Ownership and permissions are tested.

Acceptance: users can only access their own notifications and profile data.

### Phase 11 — Integration and Testing
- Implemented screens use the approved APIs.
- API types and centralized error handling exist.
- Critical workflows pass.
- Authentication, permissions, and payment tests pass.
- Android physical-device testing is complete.

Acceptance: no critical mocked data remains in production workflows and no known critical security issue remains.

### Phase 12 — Deployment and App Release
- Production backend, database, HTTPS, and secrets are configured.
- Migrations and backups are managed.
- Logging and monitoring are configured.
- Release build is tested on a physical device.
- Privacy and store disclosures are prepared.

Acceptance: production critical journeys work and rollback/release procedures are documented.

## 4. Definition of Done
A feature is done only when:
1. Requirements are understood.
2. Implementation is complete.
3. Validation and error handling exist.
4. Relevant tests pass.
5. Permissions are enforced.
6. Documentation is updated.
7. No known critical defects remain.
8. Work has been reviewed.

## 5. Phase sign-off template
### Phase
[Name]

### Implementation summary
[What was completed.]

### Files created and modified
[List files.]

### Tests and results
[List actual tests and results.]

### Outstanding issues
[List or write None.]

### Decision
- [ ] Accepted
- [ ] Accepted with documented limitations
- [ ] Not accepted

### Next phase
[Name]
