# GlintPM Mobile Design System — Phase 02

## Purpose and scope
This document describes the shared visual tokens and reusable React Native components introduced in Frontend Phase 02. The preview route at `/` is a local component gallery. It uses presentation-only sample content and does not call the backend.

Route registration, authentication guards, screen transitions, and the complete application navigation shell remain in Frontend Phase 03. Production dashboard data and feature-specific workflows remain in their later phases.

## Brand and semantic tokens
Import tokens from `@/theme`:

- `colors`: GlintPM brand colours, neutrals, semantic foregrounds/backgrounds, and interaction states.
- `spacing`: consistent density-independent spacing scale.
- `typography` and `textVariants`: font metrics and named text hierarchy.
- `radii`: shared corner-radius scale.
- `borders`: shared border-width scale.

Brand colours are deep green `#085634`, gold `#F3BA25`, and cyan `#1EC9DF`. Use semantic tokens for status and feedback rather than inventing one-off colours in feature screens.

## Component exports
Import shared UI from `@/components` or the focused entry points `@/components/common`, `@/components/forms`, and `@/components/layout`.

### Common
- `Button`: primary, secondary, outlined, text, and danger variants; small, medium, and large sizes; disabled and loading states.
- `Card`: standard content surface, optionally pressable.
- `CourseCard`, `JobCard`, `ResourceCard`, `NotificationCard`, `DashboardSummaryCard`: typed content-card patterns. They render supplied content only and do not fetch data.
- `Badge`: primary, gold, cyan, success, warning, error, and neutral variants.
- `Avatar`: image or initials fallback.
- `Divider` and `StatusIndicator`.
- `LoadingState`, `EmptyState`, `ErrorState`, `SuccessState`, `ConfirmationDialog`, and `Toast`.

`Toast` is controlled by its owner. Set `visible` and manage its lifetime in the screen or feature; the component intentionally does not start timers or assume when a message should disappear.

### Forms
- `TextField`: single-line text input; configure email, password, and phone behaviour with the standard React Native `TextInput` props such as `keyboardType`, `secureTextEntry`, and `autoCapitalize`.
- `TextAreaField`: multiline text input.
- `SelectField`: accessible option modal.
- `DatePickerField`: local calendar modal. Values are date-only strings in `YYYY-MM-DD` format; optional `minDate` and `maxDate` use the same format.
- `CheckboxField` and `RadioGroupField`: controlled selection controls.
- `ValidationMessage`: reusable validation text.

All fields are controlled by the consuming screen. Form submission and validation remain the responsibility of feature forms, which can use the repository's existing React Hook Form and Zod dependencies. Backend validation remains authoritative.

### Layout
- `ScreenContainer`: safe-area-aware screen wrapper with optional scrolling.
- `PageHeader` and `SectionHeading`: consistent page and section hierarchy.
- `NavigationBar`: a presentational, controlled tab bar with accessible selected/disabled states. It does not register Expo Router routes or implement authentication guards; those belong to Frontend Phase 03.

## Accessibility and responsive behaviour
- Interactive controls expose roles, labels, hints, and state where relevant.
- Buttons and form controls target a minimum 44-point interaction height where practical.
- Labels and helper/error messages are kept separate from placeholder text.
- Content cards use flexible widths and allow text to wrap.
- Modal content is width-constrained and scrollable where option lists can grow.
- Status is communicated with text as well as colour.

## Usage example

```tsx
import { Button, Card, TextField } from '@/components';
import { ScreenContainer, SectionHeading } from '@/components/layout';

export function ExampleScreen() {
  return (
    <ScreenContainer scrollable>
      <SectionHeading title="Contact details" />
      <Card>
        <TextField label="Email address" keyboardType="email-address" />
        <Button onPress={() => undefined}>Continue</Button>
      </Card>
    </ScreenContainer>
  );
}
```

## Testing notes
Date-only helper tests live beside the form date utilities. Theme tests verify the documented brand palette. Component rendering and interaction tests are included and use React Native Testing Library. Install the manual development dependencies listed in `phase-02-manual-dependencies.md` before running the complete suite; `package.json` is intentionally unchanged.
