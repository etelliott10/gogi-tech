import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Grid, Heading, Text, Flex } from '@radix-ui/themes';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function FeaturedCaseStudy() {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <FadeInOnScroll>
          <Card variant="elevated" style={{ overflow: 'hidden', padding: 0 }}>
            <Grid columns={{ initial: '1', sm: '2' }}>
              <div style={{
                minHeight: '17.5rem',
                background: 'linear-gradient(135deg, rgba(192,21,42,0.3), rgba(192,21,42,0.1), transparent)',
                padding: '2rem'
              }}>
                <p className="mono-label">FEATURED CASE STUDY</p>
                <Heading as="h3" size="7" className="font-display" mt="3" style={{ maxWidth: '20rem' }}>
                  Acme Logistics AI Ops Overhaul
                </Heading>
                <Text as="p" size="2" mt="3" style={{ color: 'var(--color-text-muted)', maxWidth: '28rem' }}>
                  We deployed a decision-support agent system and automated routing workflows across support and operations.
                </Text>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Grid columns="3" gap="3">
                  {[
                    { value: 3, suffix: 'x', label: 'Faster Response Time' },
                    { value: 41, suffix: '%', label: 'Lower Support Cost' },
                    { value: 100, suffix: '%', label: 'Client Retention' }
                  ].map((metric) => (
                    <div key={metric.label}>
                      <Text size="7" weight="bold" className="font-display" style={{ color: 'var(--color-primary-light)' }}>
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </Text>
                      <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>{metric.label}</Text>
                    </div>
                  ))}
                </Grid>

                <Link href="/case-studies/acme-ai-support-agent">
                  <Flex align="center" gap="2">
                    <Text size="2" weight="bold" style={{ color: 'var(--color-primary-light)' }}>
                      Read Full Case Study
                    </Text>
                    <ArrowRight size={16} style={{ color: 'var(--color-primary-light)' }} />
                  </Flex>
                </Link>
              </div>
            </Grid>
          </Card>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
