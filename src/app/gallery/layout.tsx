import type { Metadata } from "next";
import { ogImage, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "גלריה",
  description:
    "גלריית התמונות של מסעדת מיט אפ - המנות, הבשרים והאווירה שלנו בבני ברק.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "גלריה | MEATUP",
    description: "המנות, הבשרים והאווירה של מיט אפ בבני ברק.",
    url: "/gallery",
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
    title: "גלריה | MEATUP",
    description: "המנות, הבשרים והאווירה של מיט אפ בבני ברק.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("גלריה", "/gallery")) }}
      />
      {children}
    </>
  );
}
