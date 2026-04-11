import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface BookingConfirmationProps {
  serviceType: string;
  scheduledAt: Date;
  timezone: string;
  assignedTeamMember?: string | null;
}

export function BookingConfirmation({ serviceType, scheduledAt, timezone, assignedTeamMember }: BookingConfirmationProps) {
  return (
    <section className="pb-20 pt-28">
      <div className="section-container max-w-3xl">
        <Card variant="elevated" className="space-y-6 p-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
          <div>
            <h1 className="font-display text-4xl font-extrabold">You&apos;re booked!</h1>
            <p className="mt-2 text-text-muted">Your strategy session has been confirmed.</p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-border bg-bg-card p-5 text-left text-sm sm:grid-cols-2">
            <p>
              <span className="text-text-muted">Date:</span> {formatDate(scheduledAt)}
            </p>
            <p>
              <span className="text-text-muted">Time:</span> {formatTime(scheduledAt)} ({timezone})
            </p>
            <p>
              <span className="text-text-muted">Service:</span> {serviceType}
            </p>
            <p>
              <span className="text-text-muted">With:</span> {assignedTeamMember ?? 'Gogi Tech Strategy Team'}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-5 text-left">
            <p className="text-sm font-semibold">What to prepare</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
              <li>A brief overview of your current workflow.</li>
              <li>Existing tools and technical stack.</li>
              <li>Your goals for the next 3-6 months.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="https://calendar.google.com" variant="secondary">
              Google Calendar
            </Button>
            <Button href="https://www.icloud.com/calendar" variant="secondary">
              Apple Calendar
            </Button>
            <Button href="https://outlook.office.com/calendar" variant="secondary">
              Outlook
            </Button>
          </div>

          <Link href="/case-studies" className="text-sm font-semibold text-primary-light">
            While you wait, read our case studies →
          </Link>
        </Card>
      </div>
    </section>
  );
}
