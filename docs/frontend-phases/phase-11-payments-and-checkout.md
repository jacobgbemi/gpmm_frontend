# PHASE 11 — PAYMENTS AND CHECKOUT

## 1. Objective
Build checkout for GlintPM training. Users review selected course/track/cohort and initiate payment through the provider approved for the project.

## 2. Screens
Checkout, order summary, payment initiation/processing, success, failure and payment history if supported.

## 3. Checkout Summary
Display course, track, cohort if applicable, backend-supplied price/currency, approved discounts and total. Backend is source of truth; never hardcode prices.

## 4. Location-Based Pricing
Display backend-returned price and currency. Do not independently calculate exchange rates or infer final price from country unless backend defines it. Backend validates amount.

## 5. Initiation
Integrate `POST /api/v1/payments/initiate/` only according to documented contract. Use selected provider. Do not invent SDK methods, URLs or parameters.

## 6. Flow
1. User selects course/track.
2. Review checkout.
3. Request payment initiation from backend.
4. Backend returns supported instructions.
5. Launch approved payment interface.
6. User completes/cancels.
7. Retrieve payment status from backend.
8. Display confirmed result.
9. On verified success, offer enrollment access.
Redirect/callback is not proof of payment.

## 7. Status
Use backend-defined statuses; examples may be Pending, Processing, Successful, Failed, Cancelled, Refunded. Confirm actual values.

## 8. Security
Never store card data or provider secret keys; avoid sensitive logs; use secure communication; handle interruption and duplicate initiation; verify status through backend.

## 9. History
If supported, show transaction reference, course/service, amount, currency, date and status for current user only.

## 10. Testing
Use approved sandbox: summary, price, initiation, success/failure/cancel/pending/interruption, duplicate prevention and enrollment after verified payment.

## 11. Acceptance Criteria
Backend prices, correct initiation, provider docs followed, backend status verification, no client trust, correct enrollment and robust payment states.

## 12. Deliverables
Checkout UI, payment integration, status handling, history if supported and tests.

## 13. Final Instruction
Test in approved sandbox. Never claim transaction success without backend confirmation.
