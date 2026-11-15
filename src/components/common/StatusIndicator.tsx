import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing, typography } from '@/theme';

export type StatusType = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'active';
const statusColors: Record<StatusType, string> = {
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  info: colors.info,
  neutral: colors.textMuted,
  active: colors.primary,
};

export interface StatusIndicatorProps {
  status: StatusType;
  label: string;
  style?: StyleProp<ViewStyle>;
}

export function StatusIndicator({ status, label, style }: StatusIndicatorProps) {
  return (
    <View accessible accessibilityRole="text" accessibilityLabel={`${label}: ${status}`} style={[styles.container, style]}>
      <View style={[styles.dot, { backgroundColor: statusColors[status] }]} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  dot: { width: 8, height: 8, borderRadius: 4 },
  label: { color: colors.textSecondary, fontSize: typography.fontSize.sm },
});
