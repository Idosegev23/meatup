import { config } from "@/data/config";

/** Production site URL. Override per-environment via NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meatup.co.il";

/**
 * The branded share card rendered by src/app/opengraph-image.tsx.
 *
 * Next merges metadata shallowly, so any route that declares its own
 * `openGraph` object drops the images the root supplied — which is why every
 * inner page has to spread this in explicitly instead of inheriting it.
 */
export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "MEATUP — Grill Burger & More",
  type: "image/png",
} as const;

/**
 * Restaurant structured data (schema.org/Restaurant) for Google rich results
 * and local SEO. Saturday-night hours are intentionally omitted because they
 * are variable ("one hour after Shabbat") and can't be encoded reliably.
 *
 * `geo` is intentionally absent: we have no verified lat/long for the address,
 * and inventing coordinates would put the wrong pin on the map. Add it here
 * once the real values are taken from the Google Business Profile.
 *
 * Street address and opening hours are literals rather than reads from
 * `config`, because schema.org needs them split into fields that `config`
 * stores as single display strings — update both when details change.
 */
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "MEATUP",
  alternateName: ["מיט אפ", "MEATUP Grill Burger & More"],
  description:
    "מיט אפ - מסעדת בשרים והמבורגרים כשרה בבני ברק. סטייקים, המבורגרים ומנות גריל בהשגחת הרבנות בני ברק.",
  slogan: config.tagline,
  url: SITE_URL,
  image: [
    `${SITE_URL}/opengraph-image`,
    `${SITE_URL}/imgs/dishes/Meat-up-burger.webp`,
    `${SITE_URL}/imgs/dishes/Ribeye-steak-antricot.webp`,
    `${SITE_URL}/imgs/dishes/Midtown-burger.webp`,
  ],
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
  hasMap: config.mapLink,
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
  sameAs: [config.instagram, config.facebook, config.woltUrl],
  potentialAction: [
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: config.tabitUrl,
        inLanguage: "he-IL",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "FoodEstablishmentReservation", name: "הזמנת מקום" },
    },
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: config.tabitDeliveryUrl,
        inLanguage: "he-IL",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: [
        "https://schema.org/OnSitePickup",
        "https://schema.org/ParcelService",
      ],
    },
  ],
};
