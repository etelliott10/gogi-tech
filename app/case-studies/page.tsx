import Link from 'next/link';
import { Grid, Heading, Text } from '@radix-ui/themes';
import { caseStudies } from '@/lib/content';

export default function CaseStudiesPage() {
  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container">
        <Heading as="h1" size="9" className="font-display">Case Studies</Heading>
        <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)', maxWidth: '40rem' }}>
          Proof of outcomes from AI, automation, robotics, and conversion-focused web builds.
        </Text>

        <Grid columns={{ initial: '1', sm: '2' }} gap="4" mt="7">
          {caseStudies.map((study) => (
            <article key={study.id} style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.5rem' }}>
              <Text size="1" style={{ color: 'var(--color-text-muted)' }}>{study.industry}</Text>
              <Heading as="h2" size="6" className="font-display" mt="2">{study.clientName}</Heading>
              <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{study.challenge}</Text>
              <Link href={`/case-studies/${study.slug}`}>
                <Text size="2" weight="bold" mt="4" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
                  Read More →
                </Text>
              </Link>
            </article>
          ))}
        </Grid>
      </section>
    </main>
  );
}
