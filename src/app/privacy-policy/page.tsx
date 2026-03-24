import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TechPillow",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[720px] mx-auto px-6">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: March 24, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly when you use our
              contact forms, including your name, email address, phone number,
              company name, and project details. We also collect standard
              analytics data (page views, session duration) through privacy-
              respecting analytics tools.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to your inquiries,
              deliver our services, and improve your experience on our website.
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              4. Cookies
            </h2>
            <p>
              Our website uses essential cookies to ensure proper functionality.
              We may also use analytics cookies to understand how visitors
              interact with our website. You can control cookie preferences
              through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              5. Your Rights
            </h2>
            <p>
              Under the Digital Personal Data Protection (DPDP) Act 2023, you
              have the right to access, correct, and delete your personal data.
              To exercise these rights, contact us at Hello@techpillow.co.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">
              6. Contact
            </h2>
            <p>
              If you have questions about this privacy policy, contact us at
              Hello@techpillow.co or write to us at Gurugram, Haryana, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
