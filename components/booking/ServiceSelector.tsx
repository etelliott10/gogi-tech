import { Bot, Cog, Cpu, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Service {
  id: 'ai-agents' | 'automation' | 'robotics' | 'web-dev' | 'general';
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 'ai-agents',
    icon: <Bot className="h-5 w-5" />,
    title: 'AI Agents',
    description: 'Custom intelligent agents tailored to your workflows.',
    duration: '30 min call'
  },
  {
    id: 'automation',
    icon: <Cog className="h-5 w-5" />,
    title: 'Automation',
    description: 'Workflow automation and systems orchestration.',
    duration: '30 min call'
  },
  {
    id: 'robotics',
    icon: <Cpu className="h-5 w-5" />,
    title: 'Robotics',
    description: 'Physical automation and integration strategy.',
    duration: '30 min call'
  },
  {
    id: 'web-dev',
    icon: <Globe className="h-5 w-5" />,
    title: 'Web Development',
    description: 'High-converting websites and web applications.',
    duration: '30 min call'
  },
  {
    id: 'general',
    icon: <Sparkles className="h-5 w-5" />,
    title: 'General Consultation',
    description: 'A strategic consult to scope your best next move.',
    duration: '30 min call'
  }
];

interface ServiceSelectorProps {
  value: Service['id'] | null;
  onChange: (serviceId: Service['id']) => void;
}

export function ServiceSelector({ value, onChange }: ServiceSelectorProps) {
  return (
    <div className="grid gap-3">
      {services.map((service) => (
        <button
          key={service.id}
          type="button"
          onClick={() => onChange(service.id)}
          className={cn(
            'rounded-xl border bg-bg-card p-4 text-left transition',
            value === service.id
              ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(192,21,42,0.22)]'
              : 'border-border hover:border-primary/50'
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-primary-light">
              {service.icon}
              <p className="font-semibold text-text-primary">{service.title}</p>
            </div>
            <span
              className={cn(
                'inline-flex h-5 w-5 items-center justify-center rounded-full border text-[11px]',
                value === service.id ? 'border-primary bg-primary text-white' : 'border-border text-transparent'
              )}
            >
              ✓
            </span>
          </div>
          <p className="mt-2 text-sm text-text-muted">{service.description}</p>
          <p className="mt-2 text-xs text-text-muted">{service.duration}</p>
        </button>
      ))}
    </div>
  );
}
