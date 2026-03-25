import Link from "next/link";
import Image from "next/image";
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

const accentColors: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
  healthcare: { bg: "bg-rose-500/10", text: "text-rose-500", border: "hover:border-rose-500/40", shadow: "hover:shadow-rose-500/10" },
  fintech: { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500/40", shadow: "hover:shadow-blue-500/10" },
  ecommerce: { bg: "bg-amber-500/10", text: "text-amber-500", border: "hover:border-amber-500/40", shadow: "hover:shadow-amber-500/10" },
  education: { bg: "bg-violet-500/10", text: "text-violet-500", border: "hover:border-violet-500/40", shadow: "hover:shadow-violet-500/10" },
  logistics: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "hover:border-cyan-500/40", shadow: "hover:shadow-cyan-500/10" },
  "real-estate": { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "hover:border-emerald-500/40", shadow: "hover:shadow-emerald-500/10" },
  "food-beverage": { bg: "bg-orange-500/10", text: "text-orange-500", border: "hover:border-orange-500/40", shadow: "hover:shadow-orange-500/10" },
  "travel-hospitality": { bg: "bg-sky-500/10", text: "text-sky-500", border: "hover:border-sky-500/40", shadow: "hover:shadow-sky-500/10" },
  "entertainment-media": { bg: "bg-pink-500/10", text: "text-pink-500", border: "hover:border-pink-500/40", shadow: "hover:shadow-pink-500/10" },
  "on-demand": { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "hover:border-yellow-500/40", shadow: "hover:shadow-yellow-500/10" },
  agritech: { bg: "bg-green-500/10", text: "text-green-500", border: "hover:border-green-500/40", shadow: "hover:shadow-green-500/10" },
  "blockchain-web3": { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "hover:border-indigo-500/40", shadow: "hover:shadow-indigo-500/10" },
};

const defaultAccent = { bg: "bg-[#FF3E00]/10", text: "text-[#FF3E00]", border: "hover:border-[#FF3E00]/40", shadow: "hover:shadow-[#FF3E00]/10" };

export default function IndustriesPage() {
  return (
    <>
      {/* Hero with cinematic background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/stock/industries-hero.jpg"
          alt="Industries we serve"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 lg:py-40 text-center">
          <ScrollReveal>
            <span className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/80 backdrop-blur-sm bg-white/5 mb-8">
              12 Sectors. One Partner.
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
              Solutions Tailored to{" "}
              <span className="text-[#FF3E00]">Your Industry</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Deep domain expertise across 12 sectors that matter most to
              India&apos;s digital economy. We don&apos;t just write code — we
              understand your business.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="#industries"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FF3E00] text-white hover:bg-[#e63600] transition-colors shadow-lg shadow-[#FF3E00]/25"
            >
              Explore Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Bottom fade into content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Section divider */}
      <div id="industries" className="relative py-4">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Our Expertise
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              const accent = accentColors[industry.slug] || defaultAccent;
              return (
                <ScrollReveal key={industry.slug} delay={index * 0.06}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={`group relative flex flex-col h-full border rounded-2xl p-7 ${accent.border} ${accent.shadow} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-background overflow-hidden`}
                  >
                    {/* Subtle gradient accent in top-right corner */}
                    <div className={`absolute -top-12 -right-12 w-32 h-32 ${accent.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        {Icon && <Icon className={`w-7 h-7 ${accent.text}`} />}
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {industry.shortDescription}
                      </p>
                      <div className={`mt-5 flex items-center text-sm font-semibold ${accent.text} gap-1.5 group-hover:gap-3 transition-all duration-300`}>
                        Explore solutions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
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
