export default function ServiceCard({ title, price, description, image }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-luxury transition duration-300 hover:-translate-y-1 hover:border-gold/50">
      {image && <img className="h-48 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src={image} alt="" />}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-black">{title}</h3>
          <span className="rounded-full bg-gold px-3 py-1 text-sm font-black text-ink">AED {price}</span>
        </div>
        <p className="leading-7 text-white/62">{description}</p>
      </div>
    </article>
  );
}
