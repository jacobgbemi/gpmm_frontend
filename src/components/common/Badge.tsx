import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';

export type BadgeVariant = 'primary' | 'gold' | 'cyan' | 'success' | 'warning' | 'error' | 'neutral';

const palette: Record<BadgeVariant, { background: string; foreground: string }> = {
  primary: { background: colors.primarySubtle, foreground: colors.primary },
  gold: { background: colors.goldSubtle, foreground: colors.textOnGold },
  cyan: { background: colors.cyanSubtle, foreground: colors.textOnCyan },
  success: { background: colors.successBackground, foreground: colors.success },
  warning: { background: colors.warningBackground, foreground: colors.warning },
  error: { background: colors.errorBackground, foreground: colors.error },
  neutral: { background: colors.surfaceMuted, foreground: colors.textSecondary },
};

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function Badge({ children, variant = 'neutral', style, accessibilityLabel }: BadgeProps) {
  const selected = palette[variant];
  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel}
      style={[styles.container, { backgroundColor: selected.background }, style]}
    >
      <Text style={[styles.text, { color: selected.foreground }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start', borderRadius: radii.full, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs },
  text: { fontSize: typography.fontSize.xs, lineHeight: 17, fontWeight: typography.fontWeight.semiBold },
});
