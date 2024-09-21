import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import KeyStatistics from "@/components/sections/KeyStatistics";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import MainProvider from "@/components/ui/custom/SectionProvider";

export default function Home() {
  return (
    <MainProvider>
      <Hero />
      <KeyStatistics />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </MainProvider>
  );
}
