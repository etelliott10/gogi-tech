import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="section-container max-w-3xl rounded-2xl border border-border bg-bg-card p-8 text-center">
        <h1 className="font-display text-4xl font-extrabold">Thank You</h1>
        <p className="mt-3 text-text-muted">We received your submission and will be in touch shortly.</p>
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-primary-light">
          Return to home
        </Link>
      </section>
    </main>
  );
}
