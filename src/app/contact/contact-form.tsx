"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "./action";

const initialState: FormState = { success: false, error: "", message: "" };

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF3E00]/20 focus:border-[#FF3E00] transition";

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className={inputClass}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className={inputClass}
        />
      </div>
      <textarea
        name="projectBrief"
        placeholder="Tell us about your project... *"
        rows={6}
        required
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF3E00] text-white font-semibold text-sm hover:bg-[#e63600] shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.error && (
        <p className="text-sm text-red-500 mt-2">{state.error}</p>
      )}
      {state.success && state.message && (
        <p className="text-sm text-green-600 mt-2">{state.message}</p>
      )}
    </form>
  );
}
