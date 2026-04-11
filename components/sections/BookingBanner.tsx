import { Button } from '@/components/ui/Button';

export function BookingBanner() {
  return (
    <section className="pb-24 pt-10">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-primary to-primary-dark p-8 md:p-12">
          <p className="mono-label text-white/80">LIMITED SLOTS THIS WEEK</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready to automate your future?
          </h2>
          <p className="mt-3 max-w-2xl text-white/85">Book a free 30-minute strategy call with our team.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button href="/book" size="xl" className="bg-white text-primary hover:bg-white/90">
              Book My Free Call
            </Button>
            <p className="text-sm font-medium text-white/90">Only 3 consultation slots left this week.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
