import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendBookingEmails } from '@/lib/email';
import { bookingSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = bookingSchema.parse(json);

    const booking = await db.booking.create({
      data: {
        serviceType: payload.serviceType,
        scheduledAt: new Date(payload.scheduledAt),
        timezone: payload.timezone,
        status: 'confirmed',
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        company: payload.company,
        role: payload.role,
        projectDescription: payload.projectDescription,
        budget: payload.budget,
        howDidYouHear: payload.howDidYouHear,
        assignedTo: 'Gogi Tech Strategy Team'
      }
    });

    await sendBookingEmails(payload);

    return NextResponse.json({ bookingId: booking.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to create booking',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
