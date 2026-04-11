import { z } from 'zod';

export const bookingSchema = z.object({
  serviceType: z.enum(['ai-agents', 'automation', 'robotics', 'web-dev', 'general']),
  scheduledAt: z.string().datetime(),
  timezone: z.string().min(1),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().min(2),
  role: z.string().min(2),
  projectDescription: z.string().min(20),
  budget: z.string().optional(),
  howDidYouHear: z.string().optional()
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export const newsletterSchema = z.object({
  email: z.string().email()
});

export type BookingInput = z.infer<typeof bookingSchema>;
