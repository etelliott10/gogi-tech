'use client';

import { Dialog, IconButton } from '@radix-ui/themes';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Modal({ open, onOpenChange, title, description, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content style={{ position: 'relative' }}>
        <Dialog.Title>{title}</Dialog.Title>
        {description ? <Dialog.Description size="2">{description}</Dialog.Description> : null}

        <Dialog.Close style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <IconButton variant="ghost" color="gray" aria-label="Close">
            <X size={16} />
          </IconButton>
        </Dialog.Close>

        <div style={{ marginTop: '1rem' }}>{children}</div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
