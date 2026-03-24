"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { company } from "@/data/company";

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Phone,
    label: "India",
    value: company.phones.india,
    href: `tel:${company.phones.india}`,
  },
  {
    icon: Phone,
    label: "UK",
    value: company.phones.uk,
    href: `tel:${company.phones.uk}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: company.address,
    href: undefined,
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Contact"
          title="Let's Talk About Your Next Big Idea"
          description="Whether you're launching a startup or scaling an enterprise, we're here to help."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info cards */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const Wrapper = card.href ? "a" : "div";
                const wrapperProps = card.href
                  ? { href: card.href, target: card.href.startsWith("mailto") ? undefined : "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <Wrapper
                    key={card.label}
                    {...(wrapperProps as any)}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF3E00]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">
                        {card.label}
                      </p>
                      <p className="text-sm font-semibold mt-0.5">{card.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Contact form */}
          <ScrollReveal direction="right">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/contact";
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition"
                />
              </div>
              <textarea
                name="projectBrief"
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF3E00] text-white font-semibold text-sm hover:bg-[#e63600] shadow-lg shadow-orange-500/25 transition-all"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
