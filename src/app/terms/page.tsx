import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TechPillow",
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[720px] mx-auto px-6">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: March 24, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              1. Services
            </h2>
            <p>
              TechPillow provides custom software development, mobile app
              development, web development, AI/ML solutions, UI/UX design, cloud
              and DevOps services, and IT staff augmentation. The specific scope,
              deliverables, and terms of each engagement are defined in
              individual project agreements.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              2. Intellectual Property
            </h2>
            <p>
              Upon full payment, all intellectual property rights in the
              deliverables transfer to the client, unless otherwise agreed in
              writing. TechPillow retains the right to use general knowledge,
              skills, and experience gained during the engagement.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              3. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary
              information shared during the engagement. This obligation survives
              termination of the agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              4. Payment Terms
            </h2>
            <p>
              Payment terms are specified in individual project agreements.
              Unless otherwise agreed, invoices are due within 15 days of
              receipt. Late payments may incur interest at 1.5% per month.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              TechPillow&apos;s total liability for any claim arising from our
              services shall not exceed the total fees paid by the client for
              the specific engagement giving rise to the claim.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in
              Gurugram, Haryana.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              7. Contact
            </h2>
            <p>
              For questions about these terms, contact us at
              Hello@techpillow.co.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
