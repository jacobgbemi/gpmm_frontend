# GlintPM Mobile App — Testing Strategy

## 1. Objectives
Verify that the app behaves correctly, protects user data, integrates reliably with the backend, and is suitable for release on supported devices.

## 2. Testing levels

### Unit tests
Test isolated functions, components, serializers, models, and business rules.

### Integration tests
Test interactions between components, API endpoints, database operations, and external-service adapters.

### End-to-end tests
Test complete user journeys through the mobile app and backend where practical.

### Manual testing
Test usability, device behaviour, payment-provider sandbox flows, and scenarios not adequately covered by automation.

## 3. Frontend test areas
- Component rendering.
- Navigation.
- Form validation.
- Authentication state.
- API loading and error handling.
- Empty states.
- Course browsing.
- Saved jobs.
- Resource access states.
- Support enquiry submission.
- Payment status presentation.
- Logout and account switching.

## 4. Backend test areas
- Model constraints.
- Serializer validation.
- Authentication.
- Object-level permissions.
- Course and enrollment rules.
- Job listing filters.
- Saved-job uniqueness.
- Resource access permissions.
- Support enquiry validation.
- Payment verification.
- Webhook authenticity and idempotency.
- Notification ownership.

## 5. Critical user journeys
1. Guest browses public courses and resources.
2. User registers and logs in.
3. User views and updates their profile.
4. User browses a course and views track details.
5. User completes a payment test flow and receives enrollment only after backend verification.
6. Student accesses permitted learning content.
7. User searches for a job and saves it.
8. User opens an external application link.
9. User accesses a permitted resource.
10. User submits a support enquiry.
11. User views notifications and marks one as read.
12. User logs out and protected content becomes inaccessible.

## 6. Security tests
- Unauthenticated access to protected endpoints is denied.
- User A cannot read or modify User B's private records.
- Restricted course content cannot be accessed without entitlement.
- Private resources cannot be downloaded by unauthorized users.
- Client-side payment success cannot create enrollment.
- Duplicate webhooks do not duplicate payment effects.
- Sensitive information is not exposed in API responses or logs.

## 7. Device and network tests
- Test on physical Android devices.
- Test supported iOS devices or simulators through the available Apple build/test workflow.
- Test small and large screen sizes.
- Test slow and interrupted network conditions.
- Test app restart and authentication persistence.
- Test keyboard behaviour on forms.

## 8. Test environments
- Local development.
- Staging.
- Payment provider sandbox.
- Production smoke tests after release.

Never use real payment credentials in automated development tests.

## 9. Release criteria
- Critical workflows pass.
- No unresolved critical security issue remains.
- No release-blocking defects remain.
- Production configuration is verified.
- Physical-device release build is tested.
- Known limitations are documented.
