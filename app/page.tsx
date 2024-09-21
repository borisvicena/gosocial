import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyStatistics from "@/components/KeyStatistics";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
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
