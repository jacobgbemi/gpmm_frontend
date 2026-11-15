# PHASE 13 — TESTING, ANDROID/IOS BUILDS AND RELEASE

## 1. Objective
Prepare GlintPM mobile application for production. Verify functionality, security and platform consistency; configure builds and release assets.

## 2. Full Review
Review authentication, navigation, dashboard, Academy, enrollment/learning, Career Hub, resources, support, payments, profile, notifications and settings against product requirements.

## 3. End-to-End Workflows
### A. New User
Launch, register, verify if required, login, dashboard, profile update and logout.

### B. Training Discovery
Browse/search/filter courses, details, tracks/cohorts and checkout.

### C. Enrollment/Learning
Sandbox payment, backend verification, enrollment activation, My Learning, authorised lesson and progress sync.

### D. Career
Browse/search job, details, save, view saved and remove.

### E. Resources
Browse categories, open resource, test authorised/restricted access and file view/download.

### F. Support
Submit enquiry and verify confirmation/history if supported.

### G. Notifications
Retrieve, read individual/all and verify count.

## 4. Automated Tests
Run unit, component, screen, navigation, API integration, authentication, validation, payment and regression tests. Fix critical failures.

## 5. Manual Platform Testing
Test Android emulator and physical Android device; iOS simulator and physical iOS device where available. Check screen sizes, keyboard, safe areas, touch, scrolling, long content, network interruptions and background/foreground. Do not claim device testing unless performed.

## 6. Performance
Review startup, rendering, API frequency, images, lists, memory and file handling. Optimise identified issues.

## 7. Security Review
Verify secure auth storage, no backend secrets in bundle, protected requests, logout cleanup, restricted resource protection, backend payment verification, no sensitive logs and HTTPS production API.

## 8. Error/Network Testing
Test offline, slow connection, backend unavailable, timeout, malformed response, expired auth, interrupted payment and failed download. Provide recovery and no false success states.

## 9. Production Configuration
Prepare API URL, app name, identifiers, icons, splash screen, version/build, environment and release assets. Exclude development credentials and test payment config.

## 10. Build
Use approved Expo workflow and current official docs. Prepare Android/iOS development and production builds. Verify signing, provisioning and store submission requirements. Do not claim iOS build success unless environment/credentials are available and build succeeds.

## 11. Release Assets
Prepare app name/description, screenshots, icon, privacy policy URL, terms URL, support contact, permission explanations and store listing. Ensure privacy policy matches actual data processing.

## 12. Production Regression
Install production build and verify authentication, dashboard, course browsing, enrollment, Career, resources, support, payment via safe procedure, notifications and logout. Confirm production API configuration.

## 13. Acceptance Criteria
Critical features and API integrations verified; Android build successful; iOS build successful if available; no critical security defects; error handling/performance acceptable; production config and release docs complete.

## 14. Deliverables
Tested app, Android build, iOS build if available, test/security reports, release config, store assets, deployment/release docs and known issues register.

## 15. Final Instruction
A successful build alone is not production readiness. Verify critical workflows, integration, security, error handling and release configuration. Report tests run/pass/fail, build results, limitations, defects and readiness recommendation.
