import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings, testimonials } from "@/data";

// ZEALOT - potencialne meno firmy

const Testimonials = () => {
  return (
    <section id="testimonials" className="border-b border-white/[0.2]">
      <div className="relative w-full max-w-7xl mx-auto py-20 lg:py-30">
        <SectionHeader
          title={SectionHeaderSettings.testimonials.title}
          gradientTitle={SectionHeaderSettings.testimonials.gradientTitle}
          gradient={"text-blue-gradient"}
          description={SectionHeaderSettings.testimonials.description}
          centered={true}
        />
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
