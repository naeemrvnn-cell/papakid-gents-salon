"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/siteData";

export default function BookingModal({ label = "Book Appointment", className = "gold-button" }) {
  const [open, setOpen] = useState(false);
  const whatsappText = encodeURIComponent("Hi Papa Kid Gents Salon, I would like to book an appointment.");

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>
        {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass w-full max-w-lg rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="eyebrow">Book your visit</p>
                  <h2 className="font-display text-3xl font-black">Ready for a fresh look?</h2>
                </div>
                <button className="rounded-full border border-white/15 px-3 py-1 text-xl" onClick={() => setOpen(false)} aria-label="Close booking modal">
                  ×
                </button>
              </div>
              <div className="grid gap-3">
                <a className="gold-button w-full" href={`https://wa.me/${site.whatsapp}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                  Book on WhatsApp
                </a>
                <a className="dark-button w-full" href={`tel:${site.tel}`}>Call the Salon</a>
                <a className="dark-button w-full" href={site.mapUrl} target="_blank" rel="noreferrer">Open Location</a>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/55">
                Replace the phone and WhatsApp number in <code>lib/siteData.js</code> with the salon&apos;s official number when ready.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
