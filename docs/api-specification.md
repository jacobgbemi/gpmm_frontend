# GlintPM Mobile App — API Specification

## 1. Status
This document describes a proposed API contract. Endpoints listed here are not assumed to exist until implemented and tested.

Base path: `/api/v1/`

All production API traffic must use HTTPS.

## 2. General conventions
- JSON request and response bodies unless a file upload requires multipart form data.
- Use standard HTTP methods and status codes.
- Validate all input on the backend.
- Apply pagination to large collections.
- Return consistent error structures.
- Enforce permissions server-side.

Example error shape:
```json
{
  "detail": "A human-readable error message.",
  "code": "validation_error",
  "errors": {
    "field_name": ["A field-specific message."]
  }
}
```

The exact response envelope should be standardized during backend foundation work.

## 3. Authentication
Proposed endpoints:
- `POST /auth/register/`
- `POST /auth/login/`
- `POST /auth/logout/`
- `POST /auth/token/refresh/` — only if supported by the selected token strategy.
- `GET /auth/me/`

Authentication method and token behaviour must be finalized before implementation.

## 4. User profile
- `GET /users/me/`
- `PATCH /users/me/`

Only permitted profile fields may be updated by the account owner.

## 5. Dashboard
- `GET /dashboard/`

Returns user-specific summaries such as enrolled courses, learning progress, relevant jobs, featured resources, and notifications.

## 6. Courses
- `GET /courses/`
- `GET /courses/{course_id}/`
- `GET /courses/categories/`
- `GET /courses/{course_id}/tracks/`
- `GET /courses/{course_id}/cohorts/`

Course and cohort data must be served from backend records.

## 7. Enrollments and learning progress
- `GET /enrollments/`
- `GET /enrollments/{enrollment_id}/`
- `POST /enrollments/{enrollment_id}/progress/`
- `GET /enrollments/{enrollment_id}/progress/`

The backend must verify that the authenticated user owns or is otherwise authorized to access the enrollment.

## 8. Career
- `GET /jobs/`
- `GET /jobs/{job_id}/`
- `GET /jobs/categories/`
- `GET /jobs/saved/`
- `POST /jobs/{job_id}/save/`
- `DELETE /jobs/{job_id}/save/`

Search, filters, ordering, and pagination parameters must be documented when implemented.

Optional, subject to MVP approval:
- `GET /job-applications/`
- `POST /job-applications/`
- `PATCH /job-applications/{application_id}/`

## 9. Resources
- `GET /resources/`
- `GET /resources/{resource_id}/`
- `GET /resources/categories/`
- `GET /resources/{resource_id}/access/` — only if a separate access endpoint is needed.

The API must enforce resource access levels. A frontend-hidden resource is not secure if its file URL remains publicly accessible.

## 10. Support enquiries
- `POST /support/enquiries/`
- `GET /support/enquiries/` — authenticated user records only, if user-facing history is approved.
- `GET /support/enquiries/{enquiry_id}/` — owner or authorized staff only.

Enquiry fields:
- full_name
- email
- whatsapp_number
- country
- support_category
- preferred_support_option
- estimated_hours
- project_description
- required_completion_date
- additional_information

## 11. Payments
Proposed endpoints:
- `POST /payments/initiate/`
- `GET /payments/{payment_id}/`
- `POST /payments/webhooks/{provider}/` — provider-specific webhook route.

Payment initiation and verification must be server-side. Webhook authentication, idempotency, and provider-specific payload validation are mandatory.

Never accept a client-provided “paid” flag as proof of payment.

## 12. Notifications
- `GET /notifications/`
- `POST /notifications/{notification_id}/read/`
- `POST /notifications/read-all/`
- `GET /notification-preferences/`
- `PATCH /notification-preferences/`

## 13. Administration
Administrative operations should normally use Django Admin or explicitly permissioned staff APIs. Do not expose administrative endpoints to ordinary users.

## 14. API documentation and testing
For each implemented endpoint document:
- Method and path.
- Authentication requirement.
- Permission rules.
- Query parameters.
- Request schema.
- Response schema.
- Error responses.
- Pagination behaviour.
- Example request and response.

Use automated tests to verify both successful and denied access.
