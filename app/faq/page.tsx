import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about StudyPlan — Canvas, privacy, setup, and pricing.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main id="main">
      <FAQ />
    </main>
  );
}
