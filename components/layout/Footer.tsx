'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flex, Grid, Text, Separator } from '@radix-ui/themes';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const footerLinks = {
  services: [
    { href: '/services/ai-agents', label: 'AI Agents' },
    { href: '/services/automation', label: 'Automation' },
    { href: '/services/robotics', label: 'Robotics' },
    { href: '/services/web-development', label: 'Web Development' }
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ]
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (response.ok) {
      setMessage('Subscribed.');
      setEmail('');
      return;
    }
    setMessage('Unable to subscribe right now.');
  }

  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      backgroundColor: 'rgba(19,19,22,0.7)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem'
    }}>
      <Grid className="section-container" columns={{ initial: '1', xs: '2', sm: '4' }} gap="8">
        <div>
          <Text weight="bold" size="4" className="font-display">GOGI TECH</Text>
          <Text as="p" size="2" mt="3" style={{ color: 'var(--color-text-muted)' }}>
            Helping teams deploy AI agents, automation, robotics, and high-converting websites.
          </Text>
        </div>

        <div>
          <Text size="2" weight="bold" mb="3" as="p">Services</Text>
          <Flex direction="column" gap="2">
            {footerLinks.services.map((item) => (
              <Link key={item.href} href={item.href}>
                <Text size="2" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                  {item.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </div>

        <div>
          <Text size="2" weight="bold" mb="3" as="p">Company</Text>
          <Flex direction="column" gap="2">
            {footerLinks.company.map((item) => (
              <Link key={item.href} href={item.href}>
                <Text size="2" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                  {item.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </div>

        <div>
          <Text size="2" weight="bold" mb="3" as="p">Newsletter</Text>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} onSubmit={handleSubscribe}>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="md" style={{ width: '100%' }}>Subscribe</Button>
          </form>
          {message ? <Text as="p" size="1" mt="2" style={{ color: 'var(--color-text-muted)' }}>{message}</Text> : null}

          <Flex gap="3" mt="4" align="center" style={{ color: 'var(--color-text-muted)' }}>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></Link>
            <Link href="https://www.twitter.com" aria-label="Twitter X"><Text size="2" weight="bold">X</Text></Link>
            <Link href="https://github.com" aria-label="GitHub"><Github size={16} /></Link>
            <Link href="https://youtube.com" aria-label="YouTube"><Youtube size={16} /></Link>
          </Flex>
        </div>
      </Grid>

      <Separator size="4" mt="8" style={{ backgroundColor: 'var(--color-border)' }} />

      <Flex
        className="section-container"
        mt="4"
        justify="between"
        direction={{ initial: 'column', xs: 'row' }}
        gap="2"
      >
        <Text size="1" style={{ color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Gogi Tech. All rights reserved.
        </Text>
        <Flex gap="4">
          <Link href="#"><Text size="1" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</Text></Link>
          <Link href="#"><Text size="1" style={{ color: 'var(--color-text-muted)' }}>Terms of Service</Text></Link>
        </Flex>
      </Flex>
    </footer>
  );
}
