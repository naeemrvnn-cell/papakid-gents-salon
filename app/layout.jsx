import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/siteData";

export const metadata = {
  title: {
    default: "Papa Kid Gents Salon | Premium Grooming Experience in Dubai",
    template: "%s | Papa Kid Gents Salon"
  },
  description: "Premium gents salon in Al Warqa 1, Dubai for haircuts, beard styling, facials, hair treatments, skin care, and grooming packages.",
  keywords: ["Dubai gents salon", "Al Warqa barber", "Papa Kid Gents Salon", "men grooming Dubai", "haircut Dubai", "beard styling Dubai"],
  openGraph: {
    title: "Papa Kid Gents Salon",
    description: "Premium grooming experience in Al Warqa 1, Dubai.",
    type: "website",
    locale: "en_AE"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    address: site.address,
    areaServed: "Dubai",
    url: "https://papakid-gents-salon.vercel.app",
    sameAs: [site.instagram],
    priceRange: "AED 5 - AED 220"
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
