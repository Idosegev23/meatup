import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "צרו קשר עם מיט אפ - כתובת, שעות פתיחה, טלפון והזמנת מקום. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "צור קשר | MEATUP",
    description: "כתובת, שעות פתיחה, טלפון והזמנת מקום. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
