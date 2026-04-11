const logos = ['ACME', 'NOVA', 'VERTEX', 'PULSEOPS', 'NORTHLINE', 'AERION', 'SYNCRA'];

export function LogoBar() {
  const row = [...logos, ...logos];

  return (
    <section className="border-y border-border bg-bg-elevated/70 py-6">
      <div className="section-container">
        <p className="mb-4 text-center text-sm text-text-muted">Trusted by forward-thinking companies</p>
        <div className="overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-10">
            {row.map((logo, index) => (
              <span key={`${logo}-${index}`} className="text-sm font-medium tracking-[0.22em] text-text-muted transition hover:text-text-primary">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
