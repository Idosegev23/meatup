import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תפריט",
  description:
    "התפריט המלא של מיט אפ - המבורגרים, סטייקים ומנות גריל, סלטים, קינוחים ויינות. כשר בהשגחת הרבנות בני ברק.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "תפריט | MEATUP",
    description: "המבורגרים, סטייקים, מנות גריל, סלטים, קינוחים ויינות - כשר בבני ברק.",
    url: "/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
