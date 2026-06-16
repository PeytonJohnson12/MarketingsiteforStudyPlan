import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions about the StudyPlan Canvas planner, answered — how it reads your Canvas assignments, privacy, setup time, and pricing.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main id="main">
      <FAQ />
    </main>
  );
}
