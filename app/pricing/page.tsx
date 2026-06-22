import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Navo pricing — the Canvas study planner is free to start, no card needed. Upgrade when you want more.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main id="main">
      <Pricing />
    </main>
  );
}
