import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LoadingProvider } from "@/context/LoadingContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { Analytics } from "@vercel/analytics/next";
import { restaurantJsonLd } from "@/lib/seo";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "MEATUP | מסעדת בשרים והמבורגרים כשרה בבני ברק",
    template: "%s | MEATUP",
  },
  description:
    "מיט אפ - מסעדת בשרים והמבורגרים כשרה בבני ברק. סטייקים, המבורגרים ומנות גריל בהשגחת הרבנות בני ברק. בר כוכבא 21, מתחם ה-BBC. הזמנת מקום, משלוחים ואיסוף עצמי.",
  applicationName: "MEATUP",
  authors: [{ name: "MEATUP" }],
  creator: "MEATUP",
  publisher: "MEATUP",
  category: "restaurant",
  keywords: [
    "מסעדת בשרים",
    "המבורגר",
    "בני ברק",
    "כשר",
    "MEATUP",
    "מיט אפ",
    "גריל",
    "סטייק",
    "מסעדה כשרה",
    "מסעדה כשרה בבני ברק",
    "המבורגר כשר",
    "מתחם BBC",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://meatup.co.il"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  // Icons come from the App Router file conventions — src/app/favicon.ico,
  // icon.png and apple-icon.png. Declaring them here as well produced duplicate
  // and contradictory <link> tags, so this field is intentionally omitted.
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "MEATUP",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, address: true },
  openGraph: {
    title: "MEATUP | מסעדת בשרים והמבורגרים כשרה בבני ברק",
    description:
      "סטייקים, המבורגרים ומנות גריל בהשגחת הרבנות בני ברק. בר כוכבא 21, מתחם ה-BBC, בני ברק.",
    url: "/",
    siteName: "MEATUP",
    locale: "he_IL",
    type: "website",
    // og:image is provided by src/app/opengraph-image.tsx (brand share card)
  },
  twitter: {
    card: "summary_large_image",
    title: "MEATUP | מסעדת בשרים והמבורגרים כשרה בבני ברק",
    description: "סטייקים, המבורגרים ומנות גריל בהשגחת הרבנות בני ברק.",
  },
  other: { "msapplication-TileColor": "#1A1A1A" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body
        className={`${heebo.variable} antialiased bg-charcoal text-off-white font-heebo`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <PageLoaderWrapper />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <AccessibilityWidget />
          </LoadingProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
