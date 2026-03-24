import Hero from "@/components/sections/hero";
import ClientLogos from "@/components/sections/client-logos";
import StatsCounter from "@/components/sections/stats-counter";
import AboutPreview from "@/components/sections/about-preview";
import CTABanner from "@/components/layout/cta-banner";
import ServicesGrid from "@/components/sections/services-grid";

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
    </main>
  );
}
