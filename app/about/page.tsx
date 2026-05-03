import { Heading, Text } from '@radix-ui/themes';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container" style={{ maxWidth: '56rem' }}>
        <p className="mono-label">{'// ABOUT GOGI TECH'}</p>
        <Heading as="h1" size="9" className="font-display" mt="3">
          Engineering practical AI systems for measurable business outcomes
        </Heading>
        <Text as="p" size="3" mt="5" style={{ color: 'var(--color-text-muted)' }}>
          Gogi Tech partners with growth-focused teams to implement AI agents, automation, robotics
          integration, and conversion-focused web infrastructure. We prioritize outcomes, not experiments.
        </Text>
        <div style={{ marginTop: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.5rem' }}>
          <Heading as="h2" size="6" className="font-display">Our Mission</Heading>
          <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>
            Help teams deploy reliable AI and automation systems that create durable competitive advantage.
          </Text>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Button href="/book">Book a Free Strategy Call</Button>
        </div>
      </section>
    </main>
  );
}
