import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '@/theme';
import { config } from '@/constants/config';

/**
 * Foundation entry screen.
 * Confirms Expo + TypeScript + theme + env config are wired.
 * Feature screens replace this in later phases.
 */
export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Phase 00</Text>
        </View>

        <Text style={styles.title}>GlintPM</Text>
        <Text style={styles.subtitle}>
          Professional training, career opportunities, and project support.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Foundation ready</Text>
          <Text style={styles.cardBody}>
            Expo, TypeScript, Expo Router, theme tokens, environment config, and
            the central API client are in place.
          </Text>
          <Text style={styles.meta}>
            API base: {config.apiBaseUrl}
          </Text>
          <Text style={styles.meta}>Env: {config.appEnv}</Text>
        </View>

        <Text style={styles.footer}>
          Shared Android & iOS codebase · React Native + Expo
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: colors.gold,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    marginBottom: spacing.md,
  },
  badgeText: {
    color: colors.textOnGold,
    fontSize: typography.size.sm,
    fontWeight: '700',
  },
  title: {
    fontSize: typography.size.display,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.size.md * typography.lineHeight.relaxed,
    marginBottom: spacing.xl,
    maxWidth: 320,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: typography.size.lg,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  cardBody: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    lineHeight: typography.size.md * typography.lineHeight.normal,
    marginBottom: spacing.md,
  },
  meta: {
    fontSize: typography.size.sm,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.lg,
    fontSize: typography.size.xs,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
