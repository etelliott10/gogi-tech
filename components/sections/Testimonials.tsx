import { Star } from 'lucide-react';
import { Grid, Heading, Text, Flex } from '@radix-ui/themes';
import { testimonials } from '@/lib/content';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function Testimonials() {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <FadeInOnScroll>
          <Heading as="h2" size="8" className="font-display">What Clients Say</Heading>
        </FadeInOnScroll>

        <Grid columns={{ initial: '1', sm: '3' }} gap="4" mt="6">
          {testimonials.map((item, index) => (
            <FadeInOnScroll key={item.name} delay={index * 0.1}>
              <Card style={{ height: '100%', borderLeft: '4px solid var(--color-primary-light)' }}>
                <Flex gap="1" mb="3" style={{ color: 'var(--color-accent-gold)' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </Flex>
                <Text as="p" size="2" style={{ lineHeight: 1.6 }}>&ldquo;{item.quote}&rdquo;</Text>
                <div style={{ marginTop: '1rem' }}>
                  <Text as="p" size="2" weight="bold">{item.name}</Text>
                  <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>
                    {item.title}, {item.company}
                  </Text>
                </div>
              </Card>
            </FadeInOnScroll>
          ))}
        </Grid>
      </div>
    </section>
  );
}
