import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LoadingProvider } from "@/context/LoadingContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEATUP | Grill Burger & More",
  description: "מיט אפ - המבורגריה ובשרים פרימיום בבני ברק. תפריט כשר בהשגחת הרבנות.",
  keywords: ["מסעדת בשרים", "המבורגר", "בני ברק", "כשר", "MEATUP", "מיט אפ", "גריל"],
  icons: {
    icon: [
      { url: '/logoicon.png' },
      { url: '/logoicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logoicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  openGraph: {
    title: "MEATUP | Grill Burger & More",
    description: "מיט אפ - המבורגריה ובשרים פרימיום בבני ברק",
    locale: "he_IL",
    type: "website",
    images: ['/logoicon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/logoicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logoicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logoicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0a1628" />
        <meta name="theme-color" content="#0a1628" />
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
      </body>
    </html>
  );
}
