import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const clients = [
  { name: "Growpital", logo: "/images/logos/growpital.png" },
  { name: "BrainWoo", logo: "/images/logos/brainwoo.png" },
  { name: "ITP Media", logo: "/images/logos/itp-media.png" },
  { name: "Khwaishh", logo: "/images/logos/khwaishh.png" },
  { name: "EastMojo", logo: "/images/logos/eastmojo.png" },
  { name: "BitMemoir", logo: "/images/logos/bitmemoir.png" },
  { name: "Tallah", logo: "/images/logos/tallah.png" },
  { name: "RKM Foundation", logo: "/images/logos/rkm-foundation.png" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-20 border-t border-border/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Trusted by Ambitious Businesses Across India"
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 0.06}>
              <div className="group border border-border/60 rounded-xl px-6 py-5 flex items-center justify-center min-h-[80px] bg-white hover:border-[#FF3E00]/30 hover:shadow-md transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={50}
                  className="object-contain max-h-[40px] opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
