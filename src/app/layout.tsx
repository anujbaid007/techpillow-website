import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | TechPillow",
    default: "TechPillow — India's Trusted Tech Partner",
  },
  description:
    "Custom software, AI solutions, and mobile apps engineered to scale. 120+ projects delivered across India and beyond.",
  openGraph: {
    title: "TechPillow — India's Trusted Tech Partner",
    description:
      "Custom software, AI solutions, and mobile apps engineered to scale. 120+ projects delivered across India and beyond.",
    type: "website",
    locale: "en_IN",
    siteName: "TechPillow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
