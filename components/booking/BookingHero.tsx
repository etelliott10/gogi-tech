import { Flex, Heading, Text } from '@radix-ui/themes';
import { AvatarGroup } from '@/components/booking/BookingTeamAvatars';

export function BookingHero() {
  return (
    <section style={{ paddingTop: '7rem' }}>
      <div className="section-container">
        <p className="mono-label">{'// FREE STRATEGY SESSION'}</p>
        <Heading as="h1" size="9" className="font-display" mt="3">
          Book Your Free Strategy Call
        </Heading>
        <Text as="p" size="3" mt="4" style={{ color: 'var(--color-text-muted)', maxWidth: '40rem' }}>
          30 minutes. No pitch. Just a real plan for your business.
        </Text>
        <Flex align="center" gap="3" mt="5">
          <AvatarGroup />
          <Text size="2" style={{ color: 'var(--color-text-muted)' }}>Real humans, real results.</Text>
        </Flex>
      </div>
    </section>
  );
}
