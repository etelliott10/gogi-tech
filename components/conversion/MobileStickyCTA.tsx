import { Button } from '@/components/ui/Button';

export function MobileStickyCTA() {
  return (
    <div
      className="mobile-only"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'rgba(28,28,33,0.95)',
        padding: '0.75rem',
        backdropFilter: 'blur(8px)'
      }}
    >
      <Button href="/book" size="lg" style={{ width: '100%', justifyContent: 'center' }}>
        Book Free Call
      </Button>
    </div>
  );
}
