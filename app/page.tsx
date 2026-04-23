import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { ExpelHighlight } from "@/components/home/ExpelHighlight";
import { WhyUs } from "@/components/home/WhyUs";
import { Sectors } from "@/components/home/Sectors";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <SolutionsGrid />
      <ExpelHighlight />
      <WhyUs />
      <Sectors />
      <CtaSection />
    </>
  );
}
