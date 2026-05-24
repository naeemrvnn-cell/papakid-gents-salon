import Reveal from "@/components/Reveal";
import { images } from "@/lib/siteData";

export const metadata = {
  title: "About",
  description: "Learn about Papa Kid Gents Salon, a premium Dubai-inspired grooming destination in Al Warqa 1."
};

const timeline = [
  ["Vision", "Create a modern grooming space where every client leaves sharper, fresher, and more confident."],
  ["Craft", "Blend classic barber precision with current Dubai style, clean fades, beard shaping, facials, and treatments."],
  ["Experience", "Offer premium presentation, clear pricing, and approachable care for everyday grooming."]
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="container-lux grid gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h1 className="font-display text-5xl font-black leading-none sm:text-7xl">A Dubai grooming brand built around detail.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Papa Kid Gents Salon is created for men who want a clean, modern, and reliable grooming experience in Al Warqa. The salon brings together haircutting, beard care, skin care, and treatment services with a premium yet affordable feel.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <img className="h-[520px] w-full rounded-3xl border border-white/10 object-cover shadow-luxury" src={images.interior} alt="Premium salon interior" />
        </Reveal>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="container-lux">
          <Reveal>
            <p className="eyebrow">Salon Vision</p>
            <h2 className="section-title max-w-4xl">Modern grooming for Dubai lifestyle: fast, polished, and confidence-led.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {timeline.map(([title, text], index) => (
              <article key={title} className="glass rounded-3xl p-7">
                <span className="font-display text-5xl font-black text-gold">0{index + 1}</span>
                <h3 className="mt-5 font-display text-3xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-white/64">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="section-title max-w-3xl">Professional grooming experts.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Fade Specialist", "Beard Stylist", "Skin Care Expert"].map((role, index) => (
            <article key={role} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-luxury">
              <img className="h-80 w-full object-cover" src={[images.hero, images.beard, images.chair][index]} alt={role} />
              <div className="p-6">
                <h3 className="font-display text-2xl font-black">{role}</h3>
                <p className="mt-2 text-white/60">Focused on detail, comfort, and a polished finish.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
