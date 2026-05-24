import { site } from "@/lib/siteData";

export default function FloatingWhatsApp() {
  const text = encodeURIComponent("Hi Papa Kid Gents Salon, I want to book an appointment.");
  return (
    <a
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-gold transition hover:scale-105"
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2A9.86 9.86 0 0 0 2.18 11.86c0 1.73.45 3.4 1.3 4.88L2 22l5.38-1.42a9.86 9.86 0 0 0 4.66 1.18h.01A9.86 9.86 0 0 0 12.04 2Zm5.79 14.08c-.25.7-1.45 1.33-2.03 1.38-.52.05-1.18.07-1.9-.12-.44-.12-1-.32-1.72-.63-3.03-1.31-5-4.36-5.15-4.56-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.52c.28-.3.61-.38.81-.38h.58c.18 0 .44-.07.68.52.25.6.85 2.08.92 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.39-.45.52-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.2-.22.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.08.13.08.73-.17 1.43Z" />
      </svg>
    </a>
  );
}
