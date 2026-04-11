'use client';

import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-border bg-bg-card p-4">
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={(day) => day && setSelectedDay(day)}
          disabled={{ before: new Date() }}
          className="text-text-primary"
        />
      </div>

      <div className="rounded-2xl border border-border bg-bg-card p-4">
        <p className="text-sm font-medium">Available times</p>
        <p className="text-xs text-text-muted">{selectedDayLabel} ({timezone})</p>

        <div className="mt-3 grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-1">
          {loading ? <p className="col-span-2 text-sm text-text-muted">Loading...</p> : null}
          {!loading && slots.length === 0 ? <p className="col-span-2 text-sm text-text-muted">No slots found.</p> : null}

          {slots.map((slot) => {
            const selected = value === slot.start;
            return (
              <Button
                key={slot.start}
                type="button"
                onClick={() => onChange(slot.start)}
                variant={selected ? 'primary' : 'secondary'}
                size="sm"
                className={cn('rounded-xl px-3 py-2 text-xs')}
              >
                {format(new Date(slot.start), 'h:mm a')}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
