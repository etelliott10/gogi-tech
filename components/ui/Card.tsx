import { Card as RadixCard } from '@radix-ui/themes';

interface CardProps {
  variant?: 'default' | 'elevated' | 'glow';
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantMap = {
  default: 'surface',
  elevated: 'classic',
  glow: 'surface'
} as const;

export function Card({ variant = 'default', className, children, style }: CardProps) {
  return (
    <RadixCard
      variant={variantMap[variant]}
      className={variant === 'glow' ? `glow-border${className ? ` ${className}` : ''}` : className}
      style={style}
    >
      {children}
    </RadixCard>
  );
}
