import type { Metadata } from "next";
import { ogImage, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של אתר מיט אפ - התאמות הנגישות באתר ובסניף, ודרכי פנייה לרכז הנגישות.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "הצהרת נגישות | MEATUP",
    description: "התאמות הנגישות באתר ובסניף של מיט אפ ודרכי פנייה.",
    url: "/accessibility",
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
    title: "הצהרת נגישות | MEATUP",
    description: "התאמות הנגישות באתר ובסניף של מיט אפ ודרכי פנייה.",
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("הצהרת נגישות", "/accessibility")) }}
      />
      {children}
    </>
  );
}
