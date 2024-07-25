import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { FlipWords } from "./ui/FlipWords";
import { flipWords } from "@/data";
import { FaCaretRight } from "react-icons/fa";
import { services } from "@/data";

const Services = () => {
  return (
    <section id="services">
      <div className="pb-20 lg:pb-30 max-w-7xl mx-auto">
        <div className="h-[10rem] flex justify-start items-center px-4">
          <div className="text-5xl font-medium bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight">
            Build your
            <FlipWords words={flipWords} /> <br />
            with GoSocial
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <HoverEffect items={services} icon={<FaCaretRight />} iconPosition="left" />
        </div>
      </div>
    </section>
  );
};

export default Services;
