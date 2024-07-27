import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { FaCaretRight } from "react-icons/fa";
import { services } from "@/data";
import { HeartHandshakeIcon, Icon } from "lucide-react";
import { FiTarget } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { IoMdCheckmark, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { Spotlight } from "./ui/Spotlight";

const Services = () => {
  return (
    <section id="services" className="border-b border-white/[0.2]">
      <div className="relative pb-20 lg:pb-30 max-w-7xl mx-auto">
        <div className="h-[10rem] flex justify-start items-center">
          <div className="text-5xl font-bold bg-gradient-to-br from-slate-50 to-slate-500 bg-clip-text text-transparent leading-tight">
            Our mission is clear:
            <br />
            build your{" "}
            <span className="bg-gradient-to-br from-[#FF512F] to-[#F09819] bg-clip-text">online success</span>
          </div>
        </div>
        <div className="relative pb-10 max-w-xl">
          <p className="relative text-slate-400 text-base leading-relaxed inline">
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
