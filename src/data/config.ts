export const config = {
  // Restaurant Info
  name: "Meat Up",
  tagline: "GRILL BURGER & MORE",
  
  // Contact Info
  phone: "03-5035053",
  phoneLink: "tel:+97235035053",
  whatsapp: "97235035053",
  whatsappLink: "https://wa.me/97235035053",
  
  // Address
  address: {
    he: "בר כוכבא 21, בני ברק",
    en: "21 Bar Kochva St, Bnei Brak"
  },
  addressLine2: {
    he: "מתחם ה-BBC, בני ברק",
    en: "BBC Complex, Bnei Brak"
  },

  // Hours
  hours: {
    he: "א'-ה' 11:00-00:00 | מוצ\"ש משעה לאחר צאת השבת ועד חצות או עד אחרון הסועדים",
    en: "Sun-Thu 11:00-00:00 | Sat night: from 1hr after Shabbat ends until midnight or last guests"
  },
  
  // Tabit Reservation
  tabitUrl: "https://tabitisrael.co.il/site/meat-up",
  
  // Tabit Delivery/Pickup
  tabitDeliveryUrl: "https://tabitisrael.co.il/tabit-order?siteName=meatup&step=enter",

  // Wolt Delivery
  woltUrl: "https://wolt.com/en/isr/tel-aviv/restaurant/meat-up-bnei-brak",
  
  // Kosher
  kosher: {
    he: "כשר בהשגחת הרבנות בני ברק",
    en: "Kosher under Bnei Brak Rabbinate supervision"
  },
  
  // Social
  instagram: "https://instagram.com/meatup.bb",
  facebook: "https://facebook.com/meatup.bb",
  
  // Google Maps - Bar Kochva 21, Bnei Brak (BBC Complex)
  mapEmbed: "https://maps.google.com/maps?q=בר+כוכבא+21+בני+ברק&hl=iw&z=16&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=בר+כוכבא+21+בני+ברק",
  wazeLink: "https://waze.com/ul?q=בר+כוכבא+21+בני+ברק&navigate=yes"
} as const;
