import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "StudyPlan — Never miss what's due",
    template: "%s · StudyPlan",
  },
  description: site.description,
  applicationName: "StudyPlan",
  keywords: [
    "Canvas planner", "study planner", "assignment tracker", "college productivity",
    "Canvas LMS", "deadline tracker", "student schedule", "daily study plan",
  ],
  authors: [{ name: "StudyPlan" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "StudyPlan",
    title: "StudyPlan — Never miss what's due",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyPlan — Never miss what's due",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f4",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StudyPlan",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "StudyPlan reads your Canvas assignments and builds one daily plan. See what to do today, and never miss what's due.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: site.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-on"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
