import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { images, reviews, site } from "@/lib/siteData";
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
          Walk-in grooming services available daily in Al Warqa.
        </div>
        <div className="container-lux relative z-10 grid min-h-[calc(100vh-7rem)] items-center py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">Dubai luxury-inspired grooming</p>
            <h1 className="max-w-4xl font-display text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              Premium Grooming Experience in Dubai
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Haircuts, beard styling, facials, and grooming services designed for modern men. Walk-ins are welcome.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="gold-button" href={site.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
              <Link className="dark-button" href="/services">View Services</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="glass ml-auto max-w-md rounded-3xl p-5">
              <img className="h-72 w-full rounded-2xl object-cover" src={images.beard} alt="Beard styling service" />
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
            ["4.1★", "Google Reviews"],
            ["500+", "Happy Clients"],
            ["Al Warqa 1", "Dubai Location"],
            ["Walk-ins", "Served Daily"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-ink/55 p-5 text-center">
              <div className="font-display text-3xl font-black text-gold">{value === "500+" ? <Counter value={5000} suffix="+" /> : value}</div>
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
            <ServiceCard key={title} title={title} price={price} description={description} image={image} compact />
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
                <p className="mt-5 leading-7 text-white/70">"{text}"</p>
                <strong className="mt-5 block">{name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title max-w-3xl">Premium grooming moments.</h2>
        </Reveal>
        <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <img key={image} className={`h-full w-full rounded-3xl border border-white/10 object-cover shadow-luxury ${index === 0 || index === 4 ? "lg:row-span-2" : ""}`} src={image} alt="Papa Kid salon gallery" />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Before you visit.</h2>
          </Reveal>
          <div className="grid gap-4">
            {[
              ["Do I need an appointment?", "No. The salon currently serves walk-in customers only."],
              ["Where is the salon located?", "Shop No. 17, Emerald Avenue Building, Al Warqa 1, Dubai."],
              ["Can I check prices before visiting?", "Yes. The Services page lists all current services and AED prices."],
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

      <section className="container-lux py-24">
        <div className="glass rounded-3xl p-6 lg:p-10">
          <p className="eyebrow">Location</p>
          <h2 className="section-title">Visit us in Al Warqa.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/65">{site.address}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a className="gold-button" href={site.mapUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
            <a className="dark-button" href={`tel:${site.tel}`}>Call</a>
          </div>
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gold p-8 text-ink sm:p-12">
          <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">Ready for Your Next Fresh Look?</h2>
          <p className="mt-4 max-w-2xl text-lg font-bold text-ink/70">Walk in today for premium grooming in Al Warqa 1, Dubai.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-6 py-3 font-black text-white transition duration-300 hover:-translate-y-0.5" href="/services">View Services</Link>
            <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-ink/25 px-6 py-3 font-black transition duration-300 hover:-translate-y-0.5" href={site.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
          </div>
        </div>
      </section>
    </>
  );
}
