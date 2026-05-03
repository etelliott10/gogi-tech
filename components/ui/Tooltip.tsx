import { Tooltip as RadixTooltip } from '@radix-ui/themes';

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return <RadixTooltip content={label}>{children as React.ReactElement}</RadixTooltip>;
}
