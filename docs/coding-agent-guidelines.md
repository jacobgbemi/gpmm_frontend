# GlintPM Mobile App — Coding Agent Guidelines

## 1. Objective
Ensure AI coding agents make focused, verifiable, maintainable changes that follow the GlintPM product and architecture decisions.

## 2. Before coding
1. Read the root `AGENTS.md`.
2. Read the relevant documentation.
3. Inspect the existing code and repository structure.
4. Identify affected files and dependencies.
5. Identify API, database, and security implications.
6. Provide a concise implementation plan.

## 3. During implementation
- Work only within the assigned scope.
- Follow existing patterns.
- Prefer small, reviewable changes.
- Do not rewrite unrelated code.
- Do not introduce dependencies without justification.
- Do not invent business rules or API contracts.
- Add validation and error handling.
- Keep documentation aligned with approved implementation.

## 4. Frontend requirements
- Use TypeScript.
- Use the centralized API client.
- Use TanStack Query for server state.
- Keep local UI state local.
- Use React Hook Form and Zod where appropriate.
- Implement loading, empty, success, and error states.
- Never rely on frontend-only authorization.

## 5. Backend requirements
- Validate input on the server.
- Enforce authentication and object-level permissions.
- Use migrations for schema changes.
- Use transactions for operations requiring consistency.
- Return consistent API responses.
- Protect private files and sensitive records.

## 6. Testing
- Add or update tests for changed behaviour.
- Run relevant test suites.
- Run type checking and linting where configured.
- Do not claim a test passed unless it was executed.
- State clearly when a test could not be run and why.

## 7. Documentation
Update relevant documentation when changing:
- API endpoints.
- Database models.
- Environment variables.
- Security behaviour.
- Architecture.
- Deployment procedures.

## 8. Uncertainty
If a requirement is ambiguous or a provider detail is unknown:
- Do not guess.
- Identify the missing decision.
- Ask for clarification or present a clearly labelled proposal.
- Do not silently implement a speculative behaviour.

## 9. Completion report
Every task report must include:
- Summary.
- Files created.
- Files modified.
- Database changes.
- API changes.
- Tests executed and results.
- Known limitations.
- Documentation updated.
- Completion status.
- Recommended next action.
