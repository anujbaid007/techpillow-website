"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

const WA_NUMBER = "919601443663";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition";

const serviceOptions = [
  { value: "", label: "Select a service (optional)" },
  { value: "Custom Software Development", label: "Custom Software Development" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "Web Development", label: "Web Development" },
  { value: "AI & Machine Learning", label: "AI & Machine Learning" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Cloud & DevOps", label: "Cloud & DevOps" },
  { value: "IT Resources / Staffing", label: "IT Resources / Staffing" },
  { value: "Not Sure Yet", label: "Not Sure Yet" },
];

const budgetOptions = [
  { value: "", label: "Estimated budget (optional)" },
  { value: "Under ₹5L", label: "Under ₹5 Lakhs" },
  { value: "₹5L – ₹15L", label: "₹5L – ₹15 Lakhs" },
  { value: "₹15L – ₹50L", label: "₹15L – ₹50 Lakhs" },
  { value: "₹50L+", label: "₹50 Lakhs+" },
  { value: "Flexible / Let's discuss", label: "Flexible — Let's discuss" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    projectBrief: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const lines = [
      `Hi TechPillow! I'd like to discuss a project.`,
      ``,
      `*Name:* ${form.name}`,
      form.company ? `*Company:* ${form.company}` : null,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      form.service ? `*Service Needed:* ${form.service}` : null,
      form.budget ? `*Estimated Budget:* ${form.budget}` : null,
      form.projectBrief ? `*Project Brief:*\n${form.projectBrief}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );

    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">Opening WhatsApp…</h3>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          Your details are pre-filled in WhatsApp. Just hit send and our team
          will respond within a few hours.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", projectBrief: "" });
            setSent(false);
          }}
          className="mt-6 text-sm text-[#FF3E00] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass + " appearance-none pr-8 cursor-pointer"}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▼</span>
        </div>

        <div className="relative">
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass + " appearance-none pr-8 cursor-pointer"}
          >
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▼</span>
        </div>
      </div>

      <textarea
        name="projectBrief"
        placeholder="Tell us about your project — goals, timelines, stack preferences… *"
        rows={5}
        required
        value={form.projectBrief}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-base hover:bg-[#1ebe5c] shadow-lg shadow-green-500/25 transition-all disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <MessageCircle className="w-4 h-4" />
        )}
        {loading ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Your details will be pre-filled in WhatsApp. We reply within a few hours.
      </p>
    </form>
  );
}
