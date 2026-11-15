/**
 * GlintPM brand palette and neutral tokens.
 * Source: docs/ui-ux-guidelines.md and master development prompt.
 */
export const colors = {
  // Brand
  primary: '#085634',
  gold: '#F3BA25',
  cyan: '#1EC9DF',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  background: '#F7F8F7',
  surface: '#FFFFFF',
  border: '#E2E8E4',

  // Text
  textPrimary: '#0F1F17',
  textSecondary: '#4A5C52',
  textMuted: '#7A8B82',
  textOnPrimary: '#FFFFFF',
  textOnGold: '#0F1F17',

  // Semantic
  success: '#0F7B3A',
  warning: '#D4A017',
  error: '#C53030',
  info: '#1EC9DF',

  // Overlays
  overlay: 'rgba(8, 86, 52, 0.6)',
} as const;

export type ColorToken = keyof typeof colors;
