# PHASE 06 — TRAINING ACADEMY

## 1. Objective
Build course discovery, details, training track and cohort browsing.

## 2. Screens
Academy landing, categories/filter, course listing, course details, tracks, cohort listing and cohort details where needed.

## 3. Course Listing
Display backend-supplied title, description, image, category, duration, tracks and price/range when provided. Support search, category filter, pagination/infinite scrolling and details navigation.

## 4. Course Details
Display title, description, objectives, public modules/content, tracks, duration, requirements, cohorts and pricing only as supplied by backend.

## 5. Tracks
Support Self-paced, Launchpad and Mentored, showing backend-provided details. Never hardcode price, currency, capacity or availability.

## 6. Cohorts
Display name, start date, schedule, delivery method, availability and registration status where available. Do not promise seat reservation based on client data.

## 7. API Integration
- `GET /api/v1/courses/`
- `GET /api/v1/courses/{course_id}/`
- `GET /api/v1/courses/categories/`
- `GET /api/v1/courses/{course_id}/tracks/`
- `GET /api/v1/courses/{course_id}/cohorts/`

Use exact API schemas.

## 8. UX
Search/filter, loading, empty search, errors, retry, pull-to-refresh as appropriate, clear CTAs and readable mobile content.

## 9. Testing
Listing, search, filters, details, tracks, cohorts, optional data, errors and navigation.

## 10. Acceptance Criteria
Actual backend data; details/tracks/cohorts correct; search/filter functional; no hardcoded price/availability; states work; responsive.

## 11. Deliverables
Academy screens, API integration, models, cohort interface, search/filter and tests.

## 12. Final Instruction
Test with actual backend data before proceeding.
