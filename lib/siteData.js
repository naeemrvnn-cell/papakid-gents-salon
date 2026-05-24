export const site = {
  name: "Papa Kid Gents Salon",
  location: "Al Warqa 1, Dubai",
  address: "Shop No. 17, Emerald Avenue Building, Al Warqa 1, Dubai, UAE",
  phone: "+971505881275",
  instagram: "https://www.instagram.com/papakid.salon?igsh=MTF4dzN3ZWJ4aTF0NQ==",
  mapUrl: "https://maps.app.goo.gl/fJChZ5S9j12F6iuD7?g_st=ic",
  mapEmbed: "https://www.google.com/maps?q=Shop%20No.%2017%20Emerald%20Avenue%20Building%20Al%20Warqa%201%20Dubai&output=embed"
};

export const images = {
  hero: "https://images.unsplash.com/photo-1582771498000-8ad44e6c84db?auto=format&fit=crop&w=1800&q=85",
  interior: "https://images.unsplash.com/photo-1641318175316-795cd2db99f8?auto=format&fit=crop&w=1400&q=85",
  beard: "https://images.unsplash.com/photo-1717089256239-dc2ed4d9dfc6?auto=format&fit=crop&w=1400&q=85",
  chair: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=85",
  fade: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=85",
  tools: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1400&q=85"
};

export const serviceGroups = [
  {
    id: "hair",
    title: "Hair Services",
    image: images.hero,
    services: [
      ["Haircut", 30, "Clean cuts, sharp fades, and everyday styles finished with precision."],
      ["Haircut Girls", 45, "Neat styling service with a polished salon finish."],
      ["Head Shave Newborn", 50, "Gentle newborn head shave handled with extra care."],
      ["Hair Wash & Blow Dry", 15, "Refreshing wash and controlled blow-dry finish."],
      ["Hair Color & Wash", 40, "Fresh color application completed with a clean wash."],
      ["Hair Softening", 100, "Smoother texture and easier styling for a premium look."],
      ["Hair Straightening", 100, "Sleek straightening service for a refined finish."],
      ["Head Massage & Wash", 25, "Relaxing scalp massage with a fresh wash."],
      ["Dandruff Treatment", 75, "Targeted scalp care for cleaner, healthier-looking hair."],
      ["Keratin Hair Spa", 150, "Keratin spa treatment for smoother, groomed hair."],
      ["Hair Protein Treatment", 200, "Deep protein care for strength, shine, and control."]
    ]
  },
  {
    id: "beard",
    title: "Beard Services",
    image: images.beard,
    services: [
      ["Beard Shave/Trimming", 25, "Clean trimming and shaving for a balanced beard shape."],
      ["Beard Styling", 30, "Detailed lines, shape, and finishing for a premium profile."],
      ["Beard Color", 30, "Beard color service for a fuller, sharper appearance."]
    ]
  },
  {
    id: "skin",
    title: "Skin Care",
    image: images.chair,
    services: [
      ["Threading", 15, "Precise facial cleanup for crisp grooming details."],
      ["Face Waxing", 30, "Smooth facial waxing for a clean, refined finish."],
      ["Nose Mask", 5, "Quick pore-refreshing nose mask add-on."],
      ["Face Full Mask", 40, "Full face mask treatment for refreshed skin."],
      ["Charcoal Mask", 50, "Deep cleansing charcoal care for a cleaner look."],
      ["Face Scrub & Steam", 50, "Scrub and steam treatment for renewed skin texture."],
      ["Gold Facial", 120, "Premium facial care with a bright, fresh finish."],
      ["Diamond Facial", 150, "Luxury facial treatment for a polished glow."]
    ]
  },
  {
    id: "addons",
    title: "Add-ons",
    image: images.tools,
    services: [
      ["Paraffin Treatment", 220, "Premium paraffin care for soft, refreshed skin."]
    ]
  }
];

export const packages = [
  ["Executive Refresh", "AED 89", ["Haircut", "Beard trim", "Face scrub"], "Best for weekly grooming"],
  ["VIP Grooming Membership", "AED 149/month", ["2 Haircuts", "2 Beard trims", "Priority booking", "Facial discounts"], "Most popular"],
  ["Dubai Grooming Ritual", "AED 249", ["Haircut", "Keratin hair spa", "Diamond facial", "Foot spa"], "Premium full-care session"]
];

export const reviews = [
  ["Ahmed R.", "Clean fades, and the staff understand modern styles."],
  ["Khalid", "Premium feel without overpaying. Beard shaping was very sharp."],
  ["Faisal", "Great location in Al Warqa and easy to access. My regular salon now."]
];
