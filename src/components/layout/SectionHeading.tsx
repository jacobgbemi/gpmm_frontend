import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing, textVariants, typography } from '@/theme';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function SectionHeading({ title, subtitle, action, style }: SectionHeadingProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text accessibilityRole="header" style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {action ? <View style={styles.action}>{action}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.md },
  textContainer: { flex: 1, minWidth: 0, gap: spacing.xxs },
  title: { ...textVariants.sectionTitle, color: colors.textPrimary },
  subtitle: { fontSize: typography.fontSize.sm, lineHeight: 21, color: colors.textSecondary },
  action: { flexShrink: 0 },
});
