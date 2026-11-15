import { StyleSheet, TextInput, type StyleProp, type TextInputProps, type TextStyle, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';
import { FieldContainer, FieldHint, FieldLabel } from './FieldParts';

export interface TextAreaFieldProps extends Omit<TextInputProps, 'style' | 'multiline'> {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  minHeight?: number;
}

export function TextAreaField({ label, required, helperText, error, containerStyle, inputStyle, minHeight = 112, editable = true, accessibilityLabel, ...props }: TextAreaFieldProps) {
  return (
    <FieldContainer style={containerStyle}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <TextInput
        {...props}
        multiline
        textAlignVertical="top"
        editable={editable}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={error ?? helperText}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, { minHeight }, error && styles.inputError, !editable && styles.inputDisabled, inputStyle]}
      />
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>
    </FieldContainer>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: colors.borderStrong, borderRadius: radii.md, backgroundColor: colors.surface, padding: spacing.md, color: colors.textPrimary, fontSize: typography.fontSize.md, lineHeight: 23 },
  inputError: { borderColor: colors.error },
  inputDisabled: { backgroundColor: colors.surfaceMuted, opacity: 0.75 },
});
