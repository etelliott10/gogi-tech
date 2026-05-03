import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { formatDate, formatTime } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface BookingConfirmationProps {
  serviceType: string;
  scheduledAt: Date;
  timezone: string;
  assignedTeamMember?: string | null;
}

export function BookingConfirmation({ serviceType, scheduledAt, timezone, assignedTeamMember }: BookingConfirmationProps) {
  return (
    <section style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <div className="section-container" style={{ maxWidth: '48rem' }}>
        <Card variant="elevated" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
          <Flex justify="center">
            <CheckCircle2 size={56} style={{ color: 'var(--green-9)' }} />
          </Flex>

          <div>
            <Heading as="h1" size="8" className="font-display">You&apos;re booked!</Heading>
            <Text as="p" size="3" mt="2" style={{ color: 'var(--color-text-muted)' }}>
              Your strategy session has been confirmed.
            </Text>
          </div>

          <Grid
            columns={{ initial: '1', xs: '2' }}
            gap="3"
            style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.25rem', textAlign: 'left' }}
          >
            {[
              { label: 'Date', value: formatDate(scheduledAt) },
              { label: 'Time', value: `${formatTime(scheduledAt)} (${timezone})` },
              { label: 'Service', value: serviceType },
              { label: 'With', value: assignedTeamMember ?? 'Gogi Tech Strategy Team' }
            ].map(({ label, value }) => (
              <Text key={label} size="2">
                <span style={{ color: 'var(--color-text-muted)' }}>{label}:</span> {value}
              </Text>
            ))}
          </Grid>

          <div style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.25rem', textAlign: 'left' }}>
            <Text size="2" weight="bold">What to prepare</Text>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {['A brief overview of your current workflow.', 'Existing tools and technical stack.', 'Your goals for the next 3-6 months.'].map((item) => (
                <li key={item}><Text size="2" style={{ color: 'var(--color-text-muted)' }}>{item}</Text></li>
              ))}
            </ul>
          </div>

          <Flex justify="center" gap="3" wrap="wrap">
            <Button href="https://calendar.google.com" variant="secondary">Google Calendar</Button>
            <Button href="https://www.icloud.com/calendar" variant="secondary">Apple Calendar</Button>
            <Button href="https://outlook.office.com/calendar" variant="secondary">Outlook</Button>
          </Flex>

          <Link href="/case-studies">
            <Text size="2" weight="bold" style={{ color: 'var(--color-primary-light)' }}>
              While you wait, read our case studies →
            </Text>
          </Link>
        </Card>
      </div>
    </section>
  );
}
