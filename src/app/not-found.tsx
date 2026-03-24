import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-8xl sm:text-9xl text-[#FF3E00]/20">
          404
        </h1>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl mt-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#FF3E00] text-white font-semibold text-sm hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-border font-semibold text-sm hover:bg-muted transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
