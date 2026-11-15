# PHASE 08 — CAREER HUB

## 1. Objective
Build job discovery, details and saved jobs for project management and technical professionals.

## 2. Screens
Career landing, job listings, job details, category/filter and saved jobs.

## 3. Job Listings
Show available title, company, location, employment type, experience level, publication date, deadline and category. Do not present absent information as confirmed.

## 4. Search and Filters
Implement backend-supported keyword, category, location, employment type and experience filters. Use backend pagination; avoid loading all jobs.

## 5. Job Details
Display description, responsibilities, requirements, qualifications, application instructions, external link and deadline if supplied. Open external application links safely.

## 6. Saved Jobs API
- `GET /api/v1/jobs/saved/`
- `POST /api/v1/jobs/{job_id}/save/`
- `DELETE /api/v1/jobs/{job_id}/save/`

Follow exact contracts. Provide feedback and handle failed saves without inconsistent UI.

## 7. Listing API
- `GET /api/v1/jobs/`
- `GET /api/v1/jobs/{job_id}/`
- `GET /api/v1/jobs/categories/`

Implement supported filters and pagination.

## 8. Expiry
Clearly show backend-provided expired/unavailable status; do not present expired job as active or enable inappropriate application actions. Backend owns publication/expiry rules.

## 9. UX
Pull-to-refresh, search, filters, saved indicators, empty/loading/error states and retry.

## 10. Testing
Listing, details, search, filters, pagination, save/remove, expired jobs, external links and API errors.

## 11. Acceptance Criteria
Actual backend listings; correct details; supported search/filter; save/remove works; expiry handled; no fabricated listings.

## 12. Deliverables
Career screens, integration, details, filters, saved jobs and tests.

## 13. Final Instruction
Test using actual backend data.
