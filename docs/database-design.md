# GlintPM Mobile App — Database Design

## 1. Purpose
This document describes the proposed relational data model. It is a starting point for implementation, not a claim that these tables already exist.

Use Django migrations to implement and evolve the schema.

## 2. Core entities

### User
Use Django's supported user model strategy. Decide whether a custom user model is required before the first migration.

Typical information:
- Unique login identifier.
- Password hash managed by Django.
- Active/staff flags.
- Created and updated timestamps.

### UserProfile
- User relationship.
- Full name or display name.
- Phone/WhatsApp number where required.
- Country.
- Profile metadata.
- Timestamps.

Avoid collecting profile information without a defined product need.

### Course
- Title.
- Slug.
- Description.
- Category.
- Featured image or media reference.
- Publication status.
- Published timestamp.
- Created and updated timestamps.

### CourseCategory
- Name.
- Slug.
- Description.
- Display order.
- Active status.

### CourseModule
- Course relationship.
- Title.
- Description.
- Sort order.

### Lesson
- Module relationship.
- Title.
- Description.
- Content type.
- Content reference or URL.
- Sort order.
- Access configuration.

### CourseTrack
- Course relationship.
- Track name.
- Delivery mode.
- Description.
- Price and currency, where applicable.
- Active status.

Supported delivery labels include Self-paced, Launchpad, and Mentored. Keep the underlying data model flexible enough for future track changes.

### Cohort
- Course or track relationship.
- Name.
- Start date.
- End date, if known.
- Capacity, if applicable.
- Enrollment status.

### CohortSession
- Cohort relationship.
- Session title.
- Start datetime.
- End datetime.
- Meeting instructions or protected meeting reference.

### Enrollment
- User relationship.
- Course/track relationship.
- Cohort relationship where applicable.
- Enrollment status.
- Enrollment timestamp.
- Payment relationship or reference where appropriate.

Enforce uniqueness rules appropriate to the business, such as preventing duplicate active enrollments for the same user and track.

### LessonProgress
- Enrollment relationship.
- Lesson relationship.
- Completion status.
- Progress metadata, if needed.
- Updated timestamp.

### JobCategory
- Name.
- Slug.
- Description.
- Active status.

### JobListing
- Title.
- Employer.
- Description.
- Location.
- Employment type.
- Category.
- Application URL.
- Published date.
- Expiry date.
- Status.

### SavedJob
- User relationship.
- Job listing relationship.
- Created timestamp.

A uniqueness constraint should prevent a user saving the same job more than once.

### JobApplication
Optional for MVP. If approved:
- User relationship.
- Job listing relationship.
- Application status.
- Notes.
- Applied date.
- Updated timestamp.

### ResourceCategory
- Name.
- Slug.
- Description.
- Display order.

### Resource
- Title.
- Description.
- Category.
- Resource type.
- File or external URL reference.
- Access level.
- Publication status.
- Created and updated timestamps.

Access levels:
- Public.
- Registered.
- Course students.
- Premium.

### SupportEnquiry
- User relationship, nullable for guest enquiries if permitted.
- Full name.
- Email.
- WhatsApp number.
- Country.
- Support category.
- Preferred support option.
- Estimated hours.
- Project/task description.
- Required completion date.
- Additional information.
- Status.
- Created and updated timestamps.

### Payment
- User relationship.
- Enrollment or purchase reference.
- Provider.
- Provider transaction reference.
- Amount.
- Currency.
- Status.
- Verification metadata, limited to what is operationally necessary.
- Created and updated timestamps.

Never store raw card numbers, CVV values, or other prohibited payment credentials.

### Notification
- User relationship.
- Title.
- Message.
- Notification type.
- Read status.
- Created timestamp.
- Optional safe deep-link reference.

### NotificationPreference
- User relationship.
- Notification channel preferences.
- Category preferences.
- Updated timestamp.

## 3. Relationship overview
- User has one profile.
- Course has many modules.
- Module has many lessons.
- Course has one or more tracks.
- Track may have many cohorts.
- Cohort has many sessions.
- User has many enrollments.
- Enrollment may have many lesson-progress records.
- User has many saved jobs.
- Job listing may have many saved-job records.
- Resource belongs to a category.
- User may have many support enquiries.
- User may have many payment records.
- User may have many notifications.

## 4. Data integrity
- Use foreign keys with deliberate deletion behaviour.
- Add uniqueness constraints where duplicate records are invalid.
- Validate date ranges.
- Validate non-negative prices and quantities.
- Use explicit status choices.
- Add indexes based on real query patterns.
- Preserve financial and audit history where required.

## 5. Privacy and retention
Define retention periods for enquiries, payment metadata, account data, and logs before production. Restrict access to personal information and avoid collecting unnecessary fields.

## 6. Implementation notes
The final schema must be reconciled with `product-requirements.md` and actual workflows. Do not implement every proposed field automatically if it has no current use case.
