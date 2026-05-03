import { Bot, Cog, Cpu, Globe, Sparkles } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';

export interface Service {
  id: 'ai-agents' | 'automation' | 'robotics' | 'web-dev' | 'general';
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
}

export const services: Service[] = [
  { id: 'ai-agents', icon: <Bot size={20} />, title: 'AI Agents', description: 'Custom intelligent agents tailored to your workflows.', duration: '30 min call' },
  { id: 'automation', icon: <Cog size={20} />, title: 'Automation', description: 'Workflow automation and systems orchestration.', duration: '30 min call' },
  { id: 'robotics', icon: <Cpu size={20} />, title: 'Robotics', description: 'Physical automation and integration strategy.', duration: '30 min call' },
  { id: 'web-dev', icon: <Globe size={20} />, title: 'Web Development', description: 'High-converting websites and web applications.', duration: '30 min call' },
  { id: 'general', icon: <Sparkles size={20} />, title: 'General Consultation', description: 'A strategic consult to scope your best next move.', duration: '30 min call' }
];

interface ServiceSelectorProps {
  value: Service['id'] | null;
  onChange: (serviceId: Service['id']) => void;
}

export function ServiceSelector({ value, onChange }: ServiceSelectorProps) {
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {services.map((service) => {
        const selected = value === service.id;
        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onChange(service.id)}
            style={{
              borderRadius: '0.75rem',
              border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--color-border)'}`,
              backgroundColor: selected ? 'rgba(192,21,42,0.1)' : 'var(--color-bg-card)',
              padding: '1rem',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
              boxShadow: selected ? '0 0 20px rgba(192,21,42,0.22)' : 'none'
            }}
          >
            <Flex align="start" justify="between">
              <Flex align="center" gap="2" style={{ color: 'var(--color-primary-light)' }}>
                {service.icon}
                <Text size="2" weight="bold" style={{ color: 'var(--color-text-primary)' }}>{service.title}</Text>
              </Flex>
              <span style={{
                display: 'inline-flex',
                height: '1.25rem',
                width: '1.25rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                backgroundColor: selected ? 'var(--color-primary)' : 'transparent',
                color: selected ? 'white' : 'transparent',
                fontSize: '0.6875rem'
              }}>✓</span>
            </Flex>
            <Text as="p" size="2" mt="2" style={{ color: 'var(--color-text-muted)' }}>{service.description}</Text>
            <Text as="p" size="1" mt="1" style={{ color: 'var(--color-text-muted)' }}>{service.duration}</Text>
          </button>
        );
      })}
    </div>
  );
}
