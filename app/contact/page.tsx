'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || '')
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setMessage(response.ok ? 'Message sent.' : 'Unable to send message right now.');

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <main className="pb-20 pt-28">
      <section className="section-container max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold">Contact</h1>
        <p className="mt-3 text-text-muted">Tell us what you’re building and we’ll get back to you.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <Input label="Name" id="name" name="name" required />
          <Input label="Email" id="email" name="email" type="email" required />
          <Textarea label="Message" id="message" name="message" rows={6} required />
          <Button type="submit" size="lg">
            Send Message
          </Button>
          {message ? <p className="text-sm text-text-muted">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
