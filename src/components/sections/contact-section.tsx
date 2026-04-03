"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { company } from "@/data/company";

const WA_NUMBER = "919601443663";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 96014 43663",
    href: `https://wa.me/${WA_NUMBER}?text=Hi%20TechPillow!%20I%27d%20like%20to%20discuss%20a%20project.`,
    green: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: company.email,
    href: `mailto:${company.email}`,
    green: false,
  },
  {
    icon: Phone,
    label: "India",
    value: company.phones.india,
    href: `tel:${company.phones.india}`,
    green: false,
  },
  {
    icon: Phone,
    label: "UK",
    value: company.phones.uk,
    href: `tel:${company.phones.uk}`,
    green: false,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectBrief: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines = [
      `Hi TechPillow! I'd like to discuss a project.`,
      ``,
      `*Name:* ${form.name}`,
      form.company ? `*Company:* ${form.company}` : null,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      form.projectBrief ? `*Project Brief:*\n${form.projectBrief}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
  };

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
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-4 p-5 rounded-xl border bg-white hover:shadow-md transition-shadow ${
                      card.green ? "border-green-200 bg-green-50/40 hover:bg-green-50" : "border-border"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${card.green ? "bg-green-100" : "bg-orange-50"}`}>
                      <Icon className={`w-5 h-5 ${card.green ? "text-green-600" : "text-[#FF3E00]"}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{card.label}</p>
                      <p className="text-base font-semibold mt-0.5">{card.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Quick WhatsApp form */}
          <ScrollReveal direction="right">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <textarea
                name="projectBrief"
                placeholder="Tell us about your project..."
                rows={4}
                required
                value={form.projectBrief}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-base hover:bg-[#1ebe5c] shadow-lg shadow-green-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground">
                Your details will be pre-filled in WhatsApp. We reply within a few hours.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
