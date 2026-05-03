import Link from 'next/link';
import { ArrowRight, Bot, Cog, Cpu, MonitorSmartphone } from 'lucide-react';
import { Grid, Heading, Text, Flex } from '@radix-ui/themes';
import { Card } from '@/components/ui/Card';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

const services = [
  { icon: Bot, title: 'AI Agents', description: 'Custom intelligent agents that automate decision-making.', href: '/services/ai-agents' },
  { icon: Cog, title: 'Automation', description: 'End-to-end workflow automation across your entire stack.', href: '/services/automation' },
  { icon: Cpu, title: 'Robotics', description: 'Physical automation integration for modern operations.', href: '/services/robotics' },
  { icon: MonitorSmartphone, title: 'Web Development', description: 'High-performance websites engineered to convert.', href: '/services/web-development' }
];

export function ServicesGrid() {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <FadeInOnScroll>
          <Heading as="h2" size="8" className="font-display">What We Build For You</Heading>
        </FadeInOnScroll>

        <Grid columns={{ initial: '1', sm: '2' }} gap="5" mt="6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInOnScroll key={service.title} delay={index * 0.1}>
                <Card variant="default" style={{ height: '100%', padding: '1.5rem', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  className="service-card">
                  <Icon size={32} style={{ color: 'var(--color-primary-light)' }} />
                  <Heading as="h3" size="6" className="font-display" mt="4">{service.title}</Heading>
                  <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{service.description}</Text>
                  <Link href={service.href}>
                    <Flex align="center" gap="1" mt="4">
                      <Text size="2" weight="medium" style={{ color: 'var(--color-primary-light)' }}>Learn More</Text>
                      <ArrowRight size={14} style={{ color: 'var(--color-primary-light)' }} />
                    </Flex>
                  </Link>
                </Card>
              </FadeInOnScroll>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}
