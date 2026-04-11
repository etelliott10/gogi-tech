import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { newsletterSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const payload = newsletterSchema.parse(await request.json());

    await db.subscriber.upsert({
      where: { email: payload.email },
      create: { email: payload.email, active: true },
      update: { active: true }
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to subscribe',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
