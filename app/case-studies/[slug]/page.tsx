import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Grid, Heading, Text, Flex } from '@radix-ui/themes';
import { caseStudies } from '@/lib/content';
import { Button } from '@/components/ui/Button';

interface CaseStudyPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((entry) => ({ slug: entry.slug }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((entry) => entry.slug === params.slug);
  if (!study) notFound();

  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container" style={{ maxWidth: '56rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <header style={{ overflow: 'hidden', borderRadius: '1.5rem', border: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(192,21,42,0.35), rgba(19,19,22,1))', padding: '2rem' }}>
          <Text size="1" style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}>{study.industry}</Text>
          <Heading as="h1" size="9" className="font-display" mt="2">{study.clientName}</Heading>
          <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)', maxWidth: '40rem' }}>{study.solution}</Text>
        </header>

        <section>
          <Heading as="h2" size="6" className="font-display">Challenge</Heading>
          <Text as="p" size="3" mt="2" style={{ color: 'var(--color-text-muted)' }}>{study.challenge}</Text>
        </section>

        <section>
          <Heading as="h2" size="6" className="font-display">Solution</Heading>
          <Text as="p" size="3" mt="2" style={{ color: 'var(--color-text-muted)' }}>{study.solution}</Text>
        </section>

        <section>
          <Heading as="h2" size="6" className="font-display">Results</Heading>
          <Grid columns={{ initial: '1', xs: '3' }} gap="3" mt="4">
            {study.results.map((metric) => (
              <div key={metric.label} style={{ borderRadius: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1rem' }}>
                <Text size="7" weight="bold" className="font-display" style={{ color: 'var(--color-primary-light)' }}>{metric.value}</Text>
                <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>{metric.label}</Text>
              </div>
            ))}
          </Grid>
        </section>

        <section>
          <Heading as="h2" size="6" className="font-display">Tech Used</Heading>
          <Flex gap="2" wrap="wrap" mt="3">
            {study.techUsed.map((tech) => (
              <span key={tech} style={{ borderRadius: '9999px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '0.25rem 0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {tech}
              </span>
            ))}
          </Flex>
        </section>

        {study.testimonial ? (
          <section style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.25rem' }}>
            <Text size="2">&ldquo;{study.testimonial.quote}&rdquo;</Text>
            <Text as="p" size="1" mt="2" style={{ color: 'var(--color-text-muted)' }}>
              {study.testimonial.name}, {study.testimonial.title}
            </Text>
          </section>
        ) : null}

        <Flex gap="3" wrap="wrap" align="center">
          <Button href="/book" size="lg">Get Similar Results</Button>
          <Link href="/case-studies">
            <Text size="2" weight="bold" style={{ color: 'var(--color-primary-light)' }}>Back to all case studies</Text>
          </Link>
        </Flex>
      </section>
    </main>
  );
}
