import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Security } from "@/components/sections/Security";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <ProductDemo />
      <Features />
      <HowItWorks />
      <Security />
      <EarlyAccess />
      <FinalCTA />
    </main>
  );
}
