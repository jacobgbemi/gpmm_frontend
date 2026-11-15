import { type ReactNode } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { Button } from './Button';
import { colors, radii, spacing, textVariants, typography } from '@/theme';

export interface LoadingStateProps {
  label?: string;
  fullScreen?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function LoadingState({ label = 'Loading…', fullScreen = false, style }: LoadingStateProps) {
  return (
    <View accessibilityRole="progressbar" accessibilityLabel={label} style={[styles.centered, fullScreen && styles.fullScreen, style]}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.body}>{label}</Text>
    </View>
  );
}

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  illustration?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function EmptyState({ title, description, action, illustration, style }: EmptyStateProps) {
  return (
    <View style={[styles.stateContainer, style]}>
      {illustration ? <View style={styles.illustration}>{illustration}</View> : null}
      <Text style={styles.stateTitle}>{title}</Text>
      {description ? <Text style={styles.body}>{description}</Text> : null}
      {action ? <View style={styles.action}>{action}</View> : null}
    </View>
  );
}

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export function ErrorState({ title = 'Something went wrong', message, onRetry, retryLabel = 'Try again', style }: ErrorStateProps) {
  return (
    <View accessibilityRole="alert" style={[styles.stateContainer, styles.errorContainer, style]}>
      <Text style={styles.stateTitle}>{title}</Text>
      <Text style={styles.body}>{message}</Text>
      {onRetry ? <View style={styles.action}><Button onPress={onRetry} variant="outlined">{retryLabel}</Button></View> : null}
    </View>
  );
}

export interface SuccessStateProps {
  title: string;
  message?: string;
  action?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function SuccessState({ title, message, action, style }: SuccessStateProps) {
  return (
    <View accessibilityRole="summary" style={[styles.stateContainer, styles.successContainer, style]}>
      <Text style={styles.stateTitle}>{title}</Text>
      {message ? <Text style={styles.body}>{message}</Text> : null}
      {action ? <View style={styles.action}>{action}</View> : null}
    </View>
  );
}

export interface ConfirmationDialogProps {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationDialog({
  visible,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.dialogBackdrop}>
        <View accessibilityViewIsModal style={styles.dialogCard}>
          <Text accessibilityRole="header" style={styles.stateTitle}>{title}</Text>
          <Text style={styles.body}>{message}</Text>
          <View style={styles.dialogActions}>
            <Button variant="outlined" onPress={onCancel}>{cancelLabel}</Button>
            <Button variant={destructive ? 'danger' : 'primary'} onPress={onConfirm}>{confirmLabel}</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export type FeedbackTone = 'success' | 'warning' | 'error' | 'info';
const feedbackPalette = {
  success: { background: colors.successBackground, foreground: colors.success },
  warning: { background: colors.warningBackground, foreground: colors.warning },
  error: { background: colors.errorBackground, foreground: colors.error },
  info: { background: colors.infoBackground, foreground: colors.info },
} as const;

export interface ToastProps {
  visible: boolean;
  title: string;
  message?: string;
  tone?: FeedbackTone;
  onDismiss?: () => void;
  action?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

/** Controlled, accessible toast/banner. The owner controls its visibility and lifetime. */
export function Toast({ visible, title, message, tone = 'info', onDismiss, action, style }: ToastProps) {
  if (!visible) return null;
  const palette = feedbackPalette[tone];
  return (
    <View accessibilityRole="alert" accessibilityLiveRegion="polite" style={[styles.toast, { backgroundColor: palette.background, borderLeftColor: palette.foreground }, style]}>
      <View style={styles.toastContent}>
        <Text style={[styles.toastTitle, { color: palette.foreground }]}>{title}</Text>
        {message ? <Text style={styles.body}>{message}</Text> : null}
        {action}
      </View>
      {onDismiss ? <Button variant="text" size="small" onPress={onDismiss} accessibilityLabel="Dismiss message">Dismiss</Button> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing['2xl'] },
  fullScreen: { flex: 1 },
  stateContainer: { alignItems: 'center', justifyContent: 'center', padding: spacing['2xl'], gap: spacing.sm, borderRadius: radii.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  errorContainer: { backgroundColor: colors.errorBackground, borderColor: '#F5C6C6' },
  successContainer: { backgroundColor: colors.successBackground, borderColor: '#C8E8D5' },
  stateTitle: { ...textVariants.sectionTitle, color: colors.textPrimary, textAlign: 'center' },
  body: { fontSize: typography.fontSize.sm, lineHeight: 21, color: colors.textSecondary, textAlign: 'center' },
  illustration: { marginBottom: spacing.xs },
  action: { marginTop: spacing.sm, alignSelf: 'stretch' },
  dialogBackdrop: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'center', padding: spacing.lg },
  dialogCard: { width: '100%', maxWidth: 440, alignSelf: 'center', backgroundColor: colors.surface, borderRadius: radii.xl, padding: spacing.xl, gap: spacing.md },
  dialogActions: { flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'wrap', gap: spacing.sm },
  toast: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, borderRadius: radii.md, borderLeftWidth: 4 },
  toastContent: { flex: 1, gap: spacing.xxs },
  toastTitle: { fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold },
});
