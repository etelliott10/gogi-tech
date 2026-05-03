import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';

const posts = {
  'ai-agent-readiness-checklist': {
    title: 'AI Agent Readiness Checklist for Operations Teams',
    content: 'High-performing AI deployments begin with process clarity. Start by documenting a single workflow with clear ownership, success metrics, and escalation paths.'
  },
  'automation-roi-playbook': {
    title: 'Automation ROI Playbook: Where to Start First',
    content: 'Target high-frequency, low-judgment tasks first. Implement instrumentation early, and iterate based on throughput and error reduction metrics.'
  }
} as const;

interface BlogPostPageProps {
  params: { slug: keyof typeof posts };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <article className="section-container" style={{ maxWidth: '48rem' }}>
        <p className="mono-label">{'// RESOURCE'}</p>
        <Heading as="h1" size="9" className="font-display" mt="2">{post.title}</Heading>
        <Text as="p" size="3" mt="4" style={{ color: 'var(--color-text-muted)' }}>{post.content}</Text>
        <Link href="/blog">
          <Text size="2" weight="bold" mt="8" style={{ display: 'inline-block', color: 'var(--color-primary-light)' }}>
            Back to blog
          </Text>
        </Link>
      </article>
    </main>
  );
}
