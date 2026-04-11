import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="section-container max-w-4xl">
        <p className="mono-label">{'// ABOUT GOGI TECH'}</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Engineering practical AI systems for measurable business outcomes</h1>
        <p className="mt-5 text-text-muted">
          Gogi Tech partners with growth-focused teams to implement AI agents, automation, robotics integration, and
          conversion-focused web infrastructure. We prioritize outcomes, not experiments.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-bg-card p-6">
          <h2 className="font-display text-2xl font-bold">Our Mission</h2>
          <p className="mt-2 text-text-muted">Help teams deploy reliable AI and automation systems that create durable competitive advantage.</p>
        </div>
        <Button href="/book" className="mt-8">
          Book a Free Strategy Call
        </Button>
      </section>
    </main>
  );
}
