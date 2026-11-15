/**
 * GlintPM brand palette and semantic colours.
 * Source of truth: docs/ui-ux-guidelines.md and master prompt.
 */

export const colors = {
  // Brand
  primary: '#085634', // Deep green
  gold: '#F3BA25',
  cyan: '#1EC9DF',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  background: '#F7F9F8',
  surface: '#FFFFFF',
  border: '#E2E8E5',

  // Text
  textPrimary: '#0F1C17',
  textSecondary: '#4A5C54',
  textMuted: '#7A8B83',
  textOnPrimary: '#FFFFFF',
  textOnGold: '#0F1C17',

  // Semantic
  success: '#0F7B4A',
  warning: '#D4A017',
  error: '#C53030',
  info: '#1EC9DF',

  // States
  disabled: '#A0AEC0',
  overlay: 'rgba(15, 28, 23, 0.45)',
} as const;

export type ColorToken = keyof typeof colors;
