"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link as LinkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link: LinkIcon,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const servicesNav = navigation.find((n) => n.label === "Services");
  const industriesNav = navigation.find((n) => n.label === "Industries");
  const simpleNavItems = navigation.filter(
    (n) => n.label !== "Services" && n.label !== "Industries"
  );

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "w-full max-w-5xl rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border border-white/20"
              : "bg-white shadow-md"
          )}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-0.5 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logo.png"
                alt="TechPillow"
                width={140}
                height={40}
                className="h-7 w-auto"
                                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {simpleNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-[#FF3E00] bg-orange-50"
                      : "text-gray-700 hover:text-[#FF3E00] hover:bg-orange-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              {servicesNav && (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("Services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-[#FF3E00] bg-orange-50"
                        : "text-gray-700 hover:text-[#FF3E00] hover:bg-orange-50"
                    )}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === "Services" ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "Services" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-4"
                        onMouseEnter={() => handleMouseEnter("Services")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {servicesNav.children?.map((service) => {
                            const Icon = iconMap[service.icon || ""] || Code;
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF3E00] transition-colors">
                                  <Icon className="w-4 h-4 text-[#FF3E00] group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-[#FF3E00] transition-colors leading-tight">
                                  {service.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <Link
                            href="/services"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-[#FF3E00] font-medium hover:underline"
                          >
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Industries Dropdown */}
              {industriesNav && (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("Industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      pathname.startsWith("/industries")
                        ? "text-[#FF3E00] bg-orange-50"
                        : "text-gray-700 hover:text-[#FF3E00] hover:bg-orange-50"
                    )}
                  >
                    Industries
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === "Industries" ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "Industries" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-4"
                        onMouseEnter={() => handleMouseEnter("Industries")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-3 gap-1">
                          {industriesNav.children?.map((industry) => {
                            const Icon =
                              iconMap[industry.icon || ""] || Building2;
                            return (
                              <Link
                                key={industry.label}
                                href={industry.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition-colors group"
                              >
                                <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF3E00] transition-colors">
                                  <Icon className="w-3.5 h-3.5 text-[#FF3E00] group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-[#FF3E00] transition-colors leading-tight">
                                  {industry.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <Link
                            href="/industries"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-[#FF3E00] font-medium hover:underline"
                          >
                            View all industries →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#FF3E00] text-white text-sm font-semibold hover:bg-[#e63600] transition-colors shadow-sm"
              >
                Book a Free Strategy Call
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/images/logo.png"
                    alt="TechPillow"
                    width={120}
                    height={34}
                    className="h-6 w-auto"
                                      />
                </Link>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {simpleNavItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-[#FF3E00] bg-orange-50"
                          : "text-gray-800 hover:text-[#FF3E00] hover:bg-orange-50"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Services Accordion */}
                {servicesNav && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:text-[#FF3E00] hover:bg-orange-50 transition-colors"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === "Services" ? null : "Services"
                        )
                      }
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileExpanded === "Services" ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === "Services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-1 pb-2 space-y-0.5">
                            {servicesNav.children?.map((service) => {
                              const Icon = iconMap[service.icon || ""] || Code;
                              return (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-[#FF3E00] hover:bg-orange-50 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <Icon className="w-4 h-4 text-[#FF3E00] shrink-0" />
                                  {service.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* Industries Accordion */}
                {industriesNav && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:text-[#FF3E00] hover:bg-orange-50 transition-colors"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === "Industries" ? null : "Industries"
                        )
                      }
                    >
                      Industries
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileExpanded === "Industries" ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === "Industries" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-1 pb-2 space-y-0.5">
                            {industriesNav.children?.map((industry) => {
                              const Icon =
                                iconMap[industry.icon || ""] || Building2;
                              return (
                                <Link
                                  key={industry.label}
                                  href={industry.href}
                                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-[#FF3E00] hover:bg-orange-50 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <Icon className="w-4 h-4 text-[#FF3E00] shrink-0" />
                                  {industry.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>

              {/* Drawer CTA */}
              <div className="px-6 py-5 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-[#FF3E00] text-white text-sm font-semibold hover:bg-[#e63600] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
