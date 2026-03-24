import Link from "next/link";
import type { Metadata } from "next";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import { industries } from "@/data/industries";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export const metadata: Metadata = {
  title: "Industries We Serve | TechPillow",
};

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link: LinkIcon,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Solutions Tailored to Your Industry
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep domain expertise across 12 sectors that matter most to
                India&apos;s digital economy. We don&apos;t just write code — we
                understand your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              return (
                <ScrollReveal key={industry.slug} delay={index * 0.06}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex flex-col h-full border rounded-2xl p-6 hover:border-[#FF3E00]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-[#FF3E00]" />}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {industry.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-[#FF3E00] gap-1 group-hover:gap-2 transition-all">
                      Explore solutions
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Don't See Your Industry? We Still Deliver."
        subtext="Our engineering expertise translates across verticals. Let's talk about your specific needs."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
