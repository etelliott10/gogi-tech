import Link from 'next/link';
import { ArrowRight, Bot, Cog, Cpu, MonitorSmartphone } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

const services = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Custom intelligent agents that automate decision-making.',
    href: '/services/ai-agents'
  },
  {
    icon: Cog,
    title: 'Automation',
    description: 'End-to-end workflow automation across your entire stack.',
    href: '/services/automation'
  },
  {
    icon: Cpu,
    title: 'Robotics',
    description: 'Physical automation integration for modern operations.',
    href: '/services/robotics'
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    description: 'High-performance websites engineered to convert.',
    href: '/services/web-development'
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeInOnScroll>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">What We Build For You</h2>
        </FadeInOnScroll>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInOnScroll key={service.title} delay={index * 0.1}>
                <Card
                  variant="default"
                  className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(255,77,102,0.18)]"
                >
                  <Icon className="h-8 w-8 text-primary-light" />
                  <h3 className="mt-4 font-display text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{service.description}</p>
                  <Link href={service.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-light">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
