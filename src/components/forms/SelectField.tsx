import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { Button } from '@/components/common/Button';
import { colors, radii, spacing, textVariants, typography } from '@/theme';
import { FieldContainer, FieldHint, FieldLabel } from './FieldParts';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectFieldProps {
  label: string;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  modalTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function SelectField({ label, value, options, onChange, placeholder = 'Select an option', required, helperText, error, disabled = false, modalTitle, containerStyle, accessibilityLabel }: SelectFieldProps) {
  const [visible, setVisible] = useState(false);
  const selected = options.find((option) => option.value === value);

  const choose = (option: SelectOption) => {
    if (option.disabled) return;
    onChange(option.value);
    setVisible(false);
  };

  return (
    <FieldContainer style={containerStyle}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint="Opens the available options"
        accessibilityState={{ disabled, expanded: visible }}
        disabled={disabled}
        onPress={() => setVisible(true)}
        style={[styles.trigger, error && styles.errorBorder, disabled && styles.disabled]}
      >
        <Text numberOfLines={1} style={[styles.triggerText, !selected && styles.placeholder]}>{selected?.label ?? placeholder}</Text>
        <Text accessible={false} style={styles.chevron}>⌄</Text>
      </Pressable>
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <View style={styles.backdrop}>
          <Pressable accessibilityRole="button" accessibilityLabel="Close options" style={StyleSheet.absoluteFill} onPress={() => setVisible(false)} />
          <View accessibilityViewIsModal style={styles.modalCard}>
            <Text accessibilityRole="header" style={styles.modalTitle}>{modalTitle ?? `Select ${label.toLowerCase()}`}</Text>
            <ScrollView keyboardShouldPersistTaps="handled" style={styles.optionsList}>
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={option.value}
                    accessibilityRole="radio"
                    accessibilityState={{ checked: isSelected, disabled: Boolean(option.disabled) }}
                    disabled={option.disabled}
                    onPress={() => choose(option)}
                    style={[styles.option, isSelected && styles.optionSelected, option.disabled && styles.disabled]}
                  >
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>{option.label}</Text>
                    <View style={[styles.radio, isSelected && styles.radioSelected]}>{isSelected ? <View style={styles.radioInner} /> : null}</View>
                  </Pressable>
                );
              })}
            </ScrollView>
            <Button variant="outlined" onPress={() => setVisible(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>
    </FieldContainer>
  );
}

const styles = StyleSheet.create({
  trigger: { minHeight: 48, borderWidth: 1, borderColor: colors.borderStrong, borderRadius: radii.md, backgroundColor: colors.surface, paddingHorizontal: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm },
  triggerText: { flex: 1, color: colors.textPrimary, fontSize: typography.fontSize.md },
  placeholder: { color: colors.textMuted },
  chevron: { color: colors.textSecondary, fontSize: 22, lineHeight: 24 },
  errorBorder: { borderColor: colors.error },
  disabled: { opacity: 0.55 },
  backdrop: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'center', padding: spacing.lg },
  modalCard: { maxHeight: '82%', width: '100%', maxWidth: 480, alignSelf: 'center', backgroundColor: colors.surface, borderRadius: radii.xl, padding: spacing.lg, gap: spacing.md },
  modalTitle: { ...textVariants.sectionTitle, color: colors.textPrimary },
  optionsList: { flexGrow: 0, maxHeight: 360 },
  option: { minHeight: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.sm, borderRadius: radii.md, gap: spacing.md },
  optionSelected: { backgroundColor: colors.primarySubtle },
  optionLabel: { flex: 1, color: colors.textPrimary, fontSize: typography.fontSize.md },
  optionLabelSelected: { color: colors.primary, fontWeight: typography.fontWeight.semiBold },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: colors.primary },
  radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
});
