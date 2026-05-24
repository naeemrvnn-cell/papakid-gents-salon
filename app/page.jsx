import BookingModal from "@/components/BookingModal";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { images, packages, reviews, serviceGroups, site } from "@/lib/siteData";
import Link from "next/link";

const featuredServices = [
  ["Haircuts", 30, "Sharp cuts, clean fades, and modern styles for Dubai men.", images.hero],
  ["Beard Styling", 25, "Precise shaping, trimming, and line work for a refined profile.", images.beard],
  ["Hair Treatments", 75, "Keratin, protein care, dandruff treatment, and texture control.", images.tools],
  ["Skin Care", 15, "Threading, waxing, masks, facials, scrub, and steam.", images.chair],
  ["Grooming Packages", 89, "Curated combos for busy professionals and regular clients.", images.interior]
];

const gallery = [images.hero, images.beard, images.interior, images.fade, images.chair, images.tools];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28">
        <img className="absolute inset-0 h-full w-full object-cover opacity-42" src={images.hero} alt="Luxury men's grooming and haircut service" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
        <div className="absolute inset-x-0 top-20 bg-gold py-2 text-center text-sm font-black text-ink">
          Limited-time grooming combos available this month in Al Warqa.
        </div>
        <div className="container-lux relative z-10 grid min-h-[calc(100vh-7rem)] items-center py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">Dubai luxury-inspired grooming</p>
            <h1 className="max-w-4xl font-display text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              Premium Grooming Experience in Dubai
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Haircuts, beard styling, facials, and grooming services designed for modern men.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <BookingModal />
              <Link className="dark-button" href="/services">View Services</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="glass ml-auto max-w-md rounded-3xl p-5">
              <img className="h-72 w-full rounded-2xl object-cover" src={images.beard} alt="Beard styling transformation" />
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/[0.06] p-4"><strong className="text-gold">Fade</strong><span className="block text-white/60">Sharp profile finish</span></div>
                <div className="rounded-2xl bg-white/[0.06] p-4"><strong className="text-gold">Beard</strong><span className="block text-white/60">Clean defined lines</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-lux -mt-10 relative z-20">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.07] p-4 shadow-luxury backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["4.8★", "Google Reviews"],
            ["5000+", "Happy Clients"],
            ["Al Warqa", "Dubai Location"],
            ["Pro", "Grooming Experts"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-ink/55 p-5 text-center">
              <div className="font-display text-3xl font-black text-gold">{value === "5000+" ? <Counter value={5000} suffix="+" /> : value}</div>
              <div className="mt-1 text-sm font-bold text-white/62">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="section-title max-w-3xl">Premium essentials for the modern man.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {featuredServices.map(([title, price, description, image]) => (
            <ServiceCard key={title} title={title} price={price} description={description} image={image} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux">
          <Reveal>
            <p className="eyebrow">Transformations</p>
            <h2 className="section-title max-w-3xl">Before and after confidence, styled for Dubai.</h2>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
            {["Haircut transformation", "Beard styling transformation", "Keratin treatment result"].map((title, index) => (
              <article key={title} className="glass min-w-[290px] snap-start overflow-hidden rounded-3xl sm:min-w-[420px]">
                <div className="grid grid-cols-2">
                  <img className="h-72 w-full object-cover grayscale" src={gallery[index]} alt={`${title} before`} />
                  <img className="h-72 w-full object-cover" src={gallery[index + 2]} alt={`${title} after`} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-black">{title}</h3>
                  <p className="mt-2 text-white/60">A polished finish built around shape, texture, and detail.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Memberships</p>
          <h2 className="section-title max-w-3xl">Stay sharp every month.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map(([name, price, perks, badge]) => (
            <article key={name} className="glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-gold/50">
              <p className="mb-5 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-black uppercase text-ink">{badge}</p>
              <h3 className="font-display text-3xl font-black">{name}</h3>
              <p className="mt-4 text-3xl font-black text-gold">{price}</p>
              <ul className="mt-6 grid gap-3 text-white/70">
                {perks.map((perk) => <li key={perk}>✓ {perk}</li>)}
              </ul>
              <div className="mt-7"><BookingModal label="Choose Plan" className="gold-button w-full" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title">Trusted by nearby Dubai residents.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(([name, text]) => (
              <article key={name} className="glass rounded-3xl p-6">
                <p className="text-gold">★★★★★</p>
                <p className="mt-5 leading-7 text-white/70">“{text}”</p>
                <strong className="mt-5 block">{name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title max-w-3xl">Instagram-style grooming moments.</h2>
        </Reveal>
        <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <img key={image} className={`h-full w-full rounded-3xl border border-white/10 object-cover shadow-luxury ${index === 0 || index === 4 ? "lg:row-span-2" : ""}`} src={image} alt="Papa Kid salon gallery" />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Loyalty</p>
            <h2 className="section-title">Rewards for regular grooming.</h2>
            <p className="mt-5 leading-8 text-white/65">
              Keep your look consistent with priority booking, package savings, and member-only treatment offers.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Every 5th haircut reward", "Priority weekend booking", "Facial and spa discounts", "Combo package upgrades"].map((item) => (
              <div key={item} className="glass rounded-3xl p-6">
                <span className="text-3xl text-gold">✦</span>
                <h3 className="mt-4 font-display text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Reels</p>
          <h2 className="section-title max-w-3xl">Quick cuts, fades, and finish shots.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Fade detail", images.fade],
            ["Beard line-up", images.beard],
            ["Salon atmosphere", images.interior]
          ].map(([label, image]) => (
            <article key={label} className="group relative h-[430px] overflow-hidden rounded-3xl border border-white/10 shadow-luxury">
              <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={label} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <strong className="font-display text-2xl">{label}</strong>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink">▶</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Questions before you book?</h2>
          </Reveal>
          <div className="grid gap-4">
            {[
              ["Do I need an appointment?", "Walk-ins are welcome, but WhatsApp booking is recommended for faster service."],
              ["Where is the salon located?", "Shop No. 17, Emerald Avenue Building, Al Warqa 1, Dubai."],
              ["Do you offer packages?", "Yes, combo packages and monthly grooming memberships are promoted on the home page."],
              ["What services are best for a full refresh?", "A haircut, beard styling, face scrub and steam, plus foot spa is a strong complete grooming session."]
            ].map(([question, answer]) => (
              <details key={question} className="glass rounded-2xl p-5">
                <summary className="cursor-pointer font-display text-xl font-black text-white">{question}</summary>
                <p className="mt-4 leading-7 text-white/65">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="glass grid gap-8 rounded-3xl p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Visit us in Al Warqa.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/65">{site.address}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a className="gold-button" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a className="dark-button" href={`tel:${site.tel}`}>Call</a>
            </div>
          </div>
          <iframe className="min-h-80 w-full rounded-2xl border-0" src={site.mapEmbed} loading="lazy" title="Papa Kid Gents Salon location" />
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gold p-8 text-ink shadow-gold sm:p-12">
          <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">Ready for Your Next Fresh Look?</h2>
          <div className="mt-7 flex flex-wrap gap-4">
            <BookingModal label="Book Now" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-6 py-3 font-black text-white transition hover:-translate-y-0.5" />
            <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-ink/25 px-6 py-3 font-black" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
