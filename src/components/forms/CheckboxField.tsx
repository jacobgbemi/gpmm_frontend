import { type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';
import { FieldHint } from './FieldParts';

export interface CheckboxFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: ReactNode;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function CheckboxField({ checked, onChange, label, helperText, error, disabled = false, style, accessibilityLabel }: CheckboxFieldProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ checked, disabled }}
        disabled={disabled}
        onPress={() => onChange(!checked)}
        style={styles.controlRow}
      >
        <View style={[styles.box, checked && styles.boxChecked, error && styles.boxError, disabled && styles.disabled]}>
          {checked ? <Text style={styles.checkmark}>✓</Text> : null}
        </View>
        <View style={styles.labelContainer}>{typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}</View>
      </Pressable>
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.xs, width: '100%' },
  controlRow: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  box: { width: 22, height: 22, borderWidth: 1.5, borderColor: colors.borderStrong, borderRadius: radii.xs, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  boxChecked: { borderColor: colors.primary, backgroundColor: colors.primary },
  boxError: { borderColor: colors.error },
  checkmark: { color: colors.white, fontSize: 15, lineHeight: 18, fontWeight: typography.fontWeight.bold },
  labelContainer: { flex: 1 },
  label: { color: colors.textPrimary, fontSize: typography.fontSize.sm, lineHeight: 21 },
  disabled: { opacity: 0.5 },
});
