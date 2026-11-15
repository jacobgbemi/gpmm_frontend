/** Typography tokens for a readable, professional mobile experience. */
export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
} as const;

export const textVariants = {
  display: { fontSize: 32, lineHeight: 39, fontWeight: '700' as const },
  pageTitle: { fontSize: 28, lineHeight: 34, fontWeight: '700' as const },
  sectionTitle: { fontSize: 20, lineHeight: 27, fontWeight: '600' as const },
  cardTitle: { fontSize: 16, lineHeight: 23, fontWeight: '600' as const },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' as const },
  bodySmall: { fontSize: 14, lineHeight: 21, fontWeight: '400' as const },
  caption: { fontSize: 12, lineHeight: 18, fontWeight: '400' as const },
  label: { fontSize: 14, lineHeight: 20, fontWeight: '600' as const },
  button: { fontSize: 15, lineHeight: 20, fontWeight: '600' as const },
  error: { fontSize: 12, lineHeight: 18, fontWeight: '500' as const },
} as const;

export type TextVariant = keyof typeof textVariants;
