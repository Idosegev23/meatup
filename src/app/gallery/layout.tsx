import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גלריה",
  description:
    "גלריית התמונות של מסעדת מיט אפ - המנות, הבשרים והאווירה שלנו בבני ברק.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "גלריה | MEATUP",
    description: "המנות, הבשרים והאווירה של מיט אפ בבני ברק.",
    url: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
