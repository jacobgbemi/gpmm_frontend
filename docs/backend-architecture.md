# GlintPM Mobile App — Backend Architecture

## 1. Stack
- Python
- Django
- Django REST Framework
- PostgreSQL
- Django Admin
- Django Unfold as the preferred admin theme

Confirm supported versions and compatibility during project setup.

## 2. Suggested Django app structure
```text
backend/
├── config/
│   ├── settings/
│   ├── urls.py
│   └── asgi.py
├── apps/
│   ├── common/
│   ├── users/
│   ├── courses/
│   ├── enrollments/
│   ├── career/
│   ├── resources/
│   ├── support/
│   ├── payments/
│   └── notifications/
├── tests/
├── manage.py
└── requirements/
```

The exact layout may be adapted to the existing repository, while preserving clear domain boundaries.

## 3. App responsibilities
- `common`: shared utilities, base models, health checks, and common API behaviour.
- `users`: authentication, profiles, and user-related permissions.
- `courses`: course catalog, categories, modules, lessons, tracks, cohorts, and sessions.
- `enrollments`: enrollments and learning progress.
- `career`: job categories, listings, and saved jobs.
- `resources`: resource categories, metadata, and access control.
- `support`: customer support and consulting enquiries.
- `payments`: payment records, provider integration, verification, and webhooks.
- `notifications`: user notifications and preferences.

## 4. API conventions
- Prefix endpoints with `/api/v1/`.
- Use serializers for input/output validation.
- Use explicit permissions.
- Use appropriate HTTP status codes.
- Keep response structures consistent.
- Paginate potentially large collections.
- Document endpoint behaviour and access requirements.

## 5. Business logic
Keep important business rules in backend services or domain-oriented modules rather than relying on frontend behaviour. Use database transactions for operations that must remain consistent, such as verified payment and enrollment creation.

## 6. Authentication and authorization
Use Django's established password handling and an explicitly selected API authentication strategy. The exact access/refresh token implementation must be decided and tested before production.

Enforce object-level access. A user must not retrieve or modify another user's private records by changing an identifier in a request.

## 7. Administration
Use Django Admin for internal management of courses, cohorts, jobs, resources, enquiries, payments, and notifications. Restrict staff permissions according to operational responsibilities.

## 8. Database practices
- Use migrations.
- Define constraints and indexes based on query patterns.
- Avoid destructive migrations without a reviewed migration plan.
- Use transactions where consistency requires them.
- Avoid exposing model internals as public API contracts.

## 9. Background processing
The initial MVP may not require a dedicated task queue. If email, bulk notifications, or other long-running work requires asynchronous processing, evaluate a maintained task-queue solution and document the decision before adding it.

## 10. Observability
Use structured application logging and error monitoring. Never log passwords, tokens, payment secrets, or unnecessary personal data.

## 11. Testing
Test models, serializers, permissions, endpoints, business rules, and payment event handling. See `testing-strategy.md`.
