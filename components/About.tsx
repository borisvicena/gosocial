import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="border-b border-white/[0.2]">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="h-[10rem] flex justify-start items-center">
          <div className="text-5xl font-bold bg-gradient-to-br from-slate-50 to-slate-500 bg-clip-text text-transparent leading-tight">
            Meet GoSocial:
            <br />
            minds behind the{" "}
            <span className="bg-gradient-to-br from-[#02AAB0] to-[#4776E6] bg-clip-text">digital magic</span>
          </div>
        </div>
        <div className="relative pb-10 max-w-xl">
          <p className="relative text-slate-400 text-base leading-relaxed inline">
            Discover the passionate professionals who are dedicated to delivering innovative digital solutions. Learn
            more about our journey, values, and the talented individuals who make it all happen.{" "}
            <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-semibold">
              Contact Us <BsArrowRight />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
