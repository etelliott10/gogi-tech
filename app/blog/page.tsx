import Link from 'next/link';

const posts = [
  {
    slug: 'ai-agent-readiness-checklist',
    title: 'AI Agent Readiness Checklist for Operations Teams',
    excerpt: 'A practical framework to validate process, data, and ownership before deployment.'
  },
  {
    slug: 'automation-roi-playbook',
    title: 'Automation ROI Playbook: Where to Start First',
    excerpt: 'How to prioritize workflows for highest ROI in the first 90 days.'
  }
];

export default function BlogPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="section-container max-w-4xl">
        <h1 className="font-display text-4xl font-extrabold">Blog</h1>
        <p className="mt-3 text-text-muted">Resources on AI implementation, automation strategy, and conversion engineering.</p>

        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-border bg-bg-card p-6">
              <h2 className="font-display text-2xl font-bold">{post.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-primary-light">
                Read Post →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
