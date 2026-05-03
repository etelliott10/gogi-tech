import { ShieldCheck } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';
import { Card } from '@/components/ui/Card';
import { AvatarGroup } from '@/components/booking/BookingTeamAvatars';

export function BookingSidebar() {
  return (
    <Flex direction="column" gap="4">
      <Card variant="elevated" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Text weight="bold" size="2">What happens next</Text>
        <Flex direction="column" gap="2">
          {['We review your form and goals.', 'We arrive with a custom recommendation path.', 'You get a clear implementation plan.'].map((item, i) => (
            <Text key={i} size="2" style={{ color: 'var(--color-text-muted)' }}>{i + 1}. {item}</Text>
          ))}
        </Flex>
      </Card>

      <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Text size="2" style={{ color: 'var(--color-text-muted)' }}>You&apos;ll speak with</Text>
        <Flex align="center" gap="3">
          <AvatarGroup />
          <div>
            <Text size="2">Strategy Team</Text>
            <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>AI + Automation Specialists</Text>
          </div>
        </Flex>
        <Text size="2" style={{ color: 'var(--color-text-muted)' }}>If it&apos;s not a fit, we&apos;ll tell you honestly.</Text>
      </Card>

      <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Flex align="center" gap="2">
          <ShieldCheck size={16} style={{ color: 'var(--color-primary-light)' }} />
          <Text size="2" style={{ color: 'var(--color-text-muted)' }}>SSL secured booking</Text>
        </Flex>
        <Text size="1" style={{ color: 'var(--color-text-muted)' }}>
          Your data is used only to schedule and prepare your strategy call.
        </Text>
      </Card>
    </Flex>
  );
}
