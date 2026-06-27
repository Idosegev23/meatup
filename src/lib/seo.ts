import { config } from "@/data/config";

/** Production site URL. Override per-environment via NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meatup.co.il";

/**
 * Restaurant structured data (schema.org/Restaurant) for Google rich results
 * and local SEO. Saturday-night hours are intentionally omitted because they
 * are variable ("one hour after Shabbat") and can't be encoded reliably.
 */
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "MEATUP",
  alternateName: "מיט אפ",
  description:
    "מיט אפ - המבורגריה ובשרים פרימיום בבני ברק. תפריט כשר בהשגחת הרבנות בני ברק.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/logofull.png`,
  telephone: config.phoneLink.replace("tel:", ""),
  servesCuisine: ["Burgers", "Grill", "Steakhouse", "Kosher", "Israeli"],
  priceRange: "₪₪",
  currenciesAccepted: "ILS",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "בר כוכבא 21",
    addressLocality: "בני ברק",
    addressRegion: "מחוז תל אביב",
    addressCountry: "IL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "00:00",
    },
  ],
  acceptsReservations: config.tabitUrl,
  hasMenu: `${SITE_URL}/menu`,
  sameAs: [config.instagram, config.facebook],
};
