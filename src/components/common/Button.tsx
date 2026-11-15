import { type ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { colors, radii, spacing, textVariants } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const variantStyles = {
  primary: { backgroundColor: colors.primary, borderColor: colors.primary, textColor: colors.white },
  secondary: { backgroundColor: colors.gold, borderColor: colors.gold, textColor: colors.textOnGold },
  outlined: { backgroundColor: colors.surface, borderColor: colors.primary, textColor: colors.primary },
  text: { backgroundColor: 'transparent', borderColor: 'transparent', textColor: colors.primary },
  danger: { backgroundColor: colors.error, borderColor: colors.error, textColor: colors.white },
} as const;

const sizeStyles = {
  small: { minHeight: 44, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  medium: { minHeight: 48, paddingHorizontal: spacing.xl, paddingVertical: spacing.md },
  large: { minHeight: 54, paddingHorizontal: spacing['2xl'], paddingVertical: spacing.md },
} as const;

export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  accessibilityLabel,
  accessibilityHint,
  leftAdornment,
  rightAdornment,
  style,
  textStyle,
  testID,
}: ButtonProps) {
  const palette = variantStyles[variant];
  const isDisabled = disabled || loading || !onPress;
  const indicatorColor = isDisabled ? colors.textDisabled : palette.textColor;
  const labelColor = isDisabled ? colors.textDisabled : palette.textColor;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? (typeof children === 'string' || typeof children === 'number' ? String(children) : undefined)}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        { backgroundColor: palette.backgroundColor, borderColor: palette.borderColor },
        variant === 'text' && styles.textVariant,
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <>
          {leftAdornment}
          <Text style={[styles.label, { color: labelColor }, textStyle]}>{children}</Text>
          {rightAdornment}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: radii.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  textVariant: { borderWidth: 0, paddingHorizontal: spacing.sm },
  fullWidth: { alignSelf: 'stretch', width: '100%' },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
  disabled: { backgroundColor: colors.disabled, borderColor: colors.disabled, opacity: 0.72 },
  label: { ...textVariants.button, textAlign: 'center' },
});
