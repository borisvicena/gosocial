import About from "@/components/About";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import { MainNavbar } from "@/components/ui/NavbarMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 antialiased">
      <div className="max-w-7xl w-full">
        <MainNavbar />
        <Hero />
        <Metrics />
      </div>
    </main>
  );
}
