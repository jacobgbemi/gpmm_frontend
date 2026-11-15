# PHASE 09 — PROFESSIONAL RESOURCES

## 1. Objective
Build resource discovery and authorised access to professional and learning materials.

## 2. Screens
Resources landing, categories/filter, listing, details and viewer/download interface as content type requires.

## 3. Categories
Display backend-managed categories. Examples may include Primavera P6, Project Planning, Project Controls, MS Project, Excel, Power BI, Career Development and Templates.

## 4. Listing
Show available title, description, category, type, thumbnail/icon, date and access requirement. Search/filter where supported.

## 5. Resource Types
Accommodate backend-defined PDFs, Word files, spreadsheets, videos, articles, templates and other approved types. Do not assume every format can preview in-app.

## 6. Access Control
Backend may distinguish Public, Registered, Course students or Premium access. Explain restrictions, provide appropriate next action, never expose private URLs or bypass authorization. Backend enforces permissions.

## 7. File Access
Use approved backend access mechanism. Request signed/authenticated links through documented flow, handle expired links and errors, and avoid permanent private storage URLs. Do not invent download endpoints.

## 8. API
- `GET /api/v1/resources/`
- `GET /api/v1/resources/{resource_id}/`
- `GET /api/v1/resources/categories/`

## 9. UX
Search, filters, details, loading/empty/error, retry and download/view progress if supported.

## 10. Testing
Listing, category, details, public/restricted access, viewing/download, expired links and network failure.

## 11. Acceptance Criteria
Actual backend resources; correct categories/details; permissions respected; supported files open/download; no unnecessary private URL exposure.

## 12. Deliverables
Screens, API integration, file-access integration, viewer/download handling and tests.

## 13. Final Instruction
Test resource access and permissions before proceeding.
