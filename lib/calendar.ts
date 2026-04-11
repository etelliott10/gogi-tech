import { addMinutes, setHours, setMinutes } from 'date-fns';

export function getMockSlotsForDate(date: Date) {
  const startTimes = [9, 10, 11, 13, 14, 15, 16];
  return startTimes.map((hour) => {
    const slotStart = setMinutes(setHours(date, hour), 0);
    const slotEnd = addMinutes(slotStart, 30);
    return {
      start: slotStart.toISOString(),
      end: slotEnd.toISOString()
    };
  });
}
