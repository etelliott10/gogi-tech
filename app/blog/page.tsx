import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';

const posts = [
  { slug: 'ai-agent-readiness-checklist', title: 'AI Agent Readiness Checklist for Operations Teams', excerpt: 'A practical framework to validate process, data, and ownership before deployment.' },
  { slug: 'automation-roi-playbook', title: 'Automation ROI Playbook: Where to Start First', excerpt: 'How to prioritize workflows for highest ROI in the first 90 days.' }
];

export default function BlogPage() {
  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container" style={{ maxWidth: '56rem' }}>
        <Heading as="h1" size="9" className="font-display">Blog</Heading>
        <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)' }}>
          Resources on AI implementation, automation strategy, and conversion engineering.
        </Text>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <article key={post.slug} style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1.5rem' }}>
              <Heading as="h2" size="6" className="font-display">{post.title}</Heading>
              <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{post.excerpt}</Text>
              <Link href={`/blog/${post.slug}`}>
                <Text size="2" weight="bold" mt="3" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
                  Read Post →
                </Text>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
