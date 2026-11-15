import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing, textVariants, typography } from '@/theme';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function PageHeader({ title, subtitle, eyebrow, leading, trailing, style }: PageHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      {leading ? <View style={styles.leading}>{leading}</View> : null}
      <View style={styles.textContainer}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text accessibilityRole="header" style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {trailing ? <View style={styles.trailing}>{trailing}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md },
  leading: { paddingTop: spacing.xs },
  textContainer: { flex: 1, minWidth: 0, gap: spacing.xs },
  trailing: { flexShrink: 0 },
  eyebrow: { color: colors.primary, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, letterSpacing: 0.8, textTransform: 'uppercase' },
  title: { ...textVariants.pageTitle, color: colors.textPrimary, flexShrink: 1 },
  subtitle: { color: colors.textSecondary, fontSize: typography.fontSize.md, lineHeight: 24 },
});
