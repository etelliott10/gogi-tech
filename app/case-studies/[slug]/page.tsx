import { notFound } from 'next/navigation';
import Link from 'next/link';
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

  if (!study) {
    notFound();
  }

  return (
    <main className="pb-20 pt-28">
      <section className="section-container max-w-4xl space-y-10">
        <header className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/35 to-bg-card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">{study.industry}</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold">{study.clientName}</h1>
          <p className="mt-3 max-w-2xl text-text-muted">{study.solution}</p>
        </header>

        <section>
          <h2 className="font-display text-2xl font-bold">Challenge</h2>
          <p className="mt-2 text-text-muted">{study.challenge}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Solution</h2>
          <p className="mt-2 text-text-muted">{study.solution}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Results</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {study.results.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border bg-bg-card p-4">
                <p className="font-display text-2xl font-bold text-primary-light">{metric.value}</p>
                <p className="text-xs text-text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Tech Used</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.techUsed.map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-bg-card px-3 py-1 text-sm text-text-muted">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {study.testimonial ? (
          <section className="rounded-2xl border border-border bg-bg-card p-5">
            <p className="text-sm text-text-primary">“{study.testimonial.quote}”</p>
            <p className="mt-2 text-xs text-text-muted">
              {study.testimonial.name}, {study.testimonial.title}
            </p>
          </section>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button href="/book" size="lg">
            Get Similar Results
          </Button>
          <Link href="/case-studies" className="text-sm font-semibold text-primary-light">
            Back to all case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
