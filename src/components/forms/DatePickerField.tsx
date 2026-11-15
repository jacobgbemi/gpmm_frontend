import { useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { Button } from '@/components/common/Button';
import { colors, radii, spacing, textVariants, typography } from '@/theme';
import { FieldContainer, FieldHint, FieldLabel } from './FieldParts';
import { formatISODate, getMonthCells, isISODateInRange, parseISODate, toISODate } from './dateUtils';

export interface DatePickerFieldProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  minDate?: string;
  maxDate?: string;
  containerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthFormatter = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });

function sameMonth(left: Date, right: Date) {
  return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
}

export function DatePickerField({ label, value, onChange, placeholder = 'Choose a date', required, helperText, error, disabled = false, minDate, maxDate, containerStyle, accessibilityLabel }: DatePickerFieldProps) {
  const [visible, setVisible] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => parseISODate(value) ?? new Date());
  const cells = useMemo(() => getMonthCells(visibleMonth.getFullYear(), visibleMonth.getMonth()), [visibleMonth]);
  const min = parseISODate(minDate);
  const max = parseISODate(maxDate);

  useEffect(() => {
    if (visible) setVisibleMonth(parseISODate(value) ?? new Date());
  }, [visible, value]);

  const changeMonth = (offset: number) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  };

  const previousMonthDisabled = Boolean(min && sameMonth(visibleMonth, min)) || Boolean(min && new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1) < new Date(min.getFullYear(), min.getMonth(), 1));
  const nextMonthDisabled = Boolean(max && new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1) > new Date(max.getFullYear(), max.getMonth(), 1));
  const today = toISODate(new Date());

  const chooseDay = (day: number) => {
    const candidate = toISODate(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day));
    if (!isISODateInRange(candidate, minDate, maxDate)) return;
    onChange(candidate);
    setVisible(false);
  };

  return (
    <FieldContainer style={containerStyle}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint="Opens a calendar to choose a date"
        accessibilityState={{ disabled, expanded: visible }}
        disabled={disabled}
        onPress={() => setVisible(true)}
        style={[styles.trigger, error && styles.errorBorder, disabled && styles.disabled]}
      >
        <Text style={[styles.triggerText, !value && styles.placeholder]}>{value ? formatISODate(value) : placeholder}</Text>
        <Text accessible={false} style={styles.calendarGlyph}>▦</Text>
      </Pressable>
      <FieldHint error={Boolean(error)}>{error ?? helperText}</FieldHint>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <View style={styles.backdrop}>
          <Pressable accessibilityRole="button" accessibilityLabel="Close calendar" style={StyleSheet.absoluteFill} onPress={() => setVisible(false)} />
          <View accessibilityViewIsModal style={styles.modalCard}>
            <Text accessibilityRole="header" style={styles.modalTitle}>Choose {label.toLowerCase()}</Text>
            <View style={styles.monthHeader}>
              <Pressable accessibilityRole="button" accessibilityLabel="Previous month" disabled={previousMonthDisabled} onPress={() => changeMonth(-1)} style={[styles.monthButton, previousMonthDisabled && styles.disabled]}>
                <Text style={styles.monthArrow}>‹</Text>
              </Pressable>
              <Text style={styles.monthLabel}>{monthFormatter.format(visibleMonth)}</Text>
              <Pressable accessibilityRole="button" accessibilityLabel="Next month" disabled={nextMonthDisabled} onPress={() => changeMonth(1)} style={[styles.monthButton, nextMonthDisabled && styles.disabled]}>
                <Text style={styles.monthArrow}>›</Text>
              </Pressable>
            </View>
            <View style={styles.calendarGrid}>
              {weekdays.map((weekday, index) => (
                <View key={`${weekday}-${index}`} style={styles.dayCell}>
                  <Text style={styles.weekday}>{weekday}</Text>
                </View>
              ))}
              {cells.map((day, index) => {
                if (day === null) return <View key={`blank-${index}`} style={styles.dayCell} />;
                const dateValue = toISODate(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day));
                const selected = dateValue === value;
                const isToday = dateValue === today;
                const unavailable = !isISODateInRange(dateValue, minDate, maxDate);
                return (
                  <View key={dateValue} style={styles.dayCell}>
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day))}
                      accessibilityState={{ selected, disabled: unavailable }}
                      disabled={unavailable}
                      onPress={() => chooseDay(day)}
                      style={[styles.dayButton, selected && styles.daySelected, isToday && !selected && styles.dayToday, unavailable && styles.disabled]}
                    >
                      <Text style={[styles.dayText, selected && styles.daySelectedText, unavailable && styles.dayUnavailableText]}>{day}</Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
            <View style={styles.modalActions}>
              <Button variant="text" onPress={() => setVisible(false)}>Cancel</Button>
              <Button variant="outlined" onPress={() => { onChange(''); setVisible(false); }} disabled={!value}>Clear date</Button>
            </View>
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
  calendarGlyph: { color: colors.primary, fontSize: 18 },
  errorBorder: { borderColor: colors.error },
  disabled: { opacity: 0.45 },
  backdrop: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'center', padding: spacing.md },
  modalCard: { width: '100%', maxWidth: 420, alignSelf: 'center', backgroundColor: colors.surface, borderRadius: radii.xl, padding: spacing.lg, gap: spacing.md },
  modalTitle: { ...textVariants.sectionTitle, color: colors.textPrimary },
  monthHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  monthButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: radii.full, backgroundColor: colors.surfaceMuted },
  monthArrow: { color: colors.primary, fontSize: 28, lineHeight: 30 },
  monthLabel: { color: colors.textPrimary, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.semiBold },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayCell: { width: '14.2857%', minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  weekday: { color: colors.textMuted, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold },
  dayButton: { width: 38, height: 38, borderRadius: radii.full, alignItems: 'center', justifyContent: 'center' },
  daySelected: { backgroundColor: colors.primary },
  dayToday: { borderWidth: 1, borderColor: colors.primary },
  dayText: { color: colors.textPrimary, fontSize: typography.fontSize.sm },
  daySelectedText: { color: colors.white, fontWeight: typography.fontWeight.bold },
  dayUnavailableText: { color: colors.textDisabled },
  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'wrap', gap: spacing.sm },
});
