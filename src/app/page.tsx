import Spacing from "@/components/Spacing/Spacing";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Sponsors from "@/components/sponsorSection/Sponsors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <Spacing size="sm" />
      <Sponsors />
    </main>
  );
}
