import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

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
    <section id="testimonials">
      <div className="w-full mx-auto py-20 lg:py-30 dark:bg-dot-white/[0.2] bg-dot-black/[0.03] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="inline-block p-1 bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg font-bold text-5xl mb-14">
            Trusted by Industry Leaders{" "}
            <span className="bg-gradient-to-b from-[#9e65f4] to-purple-700 bg-clip-text">Worldwide</span>
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full pb-10">
          <AnimatedTooltip items={people} />
        </div>
        <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
