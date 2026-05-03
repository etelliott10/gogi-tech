'use client';

import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { Grid, Heading, Text } from '@radix-ui/themes';
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
    <section style={{ paddingBottom: '5rem', paddingTop: '2rem' }}>
      <Grid className="section-container" columns={{ initial: '1', md: '1fr 320px' }} gap="6">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <BookingSteps currentStep={currentStep} />

          <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {currentStep === 1 ? (
              <>
                <Heading as="h2" size="6" className="font-display">Step 1: Select Service</Heading>
                <ServiceSelector value={service} onChange={setService} />
              </>
            ) : null}

            {currentStep === 2 ? (
              <>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <Heading as="h2" size="6" className="font-display">Step 2: Pick Time</Heading>
                  <button type="button" onClick={() => setService(null)} style={{ fontSize: '0.75rem', color: 'var(--color-primary-light)', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Change Service
                  </button>
                </div>
                <CalendarPicker value={slot} onChange={setSlot} timezone={timezone} />
              </>
            ) : null}

            {currentStep === 3 && service && slot ? (
              <>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <Heading as="h2" size="6" className="font-display">Step 3: Your Details</Heading>
                  <button type="button" onClick={() => setSlot(null)} style={{ fontSize: '0.75rem', color: 'var(--color-primary-light)', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Change Time
                  </button>
                </div>
                <Text as="p" size="2" style={{ borderRadius: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-elevated)', padding: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Selected slot: {format(new Date(slot), 'EEEE, MMMM d · h:mm a')} ({timezone})
                </Text>
                <ContactForm serviceType={service} scheduledAt={slot} timezone={timezone} />
              </>
            ) : null}
          </Card>
        </div>

        <aside style={{ display: 'none' }} className="booking-sidebar-desktop">
          <BookingSidebar />
        </aside>
      </Grid>
    </section>
  );
}
