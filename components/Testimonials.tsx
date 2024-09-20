import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings } from "@/data";

const testimonials = [
  {
    quote:
      "Their innovative approach transformed our digital presence. We saw a 40% increase in engagement within the first quarter!",
    name: "Sarah Johnson",
    title: "Marketing Director at Tech Innovators Inc.",
  },
  {
    quote:
      "Working with this agency has been a game-changer for our brand. Their expertise and dedication are unmatched.",
    name: "David Lee",
    title: "CEO of GreenTech Solutions",
  },
  {
    quote:
      "The team's strategic insights and creative solutions helped us achieve our best sales year yet. Highly recommend!",
    name: "Emily Martinez",
    title: "Head of Digital Strategy at HealthPlus",
  },
  {
    quote:
      "Their exceptional service and results-oriented approach have significantly boosted our online visibility and sales.",
    name: "James Smith",
    title: "Founder of EcoLiving Products",
  },
  {
    quote: "From day one, their professionalism and expertise stood out. We couldn't be happier with the results.",
    name: "Olivia Brown",
    title: "COO of UrbanStyle Fashion",
  },
];

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
        <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
