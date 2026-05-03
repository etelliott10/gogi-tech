import { Badge as RadixBadge } from '@radix-ui/themes';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <RadixBadge variant="soft" color="crimson" radius="full" className={className}>
      {children}
    </RadixBadge>
  );
}
