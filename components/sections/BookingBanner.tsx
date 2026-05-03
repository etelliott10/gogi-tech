import { Flex, Heading, Text } from '@radix-ui/themes';
import { Button } from '@/components/ui/Button';

export function BookingBanner() {
  return (
    <section style={{ paddingTop: '2.5rem', paddingBottom: '6rem' }}>
      <div className="section-container">
        <div style={{
          overflow: 'hidden',
          borderRadius: '1.5rem',
          border: '1px solid rgba(192,21,42,0.4)',
          background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-dark))',
          padding: '2rem 3rem'
        }}>
          <p className="mono-label" style={{ color: 'rgba(255,255,255,0.8)' }}>LIMITED SLOTS THIS WEEK</p>
          <Heading as="h2" size="8" className="font-display" mt="3" style={{ color: 'white', maxWidth: '40rem' }}>
            Ready to automate your future?
          </Heading>
          <Text as="p" size="3" mt="3" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '40rem' }}>
            Book a free 30-minute strategy call with our team.
          </Text>
          <Flex gap="4" mt="6" align="center" wrap="wrap">
            <Button href="/book" size="xl" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
              Book My Free Call
            </Button>
            <Text size="2" weight="medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Only 3 consultation slots left this week.
            </Text>
          </Flex>
        </div>
      </div>
    </section>
  );
}
