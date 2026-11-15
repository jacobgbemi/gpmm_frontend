import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';
import { colors, typography } from '@/theme';

export interface ValidationMessageProps {
  message?: string;
  style?: StyleProp<TextStyle>;
}

export function ValidationMessage({ message, style }: ValidationMessageProps) {
  if (!message) return null;
  return <Text accessibilityRole="alert" style={[styles.message, style]}>{message}</Text>;
}

const styles = StyleSheet.create({ message: { color: colors.error, fontSize: typography.fontSize.xs, lineHeight: 18, fontWeight: typography.fontWeight.medium } });
