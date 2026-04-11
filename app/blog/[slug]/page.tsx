import { notFound } from 'next/navigation';
import Link from 'next/link';

const posts = {
  'ai-agent-readiness-checklist': {
    title: 'AI Agent Readiness Checklist for Operations Teams',
    content:
      'High-performing AI deployments begin with process clarity. Start by documenting a single workflow with clear ownership, success metrics, and escalation paths.'
  },
  'automation-roi-playbook': {
    title: 'Automation ROI Playbook: Where to Start First',
    content:
      'Target high-frequency, low-judgment tasks first. Implement instrumentation early, and iterate based on throughput and error reduction metrics.'
  }
} as const;

interface BlogPostPageProps {
  params: { slug: keyof typeof posts };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="pb-20 pt-28">
      <article className="section-container max-w-3xl">
        <p className="mono-label">{'// RESOURCE'}</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">{post.title}</h1>
        <p className="mt-4 text-text-muted">{post.content}</p>
        <Link href="/blog" className="mt-8 inline-block text-sm font-semibold text-primary-light">
          Back to blog
        </Link>
      </article>
    </main>
  );
}
