import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function FeaturedCaseStudy() {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeInOnScroll>
          <Card variant="elevated" className="overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
              <div className="min-h-[280px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-8">
                <p className="mono-label">FEATURED CASE STUDY</p>
                <h3 className="mt-3 max-w-sm font-display text-3xl font-bold">Acme Logistics AI Ops Overhaul</h3>
                <p className="mt-3 max-w-md text-sm text-text-muted">
                  We deployed a decision-support agent system and automated routing workflows across support and operations.
                </p>
              </div>

              <div className="space-y-5 p-8">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="font-display text-3xl font-bold text-primary-light">
                      <AnimatedCounter value={3} suffix="x" />
                    </p>
                    <p className="text-xs text-text-muted">Faster Response Time</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-primary-light">
                      <AnimatedCounter value={41} suffix="%" />
                    </p>
                    <p className="text-xs text-text-muted">Lower Support Cost</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-primary-light">
                      <AnimatedCounter value={100} suffix="%" />
                    </p>
                    <p className="text-xs text-text-muted">Client Retention</p>
                  </div>
                </div>

                <Link href="/case-studies/acme-ai-support-agent" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light">
                  Read Full Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
