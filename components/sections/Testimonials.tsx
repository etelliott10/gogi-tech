import { Star } from 'lucide-react';
import { testimonials } from '@/lib/content';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeInOnScroll>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">What Clients Say</h2>
        </FadeInOnScroll>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeInOnScroll key={item.name} delay={index * 0.1}>
              <Card className="h-full border-l-4 border-l-primary-light">
                <div className="mb-3 flex items-center gap-1 text-accent-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-text-primary">“{item.quote}”</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-text-muted">
                    {item.title}, {item.company}
                  </p>
                </div>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
