import BookingModal from "@/components/BookingModal";
import { site } from "@/lib/siteData";

export const metadata = {
  title: "Contact",
  description: "Contact Papa Kid Gents Salon in Al Warqa 1, Dubai. Open map, WhatsApp, call, or send an enquiry."
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="container-lux py-16">
        <p className="eyebrow">Contact</p>
        <h1 className="font-display text-5xl font-black leading-none sm:text-7xl">Book your next grooming session.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{site.address}</p>
      </section>

      <section className="container-lux grid gap-6 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-6">
          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Visit the salon</h2>
            <p className="mt-4 leading-8 text-white/65">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="gold-button" href={site.mapUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
              <a className="dark-button" href={`tel:${site.tel}`}>Call</a>
              <a className="dark-button" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Business hours</h2>
            <div className="mt-5 grid gap-3 text-white/66">
              <div className="flex justify-between gap-4"><span>Monday - Thursday</span><strong className="text-white">10:00 AM - 11:00 PM</strong></div>
              <div className="flex justify-between gap-4"><span>Friday - Sunday</span><strong className="text-white">10:00 AM - 12:00 AM</strong></div>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Social</h2>
            <a className="mt-5 inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 font-black text-gold" href={site.instagram} target="_blank" rel="noreferrer">
              Follow us on Instagram
            </a>
          </div>
        </div>

        <div className="glass rounded-3xl p-5 sm:p-7">
          <h2 className="font-display text-3xl font-black">Send an enquiry</h2>
          <form className="mt-6 grid gap-4" action="#" method="post">
            <label className="grid gap-2 text-sm font-bold text-gold">
              Name
              <input className="min-h-12 rounded-xl border border-white/10 bg-ink px-4 text-white outline-none focus:border-gold" name="name" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-gold">
              Service
              <select className="min-h-12 rounded-xl border border-white/10 bg-ink px-4 text-white outline-none focus:border-gold" name="service">
                <option>Haircut</option>
                <option>Beard Styling</option>
                <option>Skin Care</option>
                <option>Grooming Package</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-gold">
              Message
              <textarea className="min-h-36 rounded-xl border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-gold" name="message" placeholder="Preferred day, time, and service" />
            </label>
            <BookingModal label="Submit Enquiry" className="gold-button w-full" />
          </form>
          <p className="mt-5 text-sm leading-6 text-white/50">
            For direct email delivery, connect this form to Formspree or a Vercel email function after deployment.
          </p>
        </div>
      </section>

      <section className="container-lux pb-24">
        <iframe className="h-[460px] w-full rounded-3xl border border-white/10" src={site.mapEmbed} loading="lazy" title="Papa Kid Gents Salon map" />
      </section>
    </div>
  );
}
