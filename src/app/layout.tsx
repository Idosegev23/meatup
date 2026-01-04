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
  openGraph: {
    title: "MEATUP | Grill Burger & More",
    description: "מיט אפ - המבורגריה ובשרים פרימיום בבני ברק",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
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
