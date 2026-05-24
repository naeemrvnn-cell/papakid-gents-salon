import { site } from "@/lib/siteData";

export const metadata = {
  title: "Contact",
  description: "Visit Papa Kid Gents Salon in Al Warqa 1, Dubai, or share service feedback, suggestions, and complaints."
};

const inputClass = "min-h-12 rounded-xl border border-white/10 bg-ink px-4 text-white outline-none focus:border-gold";
const textareaClass = "min-h-36 rounded-xl border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-gold";

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="container-lux py-16">
        <p className="eyebrow">Contact</p>
        <h1 className="font-display text-5xl font-black leading-none sm:text-7xl">Visit Papa Kid Gents Salon.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          The salon currently serves walk-in customers only. Use the forms below to share feedback, suggestions, or complaints.
        </p>
      </section>

      <section className="container-lux grid gap-6 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-6 self-start">
          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Visit the salon</h2>
            <p className="mt-4 leading-8 text-white/65">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="gold-button" href={site.mapUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
              <a className="dark-button" href={`tel:${site.tel}`}>Call</a>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Business hours</h2>
            <div className="mt-5 grid gap-3 text-white/66">
              <div className="flex justify-between gap-4"><span>Monday - Sunday</span><strong className="text-white">09:00 AM - 12:00 AM</strong></div>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-3xl font-black">Social</h2>
            <a className="mt-5 inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 font-black text-gold transition duration-300 hover:-translate-y-0.5 hover:border-gold" href={site.instagram} target="_blank" rel="noreferrer">
              Follow us on Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass rounded-3xl p-5 sm:p-7">
            <h2 className="font-display text-3xl font-black">Service feedback or suggestion</h2>
            <p className="mt-3 leading-7 text-white/60">Tell us what you enjoyed or what you would like the salon to improve.</p>
            <form className="mt-6 grid gap-4" action="https://formspree.io/f/mqejlglv" method="post">
              <label className="grid gap-2 text-sm font-bold text-gold">
                Name
                 <input className={inputClass} name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Email for response
                <input className={inputClass} name="email" type="email" placeholder="your@email.com" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Service visited for
                <select className={inputClass} name="service">
                  <option>Haircut</option>
                  <option>Beard Styling</option>
                  <option>Skin Care</option>
                  <option>Hair Treatment</option>
                  <option>Add-on Service</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Feedback / suggestion
                <textarea className={textareaClass} name="feedback" placeholder="Share your feedback or suggestion" />
              </label>
              <button className="gold-button w-full" type="submit">Submit Feedback</button>
            </form>
          </div>

          <div className="glass rounded-3xl p-5 sm:p-7">
            <h2 className="font-display text-3xl font-black">Service or staff complaint</h2>
            <p className="mt-3 leading-7 text-white/60">Use this form for concerns about service quality, waiting time, staff behavior, or salon experience.</p>
            <form className="mt-6 grid gap-4" action="https://formspree.io/f/xvzybpko" method="post">
              <label className="grid gap-2 text-sm font-bold text-gold">
                Name
                 <input className={inputClass} name="complaintName" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Email for response
                <input className={inputClass} name="complaintEmail" type="email" placeholder="your@email.com" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Visit date
                <input className={inputClass} name="visitDate" type="date" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Complaint category
                <select className={inputClass} name="category">
                  <option>Service Quality</option>
                  <option>Staff Behavior</option>
                  <option>Waiting Time</option>
                  <option>Pricing Concern</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-gold">
                Complaint details
                <textarea className={textareaClass} name="complaint" placeholder="Describe the issue so the salon can review it" />
              </label>
              <button className="gold-button w-full" type="submit">Submit Complaint</button>
            </form>
          </div>

          <p className="text-sm leading-6 text-white/50">
            You will receive a response within 5 business days.
          </p>
        </div>
      </section>
    </div>
  );
}
