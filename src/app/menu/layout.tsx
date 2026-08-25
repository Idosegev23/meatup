import type { Metadata } from "next";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "תפריט",
  description:
    "התפריט המלא של מיט אפ - המבורגרים, סטייקים ומנות גריל, סלטים, קינוחים ויינות. כשר בהשגחת הרבנות בני ברק.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "תפריט | MEATUP",
    description: "המבורגרים, סטייקים, מנות גריל, סלטים, קינוחים ויינות - כשר בבני ברק.",
    url: "/menu",
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
    title: "תפריט | MEATUP",
    description: "המבורגרים, סטייקים, מנות גריל, סלטים, קינוחים ויינות - כשר בבני ברק.",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
