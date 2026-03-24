import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

// Social SVG icons (lucide-react v1 removed brand icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  const topIndustries = industries.slice(0, 6);

  return (
    <footer className="bg-[#0C0C0D] text-white">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center font-heading font-bold text-2xl text-white hover:opacity-80 transition-opacity"
            >
              Tech<span className="text-[#FF3E00]">Pillow</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00] mb-2.5 ml-0.5" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
              {company.tagline}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF3E00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-[#FF3E00] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {topIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-gray-400 hover:text-[#FF3E00] transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-[#FF3E00] hover:underline transition-colors"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#FF3E00] transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gray-500 group-hover:text-[#FF3E00] transition-colors" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phones.india}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#FF3E00] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gray-500 group-hover:text-[#FF3E00] transition-colors" />
                  <span>
                    <span className="text-gray-500 text-xs block">India</span>
                    {company.phones.india}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phones.uk}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#FF3E00] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gray-500 group-hover:text-[#FF3E00] transition-colors" />
                  <span>
                    <span className="text-gray-500 text-xs block">UK</span>
                    {company.phones.uk}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                  {company.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF3E00] hover:text-white transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF3E00] hover:text-white transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF3E00] hover:text-white transition-all"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF3E00] hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © 2026 TechPillow. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-[#FF3E00] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-[#FF3E00] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
