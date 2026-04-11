import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { services, caseStudies } from '@/lib/content';
import { Accordion } from '@/components/ui/Accordion';
import { BookingBanner } from '@/components/sections/BookingBanner';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((entry) => entry.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.shortDescription
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((entry) => entry.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((entry) => service.caseStudyIds.includes(entry.id));

  return (
    <main className="pt-28">
      <section className="section-container pb-14">
        <p className="mono-label">{'// SERVICE'}</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">{service.title}</h1>
        <p className="mt-4 max-w-3xl text-text-muted">{service.longDescription}</p>
        <Link href="/book" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-white">
          Book a Call
        </Link>
      </section>

      <section className="section-container grid gap-10 border-t border-border py-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">Our Approach</h2>
          <ol className="mt-4 space-y-3 text-sm text-text-muted">
            {service.approach.map((step) => (
              <li key={step} className="rounded-xl border border-border bg-bg-card px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold">Deliverables</h2>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {service.deliverables.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-bg-card px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-container border-t border-border py-12">
        <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-bg-card px-3 py-1 text-sm text-text-muted">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="section-container border-t border-border py-12">
        <h2 className="font-display text-2xl font-bold">Related Case Studies</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedCaseStudies.map((study) => (
            <div key={study.id} className="rounded-2xl border border-border bg-bg-card p-5">
              <p className="text-xs text-text-muted">{study.industry}</p>
              <h3 className="mt-2 text-xl font-semibold">{study.clientName}</h3>
              <p className="mt-2 text-sm text-text-muted">{study.challenge}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-3 inline-block text-sm font-semibold text-primary-light">
                Read Case Study →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container border-t border-border py-12">
        <h2 className="font-display text-2xl font-bold">FAQ</h2>
        <div className="mt-4">
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
