# GlintPM Mobile App — Product Requirements

## 1. Purpose
This document defines the initial product requirements for the GlintPM mobile application. Requirements may be refined through approved product decisions.

## 2. User roles
- **Guest:** can view public information and public resources.
- **Registered user:** can access account features and resources available to registered users.
- **Student:** has enrollment-linked access to relevant courses and learning materials.
- **Administrator:** manages content and operational records through authorized administration tools.

A user may have more than one applicable entitlement. Backend permissions, not frontend labels, determine access.

## 3. Functional requirements

### 3.1 Authentication and profile
- Users can register and log in.
- Users can retrieve and update permitted profile fields.
- Users can log out.
- Protected data and endpoints require authentication.
- Authentication errors are presented clearly.
- Account recovery and verification flows must be defined before production if required by the selected authentication approach.

### 3.2 Home Dashboard
- Display a welcome message.
- Display enrolled-course summaries and progress where available.
- Display relevant career opportunities.
- Display featured resources.
- Display announcements or notifications.
- Provide navigation to the main product areas.
- Show useful empty states for new users.

### 3.3 Training Academy
- Browse courses and categories.
- View course details.
- View available course tracks.
- Distinguish self-paced and cohort-based delivery.
- View cohort dates and session schedules where applicable.
- View enrollment status.
- View learning progress where progress tracking is enabled.
- Restrict paid or otherwise protected content according to enrollment and entitlement rules.

Course delivery modes:
- Self-paced.
- Cohort-based / Launchpad.
- Mentored.

The precise course catalog, pricing, availability, and enrollment rules must be maintained as backend data rather than hardcoded in the app.

### 3.4 Career Hub
- Browse job listings.
- Search and filter listings.
- View job details.
- Save and unsave jobs.
- Open external application links.
- Identify inactive or expired listings.

An in-app application tracker is optional and must not be implemented unless included in the approved MVP scope.

### 3.5 Professional Resources
- Browse resource categories.
- Search resources.
- View resource details.
- Open or download resources according to access permissions.
- Display access requirements for restricted resources.

Resource access levels:
- Public.
- Registered users.
- Course students.
- Premium users.

### 3.6 Job Support and Consulting
Users can submit an enquiry containing:
- Full Name
- Email Address
- WhatsApp Number
- Country
- Support Category
- Preferred Support Option
- Estimated Hours
- Project or Task Description
- Required Completion Date
- Additional Information

Support categories:
- Primavera P6 Scheduling
- Project Controls
- Project Planning
- Technical Job Support
- Other

Preferred support options:
- Hourly Support
- Prepaid Package
- Monthly Retainer
- Custom Quote

The backend validates and stores enquiries. Administrators can review and update enquiry status.

### 3.7 Payments and enrollment
- Users can initiate payment for an eligible course or track.
- Payment status is verified server-side with the selected provider.
- Enrollment is granted only after successful verification.
- Payment events are recorded.
- Duplicate webhook events are handled idempotently.
- Users can view relevant payment and enrollment status.

Do not store raw card information.

### 3.8 Notifications
- Users can view notifications associated with their account.
- Read and unread states are supported.
- Notification preferences may be added where required.
- Push notifications are subject to provider, platform, and privacy decisions.

## 4. Non-functional requirements
- Security: enforce authentication, authorization, validation, and secure transport.
- Reliability: handle network failure and provider errors gracefully.
- Performance: avoid unnecessary API requests and large unoptimized assets.
- Accessibility: controls have meaningful labels and sufficient usability.
- Maintainability: use modular frontend and backend structures.
- Compatibility: test supported Android and iOS versions before release.
- Privacy: collect only information needed for defined business purposes.
- Observability: log operational errors without logging secrets or sensitive data.

## 5. Business rules
- The backend is the source of truth for course prices, payment status, enrollment, access entitlements, and user permissions.
- Frontend validation is for usability and does not replace backend validation.
- A successful redirect or frontend message is not proof of payment.
- Users may only access resources for which they have permission.
- Job listing status and expiry must be determined by backend data.

## 6. MVP acceptance
The MVP is ready for release only when the critical user journeys work end-to-end, relevant tests pass, access controls are verified, and the release build is tested on physical devices. See `phase-acceptance-criteria.md`.
