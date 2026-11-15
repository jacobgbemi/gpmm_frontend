# GlintPM Mobile App — Security Guidelines

## 1. Purpose
Define baseline security requirements for the mobile application, backend API, database, integrations, and operational environment.

Security requirements must be reviewed before production release.

## 2. Authentication
- Use Django's secure password handling.
- Select and document an API authentication strategy.
- Store supported mobile credentials using secure platform storage.
- Define token expiry and refresh behaviour.
- Clear local credentials on logout.
- Protect account recovery and verification flows.
- Apply rate limiting or abuse controls where appropriate.

## 3. Authorization
- Enforce permissions on the backend.
- Apply object-level checks to user-owned records.
- Restrict staff and administrative functions.
- Enforce course and resource entitlements server-side.
- Do not trust hidden buttons or client-side role flags.

## 4. Data protection
- Use HTTPS in production.
- Keep secrets in environment or secret-management configuration.
- Restrict database network access.
- Use least-privilege database and service accounts.
- Avoid unnecessary personal-data collection.
- Define data retention and deletion procedures.
- Do not expose sensitive fields in API responses.

## 5. Payment security
- Use a reputable payment provider.
- Do not store raw card numbers or CVV.
- Initiate payments server-side.
- Verify payment status with the provider.
- Validate webhook authenticity.
- Make webhook processing idempotent.
- Do not grant enrollment based solely on client-side redirects or messages.
- Restrict access to payment records.

## 6. File and resource security
- Validate file type, size, and upload permissions.
- Do not trust file extensions alone.
- Store private files in protected storage.
- Check entitlement before issuing access.
- Use short-lived or otherwise controlled access URLs where appropriate.
- Avoid exposing storage credentials.
- Consider malware scanning based on file types and risk.

## 7. API security
- Validate all incoming data.
- Apply appropriate authentication and permissions.
- Use rate limits for sensitive or abuse-prone endpoints.
- Avoid verbose production error messages.
- Configure allowed hosts and CORS deliberately.
- Keep dependencies updated through a controlled process.
- Protect webhook endpoints separately from ordinary user endpoints.

## 8. Logging and monitoring
- Never log passwords, tokens, private keys, or payment secrets.
- Minimize personal information in logs.
- Restrict access to logs.
- Monitor repeated authentication failures and unusual payment events.
- Define incident response and escalation procedures.

## 9. Mobile security
- Do not embed backend secrets in the mobile application.
- Use secure storage for sensitive local credentials.
- Avoid storing unnecessary private user data on device.
- Handle logout and account switching safely.
- Review permissions requested by the app.
- Do not assume client-side obfuscation provides security.

## 10. Production checklist
- [ ] HTTPS enabled.
- [ ] Secrets managed outside source control.
- [ ] Debug mode disabled.
- [ ] Database access restricted.
- [ ] Authentication and authorization tested.
- [ ] Payment verification and webhook security tested.
- [ ] Private resource access tested.
- [ ] Logging reviewed for sensitive data.
- [ ] Backup and recovery procedures documented.
- [ ] Dependency and configuration review completed.

This document is a baseline, not a substitute for a formal security assessment or applicable legal and regulatory advice.
