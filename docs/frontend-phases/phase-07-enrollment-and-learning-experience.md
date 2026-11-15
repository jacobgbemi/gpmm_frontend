# PHASE 07 — ENROLLMENT AND LEARNING EXPERIENCE

## 1. Objective
Build student experience to view enrolled courses, access entitled materials and track learning.

## 2. Screens
My Learning, My Enrollments, enrollment details, course learning, modules, lesson details, progress and upcoming cohort sessions as applicable.

## 3. My Learning
Display user's active/historical enrollments, course title, track, status, progress if provided, next session and Continue Learning action. Show only the authenticated user's enrollments.

## 4. Enrollment Details and Content
Display course/track/status/cohort and authorised modules/lessons. Accommodate approved text, video, PDF/document and external-link content. Respect backend entitlement; do not assume all lessons are downloadable.

## 5. Progress API
Integrate:
- `GET /api/v1/enrollments/`
- `GET /api/v1/enrollments/{enrollment_id}/`
- `GET /api/v1/enrollments/{enrollment_id}/progress/`
- `POST /api/v1/enrollments/{enrollment_id}/progress/`

Use documented contracts.

## 6. Progress Rules
Backend is source of truth. Submit supported progress updates, handle duplicate submissions and errors, refresh after success. Never activate enrollment or mark payment successful in frontend.

## 7. Cohort Sessions
Display session date/time/topic/delivery/meeting link when authorised. Format timezone according to backend-supplied information.

## 8. Testing
Enrollment list/details, content permissions, progress update/refresh, cohort sessions, cancelled/expired enrollment and API errors.

## 9. Acceptance Criteria
Users view their enrollments, access authorised content, progress syncs, restricted content remains protected, sessions display and errors are handled.

## 10. Deliverables
My Learning screens, enrollment integration, lesson/module UI, progress and cohort session interfaces, tests.

## 11. Final Instruction
Verify workflows against backend before proceeding.
