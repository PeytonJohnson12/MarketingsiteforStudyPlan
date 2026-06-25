import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Navo pricing — the Canvas study planner is free for 7 days, then a simple monthly subscription. Cancel anytime.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main id="main">
      <Pricing />
    </main>
  );
}
