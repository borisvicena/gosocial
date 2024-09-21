import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings, testimonials } from "@/data";
import { SectionProvider } from "./ui/custom/SectionProvider";

// ZEALOT - potencialne meno firmy

const Testimonials = () => {
  return (
    <SectionProvider id="testimonials">
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
    </SectionProvider>
  );
};

export default Testimonials;
