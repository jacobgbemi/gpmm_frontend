import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';
import { ENV } from '@/constants/env';

/**
 * Phase 01 foundation screen.
 * Confirms the app boots, theme tokens load, and environment is readable.
 * Feature screens and navigation shell arrive in later phases.
 */
export default function FoundationScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.badge}>Phase 01</Text>
          <Text style={styles.title}>GlintPM Mobile</Text>
          <Text style={styles.subtitle}>Frontend foundation is ready</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Environment</Text>
          <Text style={styles.value}>{ENV.APP_ENV}</Text>

          <Text style={styles.label}>API Base URL</Text>
          <Text style={styles.value} numberOfLines={2}>
            {ENV.API_BASE_URL}
          </Text>

          <Text style={styles.label}>Debug</Text>
          <Text style={styles.value}>{ENV.DEBUG ? 'Enabled' : 'Disabled'}</Text>

          <View style={styles.divider} />

          <Text style={styles.footer}>
            Next: Design system & reusable components (Phase 02)
          </Text>
        </View>

        <View style={styles.paletteRow}>
          <View style={[styles.swatch, { backgroundColor: colors.primary }]} />
          <View style={[styles.swatch, { backgroundColor: colors.gold }]} />
          <View style={[styles.swatch, { backgroundColor: colors.cyan }]} />
        </View>
        <Text style={styles.paletteLabel}>Brand palette</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing['2xl'],
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semiBold,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: spacing.xxs,
  },
  value: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  footer: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  paletteRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing['2xl'],
  },
  swatch: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  paletteLabel: {
    textAlign: 'center',
    marginTop: spacing.sm,
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
  },
});
