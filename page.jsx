import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { serviceGroups } from "@/lib/siteData";

export const metadata = {
  title: "Services & Prices",
  description: "View Papa Kid Gents Salon service prices for haircuts, beard styling, skin care, hair treatments, facials, and add-ons in Al Warqa, Dubai."
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="container-lux py-16">
        <Reveal>
          <p className="eyebrow">Services & Prices</p>
          <h1 className="font-display text-5xl font-black leading-none sm:text-7xl">Premium grooming, transparent pricing.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Explore hair, beard, skin care, and add-on services designed for modern men in Dubai.
          </p>
        </Reveal>
      </section>

      <section className="container-lux pb-24">
        <div className="sticky top-20 z-20 mb-8 flex gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-ink/80 p-3 backdrop-blur-xl">
          {serviceGroups.map((group) => (
            <a key={group.id} className="whitespace-nowrap rounded-xl bg-gold px-5 py-3 text-sm font-black text-ink" href={`#${group.id}`}>
              {group.title}
            </a>
          ))}
        </div>

        <div className="grid gap-16">
          {serviceGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-36">
              <div className="mb-7 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <img className="h-72 w-full rounded-3xl border border-white/10 object-cover shadow-luxury" src={group.image} alt={group.title} />
                <div>
                  <p className="eyebrow">{group.title}</p>
                  <h2 className="section-title">{group.title}</h2>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.services.map(([name, price, description]) => (
                  <ServiceCard key={name} title={name} price={price} description={description} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
