import { Grid, Heading, Text } from '@radix-ui/themes';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

const steps = [
  { number: '01', title: 'Book a Free Call', description: 'Tell us your goals, bottlenecks, and where your team needs leverage.' },
  { number: '02', title: 'We Design Your Solution', description: 'You receive a custom roadmap with architecture, timeline, and expected ROI.' },
  { number: '03', title: 'We Build and Launch', description: 'We implement, test, and support your system to production readiness.' }
];

export function HowItWorks() {
  return (
    <section className="grid-bg" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '5rem 0' }}>
      <div className="section-container">
        <FadeInOnScroll>
          <Heading as="h2" size="8" className="font-display">How It Works</Heading>
        </FadeInOnScroll>

        <Grid columns={{ initial: '1', sm: '3' }} gap="5" mt="7">
          {steps.map((step, index) => (
            <FadeInOnScroll key={step.number} delay={index * 0.12}>
              <div style={{ position: 'relative', borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.5rem' }}>
                {index < steps.length - 1 ? (
                  <span style={{ position: 'absolute', right: 0, top: '2.5rem', display: 'block', height: '2px', width: '2rem', transform: 'translateX(50%)', background: 'linear-gradient(to right, rgba(192,21,42,0.6), transparent)' }} />
                ) : null}
                <Text size="8" weight="bold" className="font-display" style={{ color: 'var(--color-primary-light)' }}>
                  {step.number}
                </Text>
                <Heading as="h3" size="5" className="font-display" mt="3">{step.title}</Heading>
                <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{step.description}</Text>
              </div>
            </FadeInOnScroll>
          ))}
        </Grid>
      </div>
    </section>
  );
}
