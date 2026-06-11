import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "StudyPlan pricing — start free, upgrade when you want more.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main id="main">
      <Pricing />
    </main>
  );
}
