'use client';

import { useState, type FormEvent } from 'react';
import { Heading, Text } from '@radix-ui/themes';
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
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <main style={{ paddingBottom: '5rem', paddingTop: '7rem' }}>
      <section className="section-container" style={{ maxWidth: '48rem' }}>
        <Heading as="h1" size="9" className="font-display">Contact</Heading>
        <Text as="p" size="3" mt="3" style={{ color: 'var(--color-text-muted)' }}>
          Tell us what you&apos;re building and we&apos;ll get back to you.
        </Text>

        <form style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={onSubmit}>
          <Input label="Name" id="name" name="name" required />
          <Input label="Email" id="email" name="email" type="email" required />
          <Textarea label="Message" id="message" name="message" rows={6} required />
          <Button type="submit" size="lg">Send Message</Button>
          {message ? <Text size="2" style={{ color: 'var(--color-text-muted)' }}>{message}</Text> : null}
        </form>
      </section>
    </main>
  );
}
