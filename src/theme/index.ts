import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export { colors } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;
