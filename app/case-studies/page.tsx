import Link from 'next/link';
import { caseStudies } from '@/lib/content';

export default function CaseStudiesPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="section-container">
        <h1 className="font-display text-4xl font-extrabold">Case Studies</h1>
        <p className="mt-3 max-w-2xl text-text-muted">Proof of outcomes from AI, automation, robotics, and conversion-focused web builds.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.id} className="rounded-2xl border border-border bg-bg-card p-6">
              <p className="text-xs text-text-muted">{study.industry}</p>
              <h2 className="mt-2 font-display text-2xl font-bold">{study.clientName}</h2>
              <p className="mt-2 text-sm text-text-muted">{study.challenge}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary-light">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
