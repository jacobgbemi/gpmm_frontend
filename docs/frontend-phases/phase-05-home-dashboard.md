# PHASE 05 — HOME DASHBOARD

## 1. Objective
Build authenticated dashboard overview of training, career activity, resources and notifications.

## 2. Dashboard Sections
- Welcome: user's name and avatar if available.
- Training: active courses, progress, upcoming cohort sessions, shortcuts.
- Career: featured/recent jobs, saved jobs count, shortcut.
- Resources: featured/recent resources, shortcut.
- Notifications: recent notifications, unread count, shortcut.

Include sections only when supported by backend dashboard API.

## 3. API
Integrate `GET /api/v1/dashboard/` using documented response schema. Do not hardcode sample data or invent backend values.

## 4. Behaviour
Implement pull-to-refresh, loading skeletons/indicators, empty and error states, retry actions and navigation shortcuts.

## 5. Performance
Avoid unnecessary API requests; use approved caching/refresh policies; maintain responsiveness with large data.

## 6. Testing
Data loading, empty dashboard, API failure, refresh, shortcuts, missing optional data and long names/content.

## 7. Acceptance Criteria
Dashboard uses actual backend data; sections work; loading/error states and refresh work; shortcuts work; responsive Android/iOS layout.

## 8. Deliverables
Dashboard screen, API integration, data models, reusable cards and tests.

## 9. Final Instruction
Test with actual backend responses before proceeding.
