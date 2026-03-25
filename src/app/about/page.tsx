"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Lightbulb,
  Eye,
  Code,
  Handshake,
  Link2,
  AtSign,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

const values = [
  {
    icon: Lightbulb,
    title: "Product-First Thinking",
    description:
      "We don't just ship code — we think like product owners. Every feature we build is evaluated through the lens of user impact and business ROI.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Weekly demos, shared project boards, and honest timelines. No surprises, no black boxes — you see exactly what's being built and why.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    description:
      "Clean architecture, thorough testing, and code that your team can actually maintain. We write software for the long haul, not just the launch.",
    accent: "from-emerald-500/20 to-green-500/10",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We're invested in your outcome, not just the engagement. Our best client relationships are multi-year partnerships, not one-off projects.",
    accent: "from-purple-500/20 to-violet-500/10",
  },
];

const team = [
  { name: "Mayank Gupta", role: "Founder & CEO", image: "/images/stock/team-1.jpg" },
  { name: "Anuj Baid", role: "CTO", image: "/images/stock/team-2.jpg" },
  { name: "Priya Kapoor", role: "Lead Designer", image: "/images/stock/team-3.jpg" },
  { name: "Vikram Singh", role: "Senior Engineer", image: "/images/stock/team-4.jpg" },
  { name: "Neha Gupta", role: "DevOps Lead", image: "/images/stock/team-5.jpg" },
  { name: "Arjun Patel", role: "Project Manager", image: "/images/stock/team-6.jpg" },
];

const milestones = [
  { year: "2016", label: "Founded in Gurugram", description: "Three engineers, one mission — build world-class tech from India." },
  { year: "2018", label: "25 Projects Delivered", description: "Gained traction across e-commerce, fintech, and edtech verticals." },
  { year: "2020", label: "UK Expansion", description: "Opened our first international office to serve European clients." },
  { year: "2022", label: "75+ Projects", description: "Scaled our team to 25+ engineers and designers." },
  { year: "2024", label: "AI & ML Division", description: "Launched dedicated AI practice for intelligent solutions." },
  { year: "2026", label: "120+ Projects", description: "Serving clients across 4 continents with end-to-end delivery." },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/stock/about-hero.jpg"
          alt="TechPillow team collaborating"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF3E00] mb-6">
              <span className="w-8 h-px bg-[#FF3E00]" />
              About TechPillow
              <span className="w-8 h-px bg-[#FF3E00]" />
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
              The Team Behind Your Next Breakthrough
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We&apos;re a team of engineers, designers, and strategists who
              believe technology should solve real problems — not create new
              ones.
            </p>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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

                {/* Quick stats */}
                <div className="mt-8 flex gap-8">
                  {[
                    { value: "120+", label: "Projects" },
                    { value: "10+", label: "Years" },
                    { value: "25+", label: "Engineers" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading font-bold text-3xl text-[#FF3E00]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                {/* Decorative offset border */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-[#FF3E00]/15 pointer-events-none" />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/images/stock/about-mission.jpg"
                    alt="TechPillow team in a strategy meeting"
                    width={800}
                    height={600}
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Dot pattern accent */}
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #FF3E00 1.5px, transparent 1.5px)",
                    backgroundSize: "10px 10px",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="Four principles that guide every project we take on."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div
                    className={`relative group border rounded-2xl p-8 sm:p-10 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      isEven ? "bg-white" : "bg-[#0C0C0D] text-white"
                    }`}
                  >
                    {/* Gradient border accent on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF3E00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${value.accent}`}
                      >
                        <Icon
                          className={`w-7 h-7 ${
                            isEven ? "text-[#FF3E00]" : "text-white"
                          }`}
                          strokeWidth={1.8}
                        />
                      </div>
                      <h3
                        className={`font-heading font-semibold text-xl mb-3 ${
                          isEven ? "text-foreground" : "text-white"
                        }`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isEven ? "text-muted-foreground" : "text-gray-400"
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Office Image Break ─── */}
      <ScrollReveal>
        <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <Image
            src="/images/stock/office.jpg"
            alt="TechPillow modern office space"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg"
              >
                <p className="text-white text-2xl lg:text-3xl font-heading font-bold leading-snug">
                  &ldquo;Great software is built by people who care about the
                  problem, not just the technology.&rdquo;
                </p>
                <p className="text-white/60 mt-4 text-sm font-medium">
                  — Mayank Gupta, Founder & CEO
                </p>
              </motion.blockquote>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Team ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our People"
            title="Meet the Team"
            description="The engineers and strategists behind TechPillow's success."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden bg-white border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Photo */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay with social links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF3E00] transition-colors cursor-pointer">
                          <Link2 className="w-4 h-4" />
                        </span>
                        <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF3E00] transition-colors cursor-pointer">
                          <AtSign className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center">
                    <h3 className="font-heading font-semibold text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {member.role}
                    </p>
                    {/* Accent bar */}
                    <div className="w-8 h-0.5 bg-[#FF3E00] mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-20 lg:py-28 bg-muted/30 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            align="center"
          />

          {/* Desktop: horizontal */}
          <div className="hidden md:block mt-20 relative">
            {/* Connecting line with gradient */}
            <div className="absolute top-8 left-[8%] right-[8%] h-1 rounded-full bg-gradient-to-r from-[#FF3E00]/20 via-[#FF3E00] to-[#FF3E00]/20" />

            <div className="flex items-start justify-between">
              {milestones.map((ms, index) => (
                <ScrollReveal
                  key={ms.year}
                  delay={index * 0.12}
                  className="flex-1 flex flex-col items-center text-center relative px-2"
                >
                  {/* Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#FF3E00] flex items-center justify-center shadow-lg shadow-[#FF3E00]/20">
                      <span className="font-heading font-bold text-sm text-[#FF3E00]">
                        {ms.year}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-5">
                    <h4 className="font-heading font-semibold text-sm">
                      {ms.label}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1.5 max-w-[150px] mx-auto leading-relaxed">
                      {ms.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden mt-14 relative pl-12">
            {/* Gradient vertical line */}
            <div className="absolute top-0 bottom-0 left-[22px] w-1 rounded-full bg-gradient-to-b from-[#FF3E00] via-[#FF3E00]/60 to-[#FF3E00]/20" />

            {milestones.map((ms, index) => (
              <ScrollReveal
                key={ms.year}
                delay={index * 0.1}
                className="relative mb-10 last:mb-0"
              >
                {/* Node */}
                <div className="absolute -left-12 w-11 h-11 rounded-full bg-white border-[3px] border-[#FF3E00] flex items-center justify-center shadow-md shadow-[#FF3E00]/15 z-10">
                  <span className="font-heading font-bold text-[10px] text-[#FF3E00]">
                    {ms.year}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-sm">
                    {ms.label}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
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
