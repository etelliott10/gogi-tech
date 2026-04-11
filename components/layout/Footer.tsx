'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    <footer className="border-t border-border bg-bg-card/70 pb-10 pt-14">
      <div className="section-container grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold">GOGI TECH</p>
          <p className="mt-3 text-sm text-text-muted">Helping teams deploy AI agents, automation, robotics, and high-converting websites.</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Services</p>
          <ul className="space-y-2 text-sm text-text-muted">
            {footerLinks.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Company</p>
          <ul className="space-y-2 text-sm text-text-muted">
            {footerLinks.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Newsletter</p>
          <form className="space-y-3" onSubmit={handleSubscribe}>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="md" className="w-full">
              Subscribe
            </Button>
          </form>
          {message ? <p className="mt-2 text-xs text-text-muted">{message}</p> : null}

          <div className="mt-4 flex items-center gap-3 text-text-muted">
            <Link href="https://www.linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter X">
              <span className="text-sm font-bold">X</span>
            </Link>
            <Link href="https://github.com" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container mt-10 flex flex-col gap-2 border-t border-border pt-4 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Gogi Tech. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
