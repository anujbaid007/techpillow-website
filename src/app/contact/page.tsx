import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import CTABanner from "@/components/layout/cta-banner";
import { company } from "@/data/company";
import ContactForm from "./contact-form";
import { FAQAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "Contact Us | TechPillow",
  description:
    "Get in touch with TechPillow. Whether you're launching a startup or scaling an enterprise, we're here to help bring your vision to life.",
};

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: company.email,
    href: `mailto:${company.email}`,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Phone,
    label: "India",
    value: company.phones.india,
    href: `tel:${company.phones.india}`,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Phone,
    label: "United Kingdom",
    value: company.phones.uk,
    href: `tel:${company.phones.uk}`,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: company.address,
    href: undefined,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 8-16 weeks from kickoff to launch, depending on scope and complexity. We'll give you a realistic timeline during the discovery phase — not an optimistic guess to win the deal.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-price engagements for well-defined scopes, and time & materials for ongoing development or evolving projects. We'll recommend the model that best fits your project during our initial conversation.",
  },
  {
    question: "How do you communicate during projects?",
    answer:
      "Weekly standups, a dedicated Slack channel, shared project board (Jira or Linear), and weekly demo recordings. You'll never wonder what's happening with your project.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. Our IT Resources service is specifically designed for team augmentation. We embed engineers who work on your tools, follow your processes, and feel like part of your team.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, Next.js, Node.js, Flutter, Python, AWS, and more. But we don't pick tools for the sake of it — we recommend the right technology for your specific requirements and team capabilities.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero: Split Layout ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20 lg:py-28">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FF3E00]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Headline */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block border rounded-lg px-4 py-1 text-sm text-muted-foreground mb-6">
                  Contact Us
                </span>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                  Let&apos;s Build Something{" "}
                  <span className="text-[#FF3E00]">Great</span> Together
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Whether you&apos;re launching a startup or scaling an
                  enterprise, we&apos;re here to help. Tell us about your
                  project and we&apos;ll get back to you within 24 hours.
                </p>

                {/* Response time badge */}
                <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">
                    Average response time: under 4 hours
                  </span>
                </div>

              </div>
            </ScrollReveal>

            {/* Right: Contact Form */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xl shadow-black/5">
                <h2 className="font-heading font-bold text-2xl mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and our team will get back to you promptly.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Reach Out"
            title="Multiple Ways to Connect"
            description="Choose the channel that works best for you. We're available across time zones."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const inner = (
                <div className="relative group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                  {/* Gradient left border accent */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${card.color} rounded-l-2xl`}
                  />

                  <div
                    className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">
                    {card.label}
                  </p>
                  <p className="text-sm font-bold text-foreground break-all">
                    {card.value}
                  </p>
                </div>
              );

              return (
                <ScrollReveal key={card.label} delay={idx * 0.1}>
                  {card.href ? (
                    <a href={card.href} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full">{inner}</div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Office Image (Mobile) + Map ── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Location"
            title="Where to Find Us"
            description="Based in Gurugram, serving clients globally."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office image - shown on all screens here, hidden on lg in hero */}
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg lg:hidden">
                <Image
                  src="/images/stock/office.jpg"
                  alt="TechPillow office workspace"
                  width={640}
                  height={420}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <p className="text-sm font-semibold">TechPillow HQ</p>
                  <p className="text-xs opacity-80">Gurugram, India</p>
                </div>
              </div>

              {/* Desktop: Full-height office image */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <Image
                  src="/images/stock/office.jpg"
                  alt="TechPillow office workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold font-heading">
                    TechPillow HQ
                  </p>
                  <p className="text-sm opacity-80">
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Map */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.81306!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TechPillow Office Location - Gurugram"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before getting started."
            align="center"
          />

          <div className="mt-14 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to Start Your Project?"
        subtext="Book a free 30-minute discovery call and let's explore how we can help you build something extraordinary."
        ctaText="Schedule a Call"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
