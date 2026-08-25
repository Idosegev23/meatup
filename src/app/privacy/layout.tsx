import type { Metadata } from "next";
import { ogImage, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description:
    "מדיניות הפרטיות של אתר מיט אפ - איזה מידע נאסף באתר, כיצד הוא נשמר ומהן זכויותיכם.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "מדיניות פרטיות | MEATUP",
    description: "איזה מידע נאסף באתר מיט אפ, כיצד הוא נשמר ומהן זכויותיכם.",
    url: "/privacy",
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
    title: "מדיניות פרטיות | MEATUP",
    description: "איזה מידע נאסף באתר מיט אפ, כיצד הוא נשמר ומהן זכויותיכם.",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("מדיניות פרטיות", "/privacy")) }}
      />
      {children}
    </>
  );
}
