import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface CancelRouteParams {
  params: { id: string };
}

export async function PUT(_request: Request, { params }: CancelRouteParams) {
  try {
    const booking = await db.booking.update({
      where: { id: params.id },
      data: { status: 'cancelled' }
    });

    return NextResponse.json({ id: booking.id, status: booking.status }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Unable to cancel booking' }, { status: 400 });
  }
}
