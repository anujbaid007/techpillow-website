import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const clients = [
  "Growpital",
  "BrainWoo",
  "ITP Media",
  "Khwaishh",
  "EastMojo",
  "BitMemoir",
  "Tallah",
  "RKM Foundation",
];

export default function ClientLogos() {
  return (
    <ScrollReveal>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Trusted by Ambitious Businesses Across India"
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="border border-border rounded-lg px-6 py-4 flex items-center justify-center min-h-[72px] hover:border-[#FF3E00]/30 hover:bg-orange-50/30 transition-colors"
              >
                <span className="text-sm font-semibold text-muted-foreground/60 tracking-wide uppercase text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
