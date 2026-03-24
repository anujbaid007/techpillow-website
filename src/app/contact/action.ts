"use server";

export type FormState = {
  success: boolean;
  error: string;
  message: string;
};

export async function submitContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const message = formData.get("projectBrief") as string;

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields.", message: "" };
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address.", message: "" };
  }

  // For now, log to console (replace with Resend/email service in production)
  console.log("Contact form submission:", { name, email, phone, company, message });

  return { success: true, error: "", message: "Thanks! We'll get back to you within 24 hours." };
}
