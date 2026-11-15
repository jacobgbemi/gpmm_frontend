import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ScrollViewProps, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { colors, spacing } from '@/theme';

export interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  edges?: Edge[];
  backgroundColor?: string;
  padding?: keyof typeof spacing;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  scrollViewProps?: Omit<ScrollViewProps, 'children' | 'contentContainerStyle' | 'style'>;
}

export function ScreenContainer({
  children,
  scrollable = false,
  edges = ['top', 'right', 'bottom', 'left'],
  backgroundColor = colors.background,
  padding = 'lg',
  contentContainerStyle,
  style,
  scrollViewProps,
}: ScreenContainerProps) {
  return (
    <SafeAreaView edges={edges} style={[styles.safeArea, { backgroundColor }, style]}>
      {scrollable ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          {...scrollViewProps}
          contentContainerStyle={[{ padding: spacing[padding], flexGrow: 1 }, contentContainerStyle]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, { padding: spacing[padding] }, contentContainerStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safeArea: { flex: 1 }, content: { flex: 1 }, });
