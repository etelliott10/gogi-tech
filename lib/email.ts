import { Resend } from 'resend';
import { formatDate, formatTime } from '@/lib/utils';
import type { BookingInput } from '@/lib/validations';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendBookingEmails(payload: BookingInput) {
  if (!resend || !process.env.EMAIL_FROM) {
    return;
  }

  const scheduled = new Date(payload.scheduledAt);

  const clientBody = `Hi ${payload.firstName},\n\nYour strategy call is confirmed:\n\n${formatDate(scheduled)}\n${formatTime(scheduled)} (${payload.timezone})\nTopic: ${payload.serviceType}\n\nWhat to prepare:\n- A brief overview of your current workflow/challenge\n- Any tech stack details (tools, platforms you use)\n- Your goals for the next 6 months\n\nSee you soon,\nThe Gogi Tech Team`;

  const internalBody = `Service: ${payload.serviceType}\nDate/Time: ${payload.scheduledAt} (${payload.timezone})\nBudget: ${payload.budget ?? 'Not provided'}\n\nProject Description:\n${payload.projectDescription}\n\nContact: ${payload.email}${payload.phone ? ` | ${payload.phone}` : ''}`;

  await Promise.all([
    resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: payload.email,
      subject: 'Your Gogi Tech call is confirmed',
      text: clientBody
    }),
    resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: `New Booking - ${payload.firstName} ${payload.lastName} @ ${payload.company}`,
      text: internalBody
    })
  ]);
}
