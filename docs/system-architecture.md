# GlintPM Mobile App — System Architecture

## 1. Overview
The system uses a mobile client communicating with a Django REST API. PostgreSQL stores application data. External services may provide payment processing, object storage, email, push notifications, and monitoring.

```text
Mobile App (React Native / Expo)
              |
           HTTPS
              |
      Django REST API
              |
         PostgreSQL
              |
   External service integrations
   - Payment provider
   - Object storage
   - Email / notifications
   - Monitoring
```

## 2. Main components

### Mobile application
Responsibilities:
- Render screens and navigation.
- Collect user input.
- Perform client-side validation.
- Manage local UI state.
- Fetch and update server data through the API.
- Securely store supported authentication credentials.
- Display progress, errors, and confirmations.

### Backend API
Responsibilities:
- Authentication and authorization.
- Business-rule enforcement.
- Input validation.
- Course and enrollment management.
- Job and resource management.
- Support enquiry processing.
- Payment initiation and verification.
- Notification management.
- Administrative operations.

### Database
PostgreSQL stores users, courses, cohorts, enrollments, jobs, resources, enquiries, payments, and notifications.

### External services
Provider selection is not finalized. Integrations must be isolated behind backend service modules and configured through environment variables.

## 3. Architectural principles
- Backend is the source of truth for business rules.
- Mobile clients communicate through versioned APIs.
- Sensitive operations are performed server-side.
- Access is checked on every protected backend operation.
- External integrations are isolated from core domain logic.
- Database changes are managed through migrations.
- Development, staging, and production are separated.

## 4. API versioning
Initial API prefix: `/api/v1/`

This is a proposed contract and must be aligned with the actual backend routes.

## 5. Security boundaries
- HTTPS is required in production.
- Secrets are not committed to source control.
- Tokens are stored using an appropriate secure mechanism on supported devices.
- Object-level permissions are enforced by the backend.
- Private resources use controlled access.
- Payment webhooks are authenticated and processed safely.
- Sensitive values are excluded from logs.

## 6. Deployment topology
A production deployment is expected to include:
- Django application hosting.
- PostgreSQL database.
- Static/media or object storage as required.
- HTTPS and domain configuration.
- Background task processing if later required.
- Logging, monitoring, and backups.

Final providers and topology require a separate operational decision.

## 7. Scalability considerations
Start with a modular monolith rather than microservices. Separate Django apps by business domain. Introduce background workers, caching, or service separation only when demonstrated requirements justify their operational cost.

## 8. Future extensions
Possible later capabilities include project controls assurance, Primavera P6 XER analysis, schedule health checks, and AI-assisted review. These must be designed as separately scoped capabilities and must not compromise the initial MVP.
