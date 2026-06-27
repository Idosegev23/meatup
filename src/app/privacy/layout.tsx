import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר מיט אפ.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "מדיניות פרטיות | MEATUP",
    url: "/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
