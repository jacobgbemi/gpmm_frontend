import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CheckboxField,
  CourseCard,
  DashboardSummaryCard,
  DatePickerField,
  Divider,
  EmptyState,
  ErrorState,
  JobCard,
  LoadingState,
  NotificationCard,
  NavigationBar,
  RadioGroupField,
  ResourceCard,
  SectionHeading,
  SelectField,
  StatusIndicator,
  SuccessState,
  TextAreaField,
  TextField,
  Toast,
} from '@/components';
import { PageHeader, ScreenContainer } from '@/components/layout';
import { colors, spacing, textVariants, typography } from '@/theme';

const swatches = [
  { label: 'Deep green', value: colors.primary },
  { label: 'Gold', value: colors.gold },
  { label: 'Cyan', value: colors.cyan },
  { label: 'Background', value: colors.background },
  { label: 'Surface', value: colors.surface },
  { label: 'Border', value: colors.border },
];

export default function DesignSystemShowcaseScreen() {
  const [fullName, setFullName] = useState('Gbemi Adebayo');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('p6');
  const [startDate, setStartDate] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [delivery, setDelivery] = useState('virtual');
  const [toastVisible, setToastVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <ScreenContainer scrollable padding="lg" contentContainerStyle={styles.page}>
      <PageHeader
        eyebrow="GlintPM mobile"
        title="Design system"
        subtitle="A preview of the shared visual language and reusable UI components."
      />

      <View style={styles.section}>
        <SectionHeading title="Brand palette" subtitle="Centralized colour tokens" />
        <View style={styles.swatchGrid}>
          {swatches.map((swatch) => (
            <View key={swatch.label} style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: swatch.value }]} />
              <Text style={styles.swatchLabel}>{swatch.label}</Text>
              <Text style={styles.swatchValue}>{swatch.value}</Text>
            </View>
          ))}
        </View>
      </View>

      <Divider />

      <View style={styles.section}>
        <SectionHeading title="Typography" subtitle="Page, section, card and supporting text hierarchy" />
        <Card>
          <Text style={styles.displayText}>Professional growth, made practical.</Text>
          <Text style={styles.sectionText}>Section heading</Text>
          <Text style={styles.cardText}>Card title</Text>
          <Text style={styles.bodyText}>Body text supports clear reading on small screens and larger devices.</Text>
          <Text style={styles.captionText}>Supporting text and captions</Text>
        </Card>
      </View>

      <Divider />

      <View style={styles.section}>
        <SectionHeading title="Buttons and badges" subtitle="Variants, loading and disabled states" />
        <View style={styles.buttonRow}>
          <Button onPress={() => setToastVisible(true)}>Primary</Button>
          <Button variant="secondary" onPress={() => setToastVisible(true)}>Secondary</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button variant="outlined" onPress={() => setToastVisible(true)}>Outlined</Button>
          <Button variant="text" onPress={() => setToastVisible(true)}>Text button</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button variant="danger" onPress={() => setToastVisible(true)}>Destructive</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </View>
        <View style={styles.badgeRow}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="gold">Gold</Badge>
          <Badge variant="cyan">Cyan</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Error</Badge>
          <Badge>Neutral</Badge>
        </View>
        <View style={styles.statusRow}>
          <StatusIndicator status="success" label="Completed" />
          <StatusIndicator status="warning" label="In review" />
          <StatusIndicator status="error" label="Action required" />
        </View>
      </View>

      <Card padding="none">
        <SectionHeading title="Navigation component" subtitle="Controlled tab-bar primitive; no routes are registered in this phase." />
        <NavigationBar
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            { key: 'home', label: 'Home' },
            { key: 'learn', label: 'Learn' },
            { key: 'career', label: 'Career' },
            { key: 'resources', label: 'Resources' },
            { key: 'support', label: 'Support' },
          ]}
        />
      </Card>

      <Divider />

      <View style={styles.section}>
        <SectionHeading title="Cards" subtitle="Reusable content and summary cards" />
        <DashboardSummaryCard label="Learning progress" value="68%" helperText="Across enrolled courses" trend="+8%" />
        <CourseCard
          title="Primavera P6 Professional"
          description="Build practical project planning and scheduling capability through guided exercises."
          category="Project controls"
          deliveryMode="Instructor-led online"
          duration="6 weeks"
          status="Example course"
          footer={<Button variant="outlined" onPress={() => setToastVisible(true)}>View details</Button>}
        />
        <JobCard
          title="Project Scheduler"
          employer="Example Energy Company"
          location="Lagos, Nigeria"
          employmentType="Full-time"
          postedAt="Example listing · not a live vacancy"
          footer={<Button variant="text" onPress={() => setToastVisible(true)}>View opportunity</Button>}
        />
        <ResourceCard
          title="Project controls reporting guide"
          description="A sample resource card with an access label."
          resourceType="PDF guide"
          accessLabel="Public"
          accessVariant="success"
        />
        <NotificationCard title="Course update" message="A sample notification preview for component review." timestamp="Preview only · no notification sent" unread />
        <Card>
          <View style={styles.avatarRow}>
            <Avatar name="Gbemi Adebayo" size={48} />
            <View style={styles.avatarText}>
              <Text style={styles.cardText}>Standard card</Text>
              <Text style={styles.bodyText}>Cards use shared spacing, borders and radii.</Text>
            </View>
          </View>
        </Card>
      </View>

      <Divider />

      <View style={styles.section}>
        <SectionHeading title="Form controls" subtitle="Controlled fields with helper and validation states" />
        <TextField label="Full name" value={fullName} onChangeText={setFullName} required placeholder="Enter your name" />
        <TextField label="Email address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholder="name@example.com" helperText="Used for account and course communication." />
        <TextField label="Phone number" value="" onChangeText={() => undefined} keyboardType="phone-pad" placeholder="Enter phone number" />
        <TextAreaField label="Message" value={message} onChangeText={setMessage} placeholder="Write a short message" helperText="A multiline field for longer responses." />
        <SelectField
          label="Training interest"
          value={category}
          onChange={setCategory}
          options={[
            { label: 'Primavera P6', value: 'p6' },
            { label: 'Project Controls', value: 'controls' },
            { label: 'Career Support', value: 'career' },
          ]}
        />
        <DatePickerField label="Preferred start date" value={startDate} onChange={setStartDate} minDate="2026-01-01" />
        <CheckboxField checked={agreed} onChange={setAgreed} label="I agree to the sample form terms." helperText="Checkbox state is controlled by the parent screen." />
        <RadioGroupField
          label="Preferred delivery"
          value={delivery}
          onChange={setDelivery}
          options={[
            { label: 'Virtual', value: 'virtual' },
            { label: 'Self-paced', value: 'self-paced' },
            { label: 'In-person', value: 'in-person' },
          ]}
        />
        <TextField label="Example invalid field" value="" onChangeText={() => undefined} error="Please enter a valid value." placeholder="Validation preview" />
      </View>

      <Divider />

      <View style={styles.section}>
        <SectionHeading title="Feedback and UI states" subtitle="Loading, empty, error, success and toast-equivalent feedback" />
        <Card padding="none"><LoadingState label="Loading example content" /></Card>
        <EmptyState title="No saved resources yet" description="Resources you save will appear here." action={<Button variant="outlined" onPress={() => setToastVisible(true)}>Browse resources</Button>} />
        <ErrorState title="Unable to load example" message="This is a presentation-only error state. No API request was made." onRetry={() => setToastVisible(true)} />
        <SuccessState title="Changes saved" message="This is a static success-state example; it does not submit data." />
        <Toast visible={toastVisible} title="Preview interaction" message="The component responded locally. No backend request was made." onDismiss={() => setToastVisible(false)} tone="success" />
      </View>

      <Text style={styles.footer}>Phase 02 · Design system preview · Sample content only</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  page: { gap: spacing['2xl'], paddingBottom: spacing['5xl'] },
  section: { gap: spacing.md },
  swatchGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  swatchItem: { width: '30%', minWidth: 88, flexGrow: 1, gap: spacing.xxs },
  swatch: { height: 42, borderRadius: 8, borderWidth: 1, borderColor: colors.border },
  swatchLabel: { fontSize: typography.fontSize.xs, color: colors.textSecondary, fontWeight: typography.fontWeight.medium },
  swatchValue: { fontSize: 10, color: colors.textMuted },
  displayText: { ...textVariants.display, color: colors.primary },
  sectionText: { ...textVariants.sectionTitle, color: colors.textPrimary },
  cardText: { ...textVariants.cardTitle, color: colors.textPrimary },
  bodyText: { ...textVariants.body, color: colors.textSecondary },
  captionText: { ...textVariants.caption, color: colors.textMuted },
  buttonRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs },
  statusRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  avatarRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatarText: { flex: 1, gap: spacing.xxs },
  footer: { color: colors.textMuted, textAlign: 'center', fontSize: typography.fontSize.xs },
});
