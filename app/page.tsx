import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyStatistics from "@/components/KeyStatistics";
import Navbar from "@/components/NavbarMenu";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden antialiased">
      <div className="w-full scroll-smooth">
        <Navbar className="top-2" />
        <Hero />
        <KeyStatistics />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
