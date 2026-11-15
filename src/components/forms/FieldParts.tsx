import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing, typography } from '@/theme';

export function FieldLabel({ children, required, nativeID }: { children: ReactNode; required?: boolean; nativeID?: string }) {
  return (
    <Text nativeID={nativeID} style={styles.label}>
      {children}{required ? <Text style={styles.required}> *</Text> : null}
    </Text>
  );
}

export function FieldHint({ children, error }: { children?: ReactNode; error?: boolean }) {
  if (!children) return null;
  return <Text accessibilityRole={error ? 'alert' : undefined} style={[styles.hint, error && styles.error]}>{children}</Text>;
}

export function FieldContainer({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { gap: spacing.xs, width: '100%' },
  label: { color: colors.textPrimary, fontSize: typography.fontSize.sm, lineHeight: 20, fontWeight: typography.fontWeight.semiBold },
  required: { color: colors.error },
  hint: { color: colors.textMuted, fontSize: typography.fontSize.xs, lineHeight: 18 },
  error: { color: colors.error },
});
