import Navbar from "@/components/sections/NavbarMenu";
import { Main } from "next/document";
import React from "react";

type SectionProviderProps = {
  id: string;
  children: React.ReactNode;
};

export const SectionProvider: React.FC<SectionProviderProps> = ({ id, children }) => {
  return (
    <section id={id}>
      <div className="relative w-full max-w-7xl py-20 lg:py-32 mx-auto">{children}</div>
    </section>
  );
};

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  return (
    <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden antialiased">
      <div className="w-full scroll-smooth">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default MainProvider;
