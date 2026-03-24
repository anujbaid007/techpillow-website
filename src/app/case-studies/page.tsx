import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";
import CaseStudiesFilter from "./case-studies-filter";

export const metadata: Metadata = {
  title: "Case Studies | TechPillow",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Our Work Speaks for Itself
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Real projects, real results. Explore how we&apos;ve helped
                startups and enterprises build products that move the needle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filterable Case Studies */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <CaseStudiesFilter />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Want Similar Results for Your Business?"
        subtext="Let's discuss how we can help you achieve your goals."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
