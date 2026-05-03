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
    <AccordionPrimitive.Root type="single" collapsible className="accordion-root">
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id} className="accordion-item">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="accordion-trigger">
              {item.title}
              <ChevronDown size={16} className="accordion-chevron" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="accordion-content">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
