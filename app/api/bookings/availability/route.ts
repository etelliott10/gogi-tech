import { NextResponse } from 'next/server';
import { getMockSlotsForDate } from '@/lib/calendar';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ slots: [] }, { status: 200 });
  }

  const slots = getMockSlotsForDate(new Date(date));
  return NextResponse.json({ slots }, { status: 200 });
}
