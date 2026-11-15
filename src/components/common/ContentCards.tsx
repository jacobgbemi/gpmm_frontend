import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { Badge, type BadgeVariant } from './Badge';
import { Card } from './Card';
import { Avatar } from './Avatar';
import { colors, spacing, textVariants, typography } from '@/theme';

interface BaseContentCardProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export interface CourseCardProps extends BaseContentCardProps {
  title: string;
  description: string;
  category?: string;
  deliveryMode?: string;
  duration?: string;
  status?: string;
  statusVariant?: BadgeVariant;
  footer?: ReactNode;
}

export function CourseCard({ title, description, category, deliveryMode, duration, status, statusVariant = 'primary', footer, ...cardProps }: CourseCardProps) {
  return (
    <Card {...cardProps}>
      <View style={styles.rowBetween}>
        {category ? <Badge variant="primary">{category}</Badge> : <View />}
        {status ? <Badge variant={statusVariant}>{status}</Badge> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {(deliveryMode || duration) ? (
        <View style={styles.metadataRow}>
          {deliveryMode ? <Text style={styles.metadata}>{deliveryMode}</Text> : null}
          {duration ? <Text style={styles.metadata}>{duration}</Text> : null}
        </View>
      ) : null}
      {footer ? <View style={styles.footer}>{footer}</View> : null}
    </Card>
  );
}

export interface JobCardProps extends BaseContentCardProps {
  title: string;
  employer: string;
  location?: string;
  employmentType?: string;
  postedAt?: string;
  logo?: ReactNode;
  footer?: ReactNode;
}

export function JobCard({ title, employer, location, employmentType, postedAt, logo, footer, ...cardProps }: JobCardProps) {
  return (
    <Card {...cardProps}>
      <View style={styles.headerRow}>
        {logo ?? <Avatar name={employer} size={44} />}
        <View style={styles.flexOne}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{employer}</Text>
        </View>
      </View>
      <View style={styles.metadataRow}>
        {location ? <Text style={styles.metadata}>{location}</Text> : null}
        {employmentType ? <Badge variant="neutral">{employmentType}</Badge> : null}
      </View>
      {postedAt ? <Text style={styles.caption}>{postedAt}</Text> : null}
      {footer ? <View style={styles.footer}>{footer}</View> : null}
    </Card>
  );
}

export interface ResourceCardProps extends BaseContentCardProps {
  title: string;
  description?: string;
  resourceType?: string;
  accessLabel?: string;
  accessVariant?: BadgeVariant;
  leading?: ReactNode;
  footer?: ReactNode;
}

export function ResourceCard({ title, description, resourceType, accessLabel, accessVariant = 'neutral', leading, footer, ...cardProps }: ResourceCardProps) {
  return (
    <Card {...cardProps}>
      <View style={styles.headerRow}>
        {leading ? <View style={styles.leading}>{leading}</View> : null}
        <View style={styles.flexOne}>
          <Text style={styles.title}>{title}</Text>
          {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
      </View>
      <View style={styles.metadataRow}>
        {resourceType ? <Text style={styles.metadata}>{resourceType}</Text> : null}
        {accessLabel ? <Badge variant={accessVariant}>{accessLabel}</Badge> : null}
      </View>
      {footer ? <View style={styles.footer}>{footer}</View> : null}
    </Card>
  );
}

export interface NotificationCardProps extends BaseContentCardProps {
  title: string;
  message: string;
  timestamp?: string;
  unread?: boolean;
  leading?: ReactNode;
}

export function NotificationCard({ title, message, timestamp, unread = false, leading, ...cardProps }: NotificationCardProps) {
  return (
    <Card {...cardProps}>
      <View style={styles.headerRow}>
        {leading ? <View style={styles.leading}>{leading}</View> : null}
        <View style={styles.flexOne}>
          <View style={styles.rowBetween}>
            <Text style={styles.title}>{title}</Text>
            {unread ? <View accessible accessibilityLabel="Unread" style={styles.unreadDot} /> : null}
          </View>
          <Text style={styles.description}>{message}</Text>
          {timestamp ? <Text style={styles.caption}>{timestamp}</Text> : null}
        </View>
      </View>
    </Card>
  );
}

export interface DashboardSummaryCardProps extends BaseContentCardProps {
  label: string;
  value: string | number;
  helperText?: string;
  trend?: string;
  trendVariant?: BadgeVariant;
  icon?: ReactNode;
}

export function DashboardSummaryCard({ label, value, helperText, trend, trendVariant = 'success', icon, ...cardProps }: DashboardSummaryCardProps) {
  return (
    <Card {...cardProps}>
      <View style={styles.rowBetween}>
        <Text style={styles.summaryLabel}>{label}</Text>
        {icon}
      </View>
      <Text style={styles.summaryValue}>{value}</Text>
      {(helperText || trend) ? (
        <View style={styles.metadataRow}>
          {helperText ? <Text style={styles.metadata}>{helperText}</Text> : null}
          {trend ? <Badge variant={trendVariant}>{trend}</Badge> : null}
        </View>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { ...textVariants.cardTitle, color: colors.textPrimary, flexShrink: 1 },
  description: { fontSize: typography.fontSize.sm, lineHeight: 21, color: colors.textSecondary },
  caption: { fontSize: typography.fontSize.xs, lineHeight: 18, color: colors.textMuted },
  metadata: { fontSize: typography.fontSize.xs, lineHeight: 18, color: colors.textSecondary },
  summaryLabel: { fontSize: typography.fontSize.sm, color: colors.textSecondary, fontWeight: typography.fontWeight.medium },
  summaryValue: { fontSize: typography.fontSize['3xl'], lineHeight: 36, color: colors.primary, fontWeight: typography.fontWeight.bold },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm },
  headerRow: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md },
  metadataRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: spacing.sm },
  footer: { marginTop: spacing.xs },
  leading: { paddingTop: spacing.xxs },
  flexOne: { flex: 1, minWidth: 0, gap: spacing.xs },
  unreadDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: colors.primary, marginTop: spacing.xs },
});
