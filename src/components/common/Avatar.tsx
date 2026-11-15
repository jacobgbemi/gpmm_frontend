import { Image, StyleSheet, Text, View, type ImageSourcePropType, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, typography } from '@/theme';

export interface AvatarProps {
  name: string;
  source?: ImageSourcePropType;
  size?: number;
  backgroundColor?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return parts.slice(0, 2).map((part) => Array.from(part)[0]?.toUpperCase() ?? '').join('');
}

export function Avatar({ name, source, size = 44, backgroundColor = colors.primarySubtle, accessibilityLabel, style }: AvatarProps) {
  const initials = getInitials(name);
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? `${name} avatar`}
      style={[styles.container, { width: size, height: size, borderRadius: Math.min(size / 2, radii.full), backgroundColor }, style]}
    >
      {source ? (
        <Image source={source} style={styles.image} resizeMode="cover" />
      ) : (
        <Text style={[styles.initials, { fontSize: Math.max(12, size * 0.32) }]}>{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  initials: { color: colors.primary, fontWeight: typography.fontWeight.bold },
});
