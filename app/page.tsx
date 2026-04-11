import { PageWrapper } from '@/components/layout/PageWrapper';
import { Hero } from '@/components/sections/Hero';
import { LogoBar } from '@/components/sections/LogoBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturedCaseStudy } from '@/components/sections/FeaturedCaseStudy';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingBanner } from '@/components/sections/BookingBanner';
import { ExitIntentPopup } from '@/components/conversion/ExitIntentPopup';
import { MobileStickyCTA } from '@/components/conversion/MobileStickyCTA';

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <LogoBar />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedCaseStudy />
      <Testimonials />
      <BookingBanner />
      <ExitIntentPopup />
      <MobileStickyCTA />
    </PageWrapper>
  );
}
