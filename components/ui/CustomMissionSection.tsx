// src/ui/MissionSection.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MissionSection: React.FC = () => {
  return (
    <div className="my-10 p-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-lg shadow-md border border-white/[0.2]">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white to-slate-800 bg-clip-text text-transparent">
        Our Mission & Values
      </h2>
      <p className="text-slate-300 text-base leading-relaxed">
        At GoSocial, our mission is to empower businesses to achieve their digital goals through innovative solutions
        and exceptional service. We are committed to helping our clients grow and succeed in the digital landscape by
        providing cutting-edge web development, mobile app development, digital marketing, and more.
      </p>
      <a
        href="#services"
        className="inline-flex items-center text-sm gap-2 py-3 mt-6 bg-transparent text-white font-semibold"
      >
        Services <BsArrowRight />
      </a>
    </div>
  );
};

export default MissionSection;
