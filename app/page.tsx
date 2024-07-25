import About from "@/components/About";
import Hero from "@/components/Hero";
import KeyStatistics from "@/components/KeyStatistics";
import Navbar from "@/components/NavbarMenu";

export default function Home() {
  return (
    <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden antialiased">
      <div className="w-full scroll-smooth">
        <Navbar className="top-2" />
        <Hero />
        <KeyStatistics />
        <About />
      </div>
    </main>
  );
}
