"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BookingModal from "./BookingModal";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <div className="container-lux flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="leading-none text-gold" aria-label="Papa Kid Gents Salon home">
          <span className="block font-display text-3xl font-black sm:text-4xl">Papa Kid.</span>
          <span className="block text-right text-sm font-black sm:text-base">Gents Salon</span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-5 py-3 text-sm font-extrabold transition ${pathname === href ? "bg-gold text-ink" : "text-white/70 hover:text-gold"}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookingModal label="Book Now" />
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-gold"></span>
            <span className="block h-0.5 w-5 bg-gold"></span>
            <span className="block h-0.5 w-5 bg-gold"></span>
          </span>
        </button>
      </div>

      {open && (
        <div className="container-lux pb-5 lg:hidden">
          <div className="glass grid gap-2 rounded-2xl p-3">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-bold text-white/80 hover:bg-gold hover:text-ink">
                {label}
              </Link>
            ))}
            <BookingModal label="Book Appointment" className="gold-button mt-2 w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
