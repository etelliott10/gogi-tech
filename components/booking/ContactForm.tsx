'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { bookingSchema } from '@/lib/validations';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  role: string;
  projectDescription: string;
  budget?: string;
  howDidYouHear?: string;
};

interface ContactFormProps {
  serviceType: 'ai-agents' | 'automation' | 'robotics' | 'web-dev' | 'general';
  scheduledAt: string;
  timezone: string;
}

export function ContactForm({ serviceType, scheduledAt, timezone }: ContactFormProps) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(
      bookingSchema.pick({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        company: true,
        role: true,
        projectDescription: true,
        budget: true,
        howDidYouHear: true
      })
    ),
    defaultValues: {
      budget: 'Not Sure'
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);

    const response = await fetch('/api/bookings/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        serviceType,
        scheduledAt,
        timezone
      })
    });

    if (!response.ok) {
      const payload = (await response.json()) as { error?: string };
      setServerError(payload.error ?? 'Could not complete booking.');
      return;
    }

    const payload = (await response.json()) as { bookingId: string };
    router.push(`/book/confirm?id=${payload.bookingId}`);
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="firstName" label="First Name" {...register('firstName')} error={errors.firstName?.message} />
        <Input id="lastName" label="Last Name" {...register('lastName')} error={errors.lastName?.message} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="email" label="Email" type="email" {...register('email')} error={errors.email?.message} />
        <Input id="phone" label="Phone (optional)" {...register('phone')} error={errors.phone?.message} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="company" label="Company" {...register('company')} error={errors.company?.message} />
        <Input id="role" label="Role" {...register('role')} error={errors.role?.message} />
      </div>

      <Textarea
        id="projectDescription"
        label="Project Description"
        rows={5}
        placeholder="Tell us your current process, challenges, and target outcomes."
        {...register('projectDescription')}
        error={errors.projectDescription?.message}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          id="budget"
          label="Budget"
          {...register('budget')}
          options={[
            { label: '$5K-$15K', value: '$5K-$15K' },
            { label: '$15K-$50K', value: '$15K-$50K' },
            { label: '$50K+', value: '$50K+' },
            { label: 'Not Sure', value: 'Not Sure' }
          ]}
          error={errors.budget?.message}
        />

        <Input id="howDidYouHear" label="How did you hear about us?" {...register('howDidYouHear')} />
      </div>

      {serverError ? <p className="text-sm text-red-400">{serverError}</p> : null}

      <Button type="submit" size="xl" className="w-full justify-center" loading={isSubmitting}>
        Confirm My Booking
      </Button>
    </form>
  );
}
