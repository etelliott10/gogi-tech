'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id} className="rounded-xl border border-border bg-bg-card">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
              {item.title}
              <ChevronDown className="h-4 w-4 text-text-muted transition data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="px-4 pb-4 text-sm text-text-muted">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
