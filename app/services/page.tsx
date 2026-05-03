import Link from 'next/link';
import { Grid, Heading, Text } from '@radix-ui/themes';
import { services } from '@/lib/content';
import { Card } from '@/components/ui/Card';

export default function ServicesPage() {
  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container">
        <Heading as="h1" size="9" className="font-display">Services</Heading>
        <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)', maxWidth: '40rem' }}>
          Choose the capability your team needs, or book a consult and we can scope the right mix.
        </Text>

        <Grid columns={{ initial: '1', sm: '2' }} gap="4" mt="7">
          {services.map((service) => (
            <Card key={service.slug} style={{ height: '100%', padding: '1.5rem' }}>
              <Heading as="h2" size="6" className="font-display">{service.title}</Heading>
              <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{service.shortDescription}</Text>
              <Link href={`/services/${service.slug}`}>
                <Text size="2" weight="bold" mt="4" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
                  View Service →
                </Text>
              </Link>
            </Card>
          ))}
        </Grid>
      </section>
    </main>
  );
}
