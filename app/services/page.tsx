import Link from 'next/link';
import { services } from '@/lib/content';
import { Card } from '@/components/ui/Card';

export default function ServicesPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="section-container">
        <h1 className="font-display text-4xl font-extrabold">Services</h1>
        <p className="mt-3 max-w-2xl text-text-muted">Choose the capability your team needs, or book a consult and we can scope the right mix.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="h-full p-6">
              <h2 className="font-display text-2xl font-bold">{service.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary-light">
                View Service →
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
