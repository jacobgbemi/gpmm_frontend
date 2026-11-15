import { type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '@/theme';

export interface NavigationItem {
  key: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  badge?: string;
}

export interface NavigationBarProps {
  items: NavigationItem[];
  activeKey: string;
  onChange: (key: string) => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

/** Presentational tab bar. Route registration and auth guards belong to the navigation phase. */
export function NavigationBar({ items, activeKey, onChange, accessibilityLabel = 'Primary navigation', style }: NavigationBarProps) {
  return (
    <View accessibilityRole="tablist" accessibilityLabel={accessibilityLabel} style={[styles.container, style]}>
      {items.map((item) => {
        const selected = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            accessibilityRole="tab"
            accessibilityLabel={item.label}
            accessibilityState={{ selected, disabled: Boolean(item.disabled) }}
            disabled={item.disabled}
            onPress={() => onChange(item.key)}
            style={({ pressed }) => [styles.item, selected && styles.itemSelected, pressed && styles.pressed, item.disabled && styles.disabled]}
          >
            {item.icon ? <View style={styles.icon}>{item.icon}</View> : null}
            <View style={styles.labelRow}>
              <Text numberOfLines={1} style={[styles.label, selected && styles.labelSelected]}>{item.label}</Text>
              {item.badge ? <View style={styles.badge}><Text style={styles.badgeText}>{item.badge}</Text></View> : null}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'stretch', backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border, paddingHorizontal: spacing.xs, paddingTop: spacing.xs, paddingBottom: spacing.xs },
  item: { flex: 1, minWidth: 0, minHeight: 52, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xxs, paddingVertical: spacing.xs, borderRadius: radii.md, gap: spacing.xxs },
  itemSelected: { backgroundColor: colors.primarySubtle },
  pressed: { opacity: 0.75 },
  disabled: { opacity: 0.45 },
  icon: { alignItems: 'center', justifyContent: 'center' },
  labelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.xxs, maxWidth: '100%' },
  label: { color: colors.textMuted, fontSize: 11, lineHeight: 15, fontWeight: typography.fontWeight.medium },
  labelSelected: { color: colors.primary, fontWeight: typography.fontWeight.bold },
  badge: { minWidth: 15, height: 15, paddingHorizontal: 3, borderRadius: radii.full, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.error },
  badgeText: { color: colors.white, fontSize: 9, lineHeight: 12, fontWeight: typography.fontWeight.bold },
});
