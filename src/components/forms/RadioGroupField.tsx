import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';
import { FieldHint, FieldLabel } from './FieldParts';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupFieldProps {
  label: string;
  value?: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  required?: boolean;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function RadioGroupField({ label, value, options, onChange, required, helperText, error, disabled = false, direction = 'vertical', style, accessibilityLabel }: RadioGroupFieldProps) {
  return (
    <View style={[styles.container, style]}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <View accessibilityRole="radiogroup" accessibilityLabel={accessibilityLabel ?? label} style={[styles.options, direction === 'horizontal' && styles.horizontal]}>
        {options.map((option) => {
          const checked = option.value === value;
          const isDisabled = disabled || Boolean(option.disabled);
          return (
            <Pressable
              key={option.value}
              accessibilityRole="radio"
              accessibilityLabel={option.label}
              accessibilityState={{ checked, disabled: isDisabled }}
              disabled={isDisabled}
              onPress={() => onChange(option.value)}
              style={styles.option}
            >
              <View style={[styles.radio, checked && styles.radioChecked, isDisabled && styles.disabled]}>
                {checked ? <View style={styles.radioInner} /> : null}
              </View>
              <Text style={[styles.optionLabel, isDisabled && styles.disabledText]}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', gap: spacing.xs },
  options: { gap: spacing.sm },
  horizontal: { flexDirection: 'row', flexWrap: 'wrap', columnGap: spacing.lg },
  option: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  radio: { width: 22, height: 22, borderRadius: radii.full, borderWidth: 1.5, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  radioChecked: { borderColor: colors.primary },
  radioInner: { width: 10, height: 10, borderRadius: radii.full, backgroundColor: colors.primary },
  optionLabel: { color: colors.textPrimary, fontSize: typography.fontSize.sm },
  disabled: { opacity: 0.5 },
  disabledText: { color: colors.textDisabled },
});
