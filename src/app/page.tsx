import Hero from "@/components/sections/hero";
import ClientLogos from "@/components/sections/client-logos";
import StatsCounter from "@/components/sections/stats-counter";
import AboutPreview from "@/components/sections/about-preview";
import CTABanner from "@/components/layout/cta-banner";
import ServicesGrid from "@/components/sections/services-grid";
import IndustriesTabs from "@/components/sections/industries-tabs";
import CaseStudiesTabs from "@/components/sections/case-studies-tabs";
import WhyChooseUs from "@/components/sections/why-choose-us";
import WorldMapSection from "@/components/sections/world-map-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <StatsCounter />
      <AboutPreview />
      <CTABanner
        headline="Is Tech Holding You Back? Let's Fix That."
        subtext="Focus on growth while we drive your tech innovation."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="dark"
      />
      <ServicesGrid />
      <IndustriesTabs />
      <CaseStudiesTabs />
      <CTABanner
        headline="Ready to Build Something Extraordinary?"
        subtext="From ideation to launch, we're your end-to-end technology partner."
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
        variant="orange"
      />
      <WhyChooseUs />
      <WorldMapSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
