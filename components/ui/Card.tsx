import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'default' | 'elevated' | 'glow';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  default: 'bg-bg-card border border-border',
  elevated: 'bg-bg-elevated border border-border shadow-xl shadow-black/20',
  glow: 'bg-bg-card glow-border'
};

export function Card({ variant = 'default', className, children }: CardProps) {
  return <div className={cn('rounded-2xl p-6', variantStyles[variant], className)}>{children}</div>;
}
