import About from "@/components/About/About";
import Form from "@/components/Form/Form";
import Pricing from "@/components/Pricing/Pricing";
import Spacing from "@/components/Spacing/Spacing";
import TabContent from "@/components/TabulationSection/TabContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Sponsors from "@/components/sponsorSection/Sponsors";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Sponsors />
      <About />
      <TabContent />
      <Pricing />
      <Form />
      <Footer />
    </main>
  );
}
