import { colors } from './colors';
import { spacing } from './spacing';
import { typography, textVariants } from './typography';

export { colors } from './colors';
export { spacing } from './spacing';
export { typography, textVariants } from './typography';

export const radii = {
  xs: 4,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  '2xl': 24,
  full: 9999,
} as const;

export const borders = {
  hairline: 0.5,
  thin: 1,
  medium: 2,
} as const;

export const theme = {
  colors,
  spacing,
  typography,
  textVariants,
  radii,
  borders,
} as const;

export type Theme = typeof theme;
