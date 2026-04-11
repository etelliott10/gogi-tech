'use client';

import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { BookingSteps } from '@/components/booking/BookingSteps';
import { ServiceSelector, type Service } from '@/components/booking/ServiceSelector';
import { CalendarPicker } from '@/components/booking/CalendarPicker';
import { ContactForm } from '@/components/booking/ContactForm';
import { BookingSidebar } from '@/components/booking/BookingSidebar';
import { Card } from '@/components/ui/Card';

export function BookingFlow() {
  const [service, setService] = useState<Service['id'] | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const timezone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC', []);

  const currentStep: 1 | 2 | 3 = !service ? 1 : !slot ? 2 : 3;

  return (
    <section className="pb-20 pt-8">
      <div className="section-container grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <BookingSteps currentStep={currentStep} />

          <Card className="space-y-5 p-5 sm:p-6">
            {currentStep === 1 ? (
              <>
                <h2 className="font-display text-2xl font-bold">Step 1: Select Service</h2>
                <ServiceSelector value={service} onChange={setService} />
              </>
            ) : null}

            {currentStep === 2 ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-2xl font-bold">Step 2: Pick Time</h2>
                  <button className="text-xs text-primary-light" type="button" onClick={() => setService(null)}>
                    Change Service
                  </button>
                </div>
                <CalendarPicker value={slot} onChange={setSlot} timezone={timezone} />
              </>
            ) : null}

            {currentStep === 3 && service && slot ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-2xl font-bold">Step 3: Your Details</h2>
                  <button className="text-xs text-primary-light" type="button" onClick={() => setSlot(null)}>
                    Change Time
                  </button>
                </div>
                <p className="rounded-xl border border-border bg-bg-elevated p-3 text-sm text-text-muted">
                  Selected slot: {format(new Date(slot), 'EEEE, MMMM d · h:mm a')} ({timezone})
                </p>
                <ContactForm serviceType={service} scheduledAt={slot} timezone={timezone} />
              </>
            ) : null}
          </Card>
        </div>

        <aside className="hidden lg:block">
          <BookingSidebar />
        </aside>
      </div>
    </section>
  );
}
