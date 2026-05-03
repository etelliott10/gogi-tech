'use client';

import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Grid, Text } from '@radix-ui/themes';
import { Button } from '@/components/ui/Button';

interface Slot {
  start: string;
  end: string;
}

interface CalendarPickerProps {
  value: string | null;
  onChange: (isoDate: string) => void;
  timezone: string;
}

export function CalendarPicker({ value, onChange, timezone }: CalendarPickerProps) {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSlots() {
      setLoading(true);
      const query = new URLSearchParams({ date: selectedDay.toISOString(), timezone });
      const response = await fetch(`/api/bookings/availability?${query.toString()}`);
      const data = (await response.json()) as { slots: Slot[] };
      setSlots(data.slots ?? []);
      setLoading(false);
    }
    void fetchSlots();
  }, [selectedDay, timezone]);

  const selectedDayLabel = useMemo(() => format(selectedDay, 'EEEE, MMM d'), [selectedDay]);

  return (
    <Grid columns={{ initial: '1', sm: '1.2fr 1fr' }} gap="6">
      <div style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1rem' }}>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={(day) => day && setSelectedDay(day)}
          disabled={{ before: new Date() }}
          style={{ color: 'var(--color-text-primary)' }}
        />
      </div>

      <div style={{ borderRadius: '1rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)', padding: '1rem' }}>
        <Text size="2" weight="medium">Available times</Text>
        <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>{selectedDayLabel} ({timezone})</Text>

        <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxHeight: '16rem', overflowY: 'auto', paddingRight: '0.25rem' }}>
          {loading ? <Text size="2" style={{ gridColumn: 'span 2', color: 'var(--color-text-muted)' }}>Loading...</Text> : null}
          {!loading && slots.length === 0 ? <Text size="2" style={{ gridColumn: 'span 2', color: 'var(--color-text-muted)' }}>No slots found.</Text> : null}
          {slots.map((slot) => (
            <Button
              key={slot.start}
              type="button"
              onClick={() => onChange(slot.start)}
              variant={value === slot.start ? 'primary' : 'secondary'}
              size="sm"
            >
              {format(new Date(slot.start), 'h:mm a')}
            </Button>
          ))}
        </div>
      </div>
    </Grid>
  );
}
