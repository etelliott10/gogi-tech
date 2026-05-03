'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flex, Text } from '@radix-ui/themes';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

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
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrolled = isScrolled || !transparent;

  return (
    <>
      <header style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        backgroundColor: scrolled ? 'rgba(28,28,33,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : undefined
      }}>
        <Flex className="section-container" align="center" justify="between" style={{ height: '5rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-block',
              height: '0.625rem',
              width: '0.625rem',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)'
            }} />
            <Text weight="bold" size="4" className="font-display" style={{ letterSpacing: '-0.02em' }}>
              GOGI TECH
            </Text>
          </Link>

          <Flex asChild gap="7" align="center" display={{ initial: 'none', sm: 'flex' } as never}>
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text size="2" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                    {link.label}
                  </Text>
                </Link>
              ))}
            </nav>
          </Flex>

          <Flex display={{ initial: 'none', sm: 'flex' } as never}>
            <Button href="/book" size="md">Book a Call</Button>
          </Flex>

          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              border: '1px solid var(--color-border)',
              padding: '0.5rem',
              color: 'var(--color-text-primary)',
              background: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md-hidden-desktop"
          >
            <Menu size={20} />
          </button>
        </Flex>
      </header>

      {open ? (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          backgroundColor: 'rgba(10,10,12,0.97)',
          padding: '1.5rem'
        }}>
          <Flex align="center" justify="between">
            <Link href="/" onClick={() => setOpen(false)}>
              <Text weight="bold" size="4" className="font-display">GOGI TECH</Text>
            </Link>
            <button
              type="button"
              style={{
                borderRadius: '0.5rem',
                border: '1px solid var(--color-border)',
                padding: '0.5rem',
                background: 'none',
                color: 'var(--color-text-primary)',
                cursor: 'pointer'
              }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </Flex>

          <Flex direction="column" gap="3" mt="8" style={{ marginTop: '2.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  borderRadius: '0.75rem',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg-card)',
                  padding: '0.75rem 1rem',
                  fontSize: '1.125rem',
                  fontWeight: 500
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: '0.5rem' }}>
              <Button href="/book" size="lg" onClick={() => setOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                Book a Call
              </Button>
            </div>
          </Flex>
        </div>
      ) : null}
    </>
  );
}
