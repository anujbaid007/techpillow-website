import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/data/company";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | TechPillow",
};

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
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you&apos;re launching a startup or scaling an
                enterprise, we&apos;re here to help. Tell us about your project
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>

            {/* Right: Contact info + map */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  Get in Touch
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactCards.map((card) => {
                    const Icon = card.icon;
                    return card.href ? (
                      <a
                        key={card.label}
                        href={card.href}
                        className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#FF3E00]" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">
                            {card.label}
                          </p>
                          <p className="text-sm font-semibold mt-0.5">
                            {card.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={card.label}
                        className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#FF3E00]" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">
                            {card.label}
                          </p>
                          <p className="text-sm font-semibold mt-0.5">
                            {card.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map placeholder */}
                <div className="aspect-[4/3] rounded-xl bg-gray-100 border border-border flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.81306!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TechPillow Office Location - Gurugram"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.question}>
                <details className="group border rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-heading font-semibold text-sm sm:text-base list-none">
                    {faq.question}
                    <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform text-xl">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
