# PHASE 10 — SUPPORT AND CONSULTING

## 1. Objective
Build support enquiry workflow for GlintPM planning, scheduling, project controls and technical job support.

## 2. Screens
Support landing, service information, enquiry form, confirmation, My Support Enquiries and enquiry details if backend supports history.

## 3. Categories
- Primavera P6 Scheduling
- Project Controls
- Project Planning
- Technical Job Support
- Other

## 4. Options
- Hourly Support
- Prepaid Package
- Monthly Retainer
- Custom Quote

Do not invent pricing or response guarantees.

## 5. Form Fields
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

Prefill authenticated profile data where appropriate. Let user review before submission.

## 6. Validation
Required fields per backend, email, international phone, estimated hours if required, date and text limits. Follow backend rules; avoid arbitrary conflicting constraints.

## 7. API
- `POST /api/v1/support/enquiries/`
- Optional history: `GET /api/v1/support/enquiries/`
- Optional details: `GET /api/v1/support/enquiries/{enquiry_id}/`

Use exact contract.

## 8. Submission
Validate, prevent duplicate submission, send request, handle errors, show confirmation only after backend success, reset form appropriately.

## 9. Status
If history exists, display backend status values. Possible examples: New, Under Review, Awaiting Customer Response, Quoted, Accepted, In Progress, Completed, Closed, Rejected. Confirm actual choices.

## 10. Testing
Validation, success, invalid request, network failure, duplicate submission, profile prefill, history/status if supported.

## 11. Acceptance Criteria
Responsive form, fields/validation, backend submission, confirmation only on success, errors handled and history works if available.

## 12. Deliverables
Screens, form, validation, API integration, confirmation and tests.

## 13. Final Instruction
Verify submission against backend.
