import { Metadata } from "next";
import HeroSection from "@/app/components/home/hero";
import WhyNurikaSection from "@/app/components/home/innovation";
import SolutionSection from "@/app/components/home/solution";
import WebResultSection from "@/app/components/home/web-result";

export const metadata: Metadata = {
  title: "Nurika Labs | AI & Deep-Tech Innovation Lab",
  description:
    "Build intelligent software, AI systems, and automation solutions. Nurika Labs architects the future for startups, enterprises, and innovators worldwide.",
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Nurika Labs Section */}
      <WhyNurikaSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Web Result Section */}
      <WebResultSection />
    </main>
  );
}
