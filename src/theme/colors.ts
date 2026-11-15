/**
 * GlintPM brand palette and semantic colours.
 * Source of truth: docs/ui-ux-guidelines.md and master_development_prompt.md.
 */
export const colors = {
  // Brand
  primary: '#085634', // Deep green
  primaryPressed: '#064329',
  primarySubtle: '#EAF3EE',
  gold: '#F3BA25',
  goldPressed: '#DCA719',
  goldSubtle: '#FFF7DF',
  cyan: '#1EC9DF',
  cyanSubtle: '#E7FAFC',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  background: '#F7F9F8',
  surface: '#FFFFFF',
  surfaceMuted: '#F1F5F2',
  surfaceElevated: '#FFFFFF',
  border: '#E2E8E5',
  borderStrong: '#C6D2CB',
  borderFocus: '#0B7950',

  // Text
  textPrimary: '#0F1C17',
  textSecondary: '#4A5C54',
  textMuted: '#687970',
  textDisabled: '#8A9690',
  textOnPrimary: '#FFFFFF',
  textOnGold: '#0F1C17',
  textOnCyan: '#0F1C17',

  // Semantic foregrounds and backgrounds
  success: '#0F7B4A',
  successBackground: '#EAF6EF',
  warning: '#8A5A00',
  warningBackground: '#FFF7DF',
  error: '#C53030',
  errorBackground: '#FDECEC',
  info: '#0C7180',
  infoBackground: '#E7FAFC',

  // States
  disabled: '#D9E0DC',
  overlay: 'rgba(15, 28, 23, 0.48)',
} as const;

export type ColorToken = keyof typeof colors;
