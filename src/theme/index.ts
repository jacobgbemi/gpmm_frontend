import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  spacing,
  typography,
  radii: {
    sm: 6,
    md: 10,
    lg: 16,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;

export { colors, spacing, typography };
