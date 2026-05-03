import { Text } from '@radix-ui/themes';

const logos = ['ACME', 'NOVA', 'VERTEX', 'PULSEOPS', 'NORTHLINE', 'AERION', 'SYNCRA'];

export function LogoBar() {
  const row = [...logos, ...logos];

  return (
    <section style={{
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      backgroundColor: 'rgba(28,28,33,0.7)',
      padding: '1.5rem 0'
    }}>
      <div className="section-container">
        <Text as="p" size="2" mb="4" align="center" style={{ color: 'var(--color-text-muted)' }}>
          Trusted by forward-thinking companies
        </Text>
        <div style={{ overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', minWidth: 'max-content', alignItems: 'center', gap: '2.5rem' }}>
            {row.map((logo, index) => (
              <span key={`${logo}-${index}`} style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.22em', color: 'var(--color-text-muted)' }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
