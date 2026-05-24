export default function ServiceCard({ title, price, description, image, compact = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-luxury transition duration-300 hover:-translate-y-1 hover:border-gold/50">
      {image && <img className="h-48 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src={image} alt="" />}
      <div className="flex flex-1 flex-col p-6">
        <div className={`mb-4 grid items-start gap-4 ${compact ? "grid-cols-1" : "grid-cols-[1fr_auto]"}`}>
          <h3 className="min-w-0 font-display text-2xl font-black leading-tight">{title}</h3>
          <span className="inline-flex min-w-[74px] shrink-0 items-center justify-center rounded-2xl bg-gold px-3 py-2 text-center text-sm font-black leading-tight text-ink">
            AED<br />{price}
          </span>
        </div>
        <p className="mt-auto leading-7 text-white/62">{description}</p>
      </div>
    </article>
  );
}
