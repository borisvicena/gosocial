import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { services } from "@/data";
import { IoMdCheckmark, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col justify-start items-start px-4 lg:px-0">
          <div className="text-5xl justify-start font-bold text-default-gradient leading-tight">
            Our mission is clear:
            <br />
            build your <span className="text-orange-gradient">online success</span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed mt-4 mb-8 max-w-xl">
            We create digital solutions from A to Z adaptable to any kind of business. Our team is dedicated to
            enhancing your online presence and achieving your goals.{" "}
            <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-semibold">
              Contact Us <BsArrowRight />
            </a>
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <HoverEffect items={services} icon={<IoMdCheckmark color="#0f9b0f" />} />
        </div>
      </div>
    </section>
  );
};

export default Services;
