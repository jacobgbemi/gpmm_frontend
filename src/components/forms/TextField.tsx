import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';
import { FieldContainer, FieldHint, FieldLabel } from './FieldParts';

export interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

export const TextField = forwardRef<TextInput, TextFieldProps>(function TextField(
  {
    label,
    required,
    helperText,
    error,
    containerStyle,
    inputStyle,
    leftAdornment,
    rightAdornment,
    editable = true,
    accessibilityLabel,
    ...inputProps
  },
  ref
) {
  const inputID = inputProps.nativeID ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <FieldContainer style={containerStyle}>
      <FieldLabel required={required} nativeID={`${inputID}-label`}>{label}</FieldLabel>
      <View style={[styles.inputShell, error && styles.inputError, !editable && styles.inputDisabled]}>
        {leftAdornment ? <View style={styles.adornment}>{leftAdornment}</View> : null}
        <TextInput
          ref={ref}
          {...inputProps}
          nativeID={inputID}
          editable={editable}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityHint={error ?? helperText}
          placeholderTextColor={colors.textMuted}
          style={[styles.input, inputStyle]}
        />
        {rightAdornment ? <View style={styles.adornment}>{rightAdornment}</View> : null}
      </View>
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>
    </FieldContainer>
  );
});

const styles = StyleSheet.create({
  inputShell: { minHeight: 48, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.borderStrong, borderRadius: radii.md, backgroundColor: colors.surface, paddingHorizontal: spacing.md },
  inputError: { borderColor: colors.error },
  inputDisabled: { backgroundColor: colors.surfaceMuted, opacity: 0.75 },
  input: { flex: 1, minWidth: 0, minHeight: 46, paddingVertical: spacing.sm, color: colors.textPrimary, fontSize: typography.fontSize.md },
  adornment: { alignItems: 'center', justifyContent: 'center', marginHorizontal: spacing.xs },
});
