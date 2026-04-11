'use client';

import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    function onMouseOut(event: MouseEvent) {
      if (triggered) {
        return;
      }

      if (event.clientY <= 0) {
        setOpen(true);
        setTriggered(true);
      }
    }

    window.addEventListener('mouseout', onMouseOut);
    return () => window.removeEventListener('mouseout', onMouseOut);
  }, [triggered]);

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      title="Before You Go"
      description="Grab a free AI readiness audit and a practical next-step plan."
    >
      <div className="space-y-4">
        <p className="text-sm text-text-muted">
          Get a concise audit of your current workflows, automation opportunities, and a 30-day implementation roadmap.
        </p>
        <Button href="/book" size="lg" className="w-full justify-center">
          Claim My Free Audit
        </Button>
      </div>
    </Modal>
  );
}
