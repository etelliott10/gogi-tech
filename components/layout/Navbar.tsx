'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  transparent?: boolean;
}

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' }
];

export function Navbar({ transparent = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-40 transition-all duration-300',
          isScrolled || !transparent ? 'border-b border-border/70 bg-bg-elevated/90 backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <div className="section-container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="font-display text-xl font-extrabold tracking-tight">GOGI TECH</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-text-muted transition hover:text-text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/book" size="md">
              Book a Call
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg border border-border p-2 text-text-primary md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 bg-bg-dark/95 p-6 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-display text-xl font-extrabold" onClick={() => setOpen(false)}>
              GOGI TECH
            </Link>
            <button
              type="button"
              className="rounded-lg border border-border p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-border bg-bg-card px-4 py-3 text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/book" size="lg" className="mt-2 text-center" onClick={() => setOpen(false)}>
              Book a Call
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
