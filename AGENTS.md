# AGENTS.md — GlintPM Mobile App

## 1. Project identity
Build a cross-platform GlintPM mobile application for professional training, career opportunities, resources, and technical support.

Frontend: React Native, Expo, TypeScript, Expo Router.  
Backend: Python, Django, Django REST Framework.  
Database: PostgreSQL.

## 2. Mandatory reading
Before a task:
1. Read this file.
2. Read `docs/README.md`.
3. Read relevant product and architecture documents.
4. Inspect the existing repository and implementation.
5. Identify dependencies and affected workflows.
6. Prepare a concise implementation plan.

Do not assume documentation and code are identical. Report discrepancies rather than silently making destructive changes.

## 3. Source of truth
Use:
- `docs/project-overview.md`
- `docs/product-requirements.md`
- `docs/system-architecture.md`
- `docs/frontend-architecture.md`
- `docs/backend-architecture.md`
- `docs/database-design.md`
- `docs/api-specification.md`
- `docs/ui-ux-guidelines.md`
- `docs/development-roadmap.md`
- `docs/phase-acceptance-criteria.md`
- `docs/architecture-decisions.md`
- `docs/security-guidelines.md`
- `docs/testing-strategy.md`
- `docs/deployment-guide.md`

If an important business rule is missing, ask for clarification or present a clearly labelled proposal. Do not invent it.

## 4. Scope control
- Work only on the assigned task.
- Do not rewrite unrelated features.
- Do not replace the technology stack without approval.
- Do not introduce unnecessary dependencies.
- Do not silently change API contracts.
- Do not remove existing functionality without understanding its purpose.
- Do not build beyond the approved MVP scope.

## 5. Development principles
- Prefer simple, maintainable solutions.
- Keep modules focused.
- Use meaningful names and explicit types.
- Avoid duplicated business logic.
- Handle expected failure conditions.
- Follow established repository conventions.

### TypeScript
- Use TypeScript.
- Define types for important data structures.
- Avoid `any` unless justified.
- Handle nullable and optional values explicitly.

### Django/Python
- Follow Django conventions.
- Use migrations for schema changes.
- Validate data server-side.
- Apply explicit permissions.
- Use transactions where operations must remain consistent.
- Keep business logic out of views where practical.

### React Native
- Use reusable components.
- Separate presentation from data fetching.
- Handle loading, empty, success, and error states.
- Support small screens and accessible controls.

## 6. Architecture rules
Follow `docs/architecture-decisions.md`. Approved direction:
- React Native + Expo + TypeScript.
- Expo Router.
- Django + Django REST Framework.
- PostgreSQL.
- REST API under `/api/v1/`.
- Axios.
- TanStack Query.
- React Hook Form and Zod.
- Expo SecureStore on supported platforms.
- Django Admin, with Django Unfold preferred.

Do not introduce competing technologies for the same responsibility without an approved decision.

## 7. Frontend rules
- Use the centralized API client.
- Keep API URLs environment-configurable.
- Never embed backend or payment secrets in the app.
- Use TanStack Query for server state.
- Keep local UI state local.
- Clear or isolate user-specific cache when accounts change.
- Protect authenticated navigation, but never treat frontend route protection as backend authorization.
- Use shared design tokens and components.
- Do not show success until the server confirms success.

## 8. Backend rules
- Follow REST conventions and `/api/v1/`.
- Validate all incoming data.
- Use appropriate status codes and consistent responses.
- Enforce object-level permissions.
- Restrict administrative operations.
- Use migrations and reviewed database constraints.
- Do not trust client-submitted prices, roles, permissions, or payment status.
- Protect private resources.

## 9. Security rules
Never:
- Commit secrets.
- Store raw passwords or raw payment card details.
- Trust frontend authorization.
- Expose private files through unrestricted URLs.
- Log passwords, tokens, or payment secrets.
- Disable security checks to make tests pass.

Always:
- Use environment-based secret configuration.
- Validate input on the backend.
- Enforce object-level permissions.
- Use HTTPS in production.
- Validate payment webhooks.
- Validate uploaded files.
- Review security implications of sensitive changes.

See `docs/security-guidelines.md`.

## 10. Testing rules
Add or update tests for changed behaviour. Run relevant tests, type checks, and linting where configured.

Never claim a test passed unless it was executed. If a test could not be run, state why.

See `docs/testing-strategy.md`.

## 11. Dependencies
Before adding a dependency:
1. Check whether an existing dependency can do the job.
2. Verify compatibility.
3. Consider maintenance and security.
4. Explain why it is needed.

Do not upgrade major versions without checking compatibility.

## 12. Database change procedure
1. Inspect existing models and relationships.
2. Review `docs/database-design.md`.
3. Identify affected API and frontend consumers.
4. Consider existing data and migration safety.
5. Implement and inspect the migration.
6. Run it locally.
7. Test affected behaviour.
8. Update documentation.

Do not reset databases as a shortcut or create destructive migrations without explicit justification and approval.

## 13. API change procedure
1. Inspect the existing endpoint.
2. Review `docs/api-specification.md`.
3. Identify consumers.
4. Check backward compatibility.
5. Update permissions and validation.
6. Add tests.
7. Update documentation.
8. Explain required frontend changes.

Do not silently rename or remove API fields.

## 14. Payment rules
- Initiate payments through the backend.
- Verify payment status with the provider.
- Never grant enrollment based only on a frontend success screen.
- Authenticate and validate webhooks.
- Handle duplicate events safely.
- Record payment status changes.
- Do not store raw card details.
- Use the provider sandbox before production.
- Check current provider documentation; do not invent provider methods or payload formats.

## 15. File and resource rules
- Validate file type and size.
- Do not trust file extensions alone.
- Enforce upload permissions.
- Protect private resources.
- Check access before serving files.
- Do not expose storage credentials.

## 16. MVP scope
The initial app covers:
1. Authentication.
2. Home Dashboard.
3. Training Academy.
4. Career Hub.
5. Professional Resources.
6. Job Support and Consulting.
7. Payments and Enrollment.
8. Notifications and User Profile.

Do not independently add XER analysis, DCMA checks, schedule risk analysis, project assurance, AI schedule review, or a full project controls command center.

## 17. AI agent workflow
### Understand
Read relevant documentation and inspect code.

### Plan
List files to create/modify, API/database changes, tests, and risks.

### Implement
Make focused changes, follow patterns, and add validation and error handling.

### Verify
Run relevant tests and checks. Report actual results.

### Document
Update affected documentation and record significant decisions.

### Report
Use the completion report below.

## 18. Completion report
### Task
[Assigned task]

### Summary
[What changed]

### Files created
[List]

### Files modified
[List]

### Database changes
[List or None]

### API changes
[List or None]

### Tests executed
[List actual commands/results]

### Manual verification
[What was checked]

### Known limitations
[List]

### Security considerations
[Relevant checks]

### Documentation updated
[List]

### Status
- [ ] Complete
- [ ] Partially complete
- [ ] Blocked

### Recommended next action
[Next step]

## 19. Prohibited behaviour
Agents must not:
- Claim commands were run when they were not.
- Claim tests passed without execution.
- Invent endpoints, fields, or business rules.
- Invent third-party API methods.
- Silently change architecture.
- Delete code without understanding it.
- Replace backend integration with mock data without approval.
- Hardcode credentials.
- Hide errors or limitations.
- Mark incomplete work complete.

When uncertain, explain the uncertainty and ask.

## 20. Final instruction
Prioritize correctness, security, maintainability, reliability, user experience, performance, and cost efficiency—in that order.

Build incrementally. Do not optimize prematurely or exceed approved scope.
