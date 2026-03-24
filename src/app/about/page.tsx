import type { Metadata } from "next";
import {
  Lightbulb,
  Eye,
  Code,
  Handshake,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export const metadata: Metadata = {
  title: "About Us | TechPillow",
};

const values = [
  {
    icon: Lightbulb,
    title: "Product-First Thinking",
    description:
      "We don't just ship code — we think like product owners. Every feature we build is evaluated through the lens of user impact and business ROI.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Weekly demos, shared project boards, and honest timelines. No surprises, no black boxes — you see exactly what's being built and why.",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    description:
      "Clean architecture, thorough testing, and code that your team can actually maintain. We write software for the long haul, not just the launch.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We're invested in your outcome, not just the engagement. Our best client relationships are multi-year partnerships, not one-off projects.",
  },
];

const team = [
  { name: "Anuj Sharma", role: "Founder & CEO" },
  { name: "Rahul Mehta", role: "CTO" },
  { name: "Priya Kapoor", role: "Lead Designer" },
  { name: "Vikram Singh", role: "Senior Engineer" },
  { name: "Neha Gupta", role: "DevOps Lead" },
  { name: "Arjun Patel", role: "Project Manager" },
];

const milestones = [
  { year: "2016", label: "Founded in Gurugram" },
  { year: "2018", label: "25 Projects Delivered" },
  { year: "2020", label: "UK Expansion" },
  { year: "2022", label: "75+ Projects" },
  { year: "2024", label: "AI & ML Division" },
  { year: "2026", label: "120+ Projects" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                The Team Behind Your Next Breakthrough
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re a team of engineers, designers, and strategists who
                believe technology should solve real problems — not create new
                ones.
              </p>
            </div>
          </ScrollReveal>

          {/* Placeholder team illustration */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 aspect-[21/9] rounded-2xl bg-gradient-to-br from-orange-50 to-gray-100 border border-border flex items-center justify-center">
              <span className="text-2xl font-heading font-bold text-muted-foreground/15">
                Team Photo
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  subtitle="Our Story"
                  title="Built in India, for Businesses That Think Big"
                  align="left"
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    TechPillow started in 2016 with a simple observation: Indian
                    businesses deserved technology partners who understood their
                    market, not agencies that treated them as offshore clients.
                    We founded the company in Gurugram with three engineers and a
                    conviction that great software requires understanding the
                    business first.
                  </p>
                  <p>
                    Over the past decade, we&apos;ve grown from a small
                    development shop into a full-service technology partner —
                    delivering 120+ projects across e-commerce, fintech, edtech,
                    healthcare, and media. Along the way, we expanded to serve
                    clients in the UK, UAE, and Southeast Asia, while keeping our
                    engineering core rooted in India.
                  </p>
                  <p>
                    What hasn&apos;t changed is our approach: we hire engineers
                    who think like product owners, we communicate with radical
                    transparency, and we measure success by the outcomes our
                    clients achieve — not the lines of code we ship.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-50 to-gray-100 border border-border flex items-center justify-center">
                <span className="text-xl font-heading font-bold text-muted-foreground/15">
                  Office Image
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="Four principles that guide every project we take on."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="border rounded-2xl p-6 sm:p-8 bg-white h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#FF3E00]" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our People"
            title="Meet the Team"
            description="The engineers and strategists behind TechPillow's success."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.08}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-gray-100 border-2 border-border flex items-center justify-center mb-3">
                    <span className="text-2xl font-heading font-bold text-muted-foreground/30">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            align="center"
          />

          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start justify-between mt-16 relative">
            <div className="absolute top-6 left-[calc(8%+12px)] right-[calc(8%+12px)] h-0.5 bg-border" />

            {milestones.map((ms, index) => (
              <ScrollReveal
                key={ms.year}
                delay={index * 0.12}
                className="flex-1 flex flex-col items-center text-center relative px-2"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-sm relative z-10">
                  {ms.year}
                </div>
                <p className="text-sm font-medium mt-4 max-w-[120px]">
                  {ms.label}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden mt-12 relative pl-8">
            <div className="absolute top-3 bottom-3 left-[18px] w-0.5 bg-border" />

            {milestones.map((ms, index) => (
              <ScrollReveal
                key={ms.year}
                delay={index * 0.1}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-8 w-9 h-9 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-xs z-10">
                  {ms.year}
                </div>
                <p className="text-sm font-medium">{ms.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Want to Work With Us?"
        subtext="We're always looking for ambitious projects and great people."
        ctaText="Get in Touch"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
