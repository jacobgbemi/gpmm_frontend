import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing } from '@/theme';

export interface DividerProps {
  inset?: number;
  spacingY?: keyof typeof spacing;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function Divider({ inset = 0, spacingY = 'none', color = colors.border, style }: DividerProps) {
  return <View accessible={false} style={[styles.line, { marginHorizontal: inset, marginVertical: spacing[spacingY], backgroundColor: color }, style]} />;
}

const styles = StyleSheet.create({ line: { height: StyleSheet.hairlineWidth, alignSelf: 'stretch' } });
