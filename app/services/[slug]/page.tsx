import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Grid, Heading, Text, Flex } from '@radix-ui/themes';
import { services, caseStudies } from '@/lib/content';
import { Accordion } from '@/components/ui/Accordion';
import { BookingBanner } from '@/components/sections/BookingBanner';
import { Button } from '@/components/ui/Button';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((entry) => entry.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.title, description: service.shortDescription };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((entry) => entry.slug === params.slug);
  if (!service) notFound();

  const relatedCaseStudies = caseStudies.filter((entry) => service.caseStudyIds.includes(entry.id));

  return (
    <main style={{ paddingTop: '7rem' }}>
      <section className="section-container" style={{ paddingBottom: '3.5rem' }}>
        <p className="mono-label">{'// SERVICE'}</p>
        <Heading as="h1" size="9" className="font-display" mt="2">{service.title}</Heading>
        <Text as="p" size="3" mt="4" style={{ color: 'var(--color-text-muted)', maxWidth: '48rem' }}>
          {service.longDescription}
        </Text>
        <div style={{ marginTop: '1.5rem' }}>
          <Button href="/book" size="lg">Book a Call</Button>
        </div>
      </section>

      <section className="section-container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Grid columns={{ initial: '1', sm: '2' }} gap="8">
          <div>
            <Heading as="h2" size="6" className="font-display">Our Approach</Heading>
            <Flex direction="column" gap="3" mt="4">
              {service.approach.map((step) => (
                <div key={step} style={{ borderRadius: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '0.75rem 1rem' }}>
                  <Text size="2" style={{ color: 'var(--color-text-muted)' }}>{step}</Text>
                </div>
              ))}
            </Flex>
          </div>
          <div>
            <Heading as="h2" size="6" className="font-display">Deliverables</Heading>
            <Flex direction="column" gap="3" mt="4">
              {service.deliverables.map((item) => (
                <div key={item} style={{ borderRadius: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '0.75rem 1rem' }}>
                  <Text size="2" style={{ color: 'var(--color-text-muted)' }}>{item}</Text>
                </div>
              ))}
            </Flex>
          </div>
        </Grid>
      </section>

      <section className="section-container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Heading as="h2" size="6" className="font-display">Tech Stack</Heading>
        <Flex gap="2" wrap="wrap" mt="4">
          {service.techStack.map((tech) => (
            <span key={tech} style={{ borderRadius: '9999px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '0.25rem 0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              {tech}
            </span>
          ))}
        </Flex>
      </section>

      <section className="section-container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Heading as="h2" size="6" className="font-display">Related Case Studies</Heading>
        <Grid columns={{ initial: '1', sm: '2' }} gap="4" mt="5">
          {relatedCaseStudies.map((study) => (
            <div key={study.id} style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.25rem' }}>
              <Text size="1" style={{ color: 'var(--color-text-muted)' }}>{study.industry}</Text>
              <Heading as="h3" size="5" mt="2">{study.clientName}</Heading>
              <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{study.challenge}</Text>
              <Link href={`/case-studies/${study.slug}`}>
                <Text size="2" weight="bold" mt="3" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
                  Read Case Study →
                </Text>
              </Link>
            </div>
          ))}
        </Grid>
      </section>

      <section className="section-container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Heading as="h2" size="6" className="font-display">FAQ</Heading>
        <div style={{ marginTop: '1rem' }}>
          <Accordion
            items={service.faqs.map((faq) => ({
              id: faq.question.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              title: faq.question,
              content: faq.answer
            }))}
          />
        </div>
      </section>

      <BookingBanner />
    </main>
  );
}
