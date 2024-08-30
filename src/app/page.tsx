import About from "@/components/About/About";
import Pricing from "@/components/Pricing/Pricing";
import Spacing from "@/components/Spacing/Spacing";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Sponsors from "@/components/sponsorSection/Sponsors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <Sponsors />
      <About />
      <Pricing />
      <Footer />
    </main>
  );
}
