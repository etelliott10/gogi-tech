import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

const steps = [
  {
    number: '01',
    title: 'Book a Free Call',
    description: 'Tell us your goals, bottlenecks, and where your team needs leverage.'
  },
  {
    number: '02',
    title: 'We Design Your Solution',
    description: 'You receive a custom roadmap with architecture, timeline, and expected ROI.'
  },
  {
    number: '03',
    title: 'We Build and Launch',
    description: 'We implement, test, and support your system to production readiness.'
  }
];

export function HowItWorks() {
  return (
    <section className="grid-bg border-y border-border py-20">
      <div className="section-container">
        <FadeInOnScroll>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How It Works</h2>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeInOnScroll key={step.number} delay={index * 0.12}>
              <div className="relative rounded-2xl border border-border bg-bg-card p-6">
                {index < steps.length - 1 ? (
                  <span className="absolute right-0 top-10 hidden h-[2px] w-8 translate-x-1/2 bg-gradient-to-r from-primary/60 to-transparent md:block" />
                ) : null}
                <p className="font-display text-4xl font-bold text-primary-light">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{step.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
