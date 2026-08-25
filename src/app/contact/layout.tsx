import type { Metadata } from "next";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "צרו קשר עם מיט אפ - כתובת, שעות פתיחה, טלפון והזמנת מקום. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "צור קשר | MEATUP",
    description: "כתובת, שעות פתיחה, טלפון והזמנת מקום. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
    url: "/contact",
    // siteName/locale/type are repeated here on purpose: Next merges metadata
    // shallowly, so a route-level openGraph replaces the root one outright.
    siteName: "MEATUP",
    locale: "he_IL",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
    title: "צור קשר | MEATUP",
    description: "כתובת, שעות פתיחה, טלפון והזמנת מקום. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
