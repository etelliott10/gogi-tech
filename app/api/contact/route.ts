import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contactSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const payload = contactSchema.parse(await request.json());

    const contact = await db.contactSubmission.create({
      data: {
        name: payload.name,
        email: payload.email,
        message: payload.message
      }
    });

    return NextResponse.json({ id: contact.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to submit contact form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
