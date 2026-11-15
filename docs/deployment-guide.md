# GlintPM Mobile App — Deployment and Development Guide

## 1. Purpose
This document describes the intended local development and deployment approach. Exact commands and provider-specific configuration must be checked against the versions selected for the repository.

## 2. Development environment
The development workstation is Windows with WSL2 Ubuntu 24.04.

Recommended tools:
- WSL2 Ubuntu 24.04.
- Visual Studio Code with WSL support.
- Git.
- Python and a virtual environment.
- Node.js using a maintained version compatible with the selected Expo SDK.
- PostgreSQL, locally or through an approved development service.
- Android device or emulator.
- Postman or another API client.
- Docker Desktop where containerized services are used.

Keep source code inside the WSL Linux filesystem for a WSL-based workflow where practical.

## 3. Repository setup
1. Clone the repository into the WSL filesystem.
2. Read root `AGENTS.md`.
3. Read `docs/README.md`.
4. Create frontend and backend environment files from documented examples.
5. Install dependencies using the project's lockfiles.
6. Configure PostgreSQL.
7. Run backend migrations.
8. Start the backend.
9. Start the Expo development server.
10. Test the mobile app on a development device.

Do not commit local environment files containing secrets.

## 4. Environment separation
Maintain separate configuration for:
- Local development.
- Staging.
- Production.

Typical backend configuration values include:
- Django secret key.
- Debug flag.
- Allowed hosts.
- Database connection.
- CORS/CSRF settings where applicable.
- Email provider settings.
- Payment provider credentials.
- Storage credentials.
- Logging and monitoring configuration.

Typical frontend configuration includes:
- API base URL.
- Public app configuration only.

Never embed private backend or payment secrets in the mobile application.

## 5. Backend deployment
Production deployment should include:
- Supported Python runtime.
- Django application server configuration.
- PostgreSQL.
- HTTPS termination.
- Static and media storage strategy.
- Environment secret management.
- Database migrations.
- Logging and monitoring.
- Automated backups.

Use a production-appropriate application server and deployment configuration. Do not use Django's development server as the production server.

## 6. Mobile builds
Use Expo's supported build workflow for development and production builds.

Android:
- Generate a release build.
- Install and test on physical devices.
- Verify API environment and permissions.
- Prepare store assets and release metadata.

iOS:
- Use Apple's supported signing and distribution process.
- Cloud build services can support teams without a local Mac, subject to current platform requirements.
- Verify current Apple Developer account and App Store requirements before release.

## 7. Database operations
- Back up production data before risky schema changes.
- Review migrations before applying them.
- Apply migrations through a controlled release process.
- Do not reset production databases.
- Test restoration procedures periodically.

## 8. Domain and API URL
A possible API domain is `api.glintpm.com`, with an API base path such as `/api/v1/`. This is a proposal only; confirm DNS, hosting, and routing before using it.

## 9. Release checklist
- [ ] Correct production API URL configured.
- [ ] Debug mode disabled.
- [ ] Secrets configured securely.
- [ ] Database migrations reviewed and applied.
- [ ] HTTPS verified.
- [ ] Authentication tested.
- [ ] Payment sandbox tests passed before live activation.
- [ ] Resource permissions tested.
- [ ] Logs and monitoring configured.
- [ ] Backups configured.
- [ ] Android release build tested.
- [ ] iOS release requirements reviewed.
- [ ] Privacy policy and store disclosures prepared.
- [ ] Rollback procedure documented.

## 10. Operational caution
Hosting, Expo, Android, Apple, and payment-provider requirements can change. Verify current official documentation before production deployment.
