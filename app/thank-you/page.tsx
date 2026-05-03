import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';

export default function ThankYouPage() {
  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container" style={{ maxWidth: '48rem', borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '2rem', textAlign: 'center' }}>
        <Heading as="h1" size="9" className="font-display">Thank You</Heading>
        <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)' }}>
          We received your submission and will be in touch shortly.
        </Text>
        <Link href="/">
          <Text size="2" weight="bold" mt="6" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
            Return to home
          </Text>
        </Link>
      </section>
    </main>
  );
}
