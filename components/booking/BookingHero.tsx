import { AvatarGroup } from '@/components/booking/BookingTeamAvatars';

export function BookingHero() {
  return (
    <section className="pt-28">
      <div className="section-container">
        <p className="mono-label">{'// FREE STRATEGY SESSION'}</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Book Your Free Strategy Call</h1>
        <p className="mt-4 max-w-2xl text-text-muted">30 minutes. No pitch. Just a real plan for your business.</p>
        <div className="mt-5 flex items-center gap-3">
          <AvatarGroup />
          <p className="text-sm text-text-muted">Real humans, real results.</p>
        </div>
      </div>
    </section>
  );
}
