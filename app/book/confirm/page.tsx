import { notFound } from 'next/navigation';
import { BookingConfirmation } from '@/components/booking/BookingConfirmation';
import { db } from '@/lib/db';

interface ConfirmPageProps {
  searchParams: { id?: string };
}

export default async function ConfirmPage({ searchParams }: ConfirmPageProps) {
  if (!searchParams.id) {
    notFound();
  }

  const booking = await db.booking.findUnique({ where: { id: searchParams.id } });

  if (!booking) {
    notFound();
  }

  return (
    <BookingConfirmation
      serviceType={booking.serviceType}
      scheduledAt={booking.scheduledAt}
      timezone={booking.timezone}
      assignedTeamMember={booking.assignedTo}
    />
  );
}
