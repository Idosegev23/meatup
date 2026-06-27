import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר מיט אפ.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "הצהרת נגישות | MEATUP",
    url: "/accessibility",
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
