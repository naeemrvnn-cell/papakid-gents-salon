import Link from "next/link";
import { site } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-lux grid gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="inline-block leading-none text-gold">
            <span className="block font-display text-4xl font-black">Papa Kid.</span>
            <span className="block text-right text-base font-black">Gents Salon</span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">{site.address}</p>
        </div>
        <div className="grid gap-4 lg:justify-items-end">
          <div className="flex flex-wrap gap-5 text-sm font-extrabold text-gold">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <a className="inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 font-black text-gold transition hover:bg-gold hover:text-ink" href={site.instagram} target="_blank" rel="noreferrer">
            <span>Follow us on Instagram</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
