"use client";
import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { services } from "@/data";
import { IoMdCheckmark } from "react-icons/io";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings } from "@/data";

const Services = () => {
  return (
    <section id="services">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <SectionHeader
          title={SectionHeaderSettings.services.title}
          gradientTitle={SectionHeaderSettings.services.gradientTitle}
          gradient={"text-orange-gradient"}
          description={SectionHeaderSettings.services.description}
        />
        <div className="max-w-7xl mx-auto">
          <HoverEffect items={services} icon={<IoMdCheckmark color="#0f9b0f" />} />
        </div>
      </div>
    </section>
  );
};

export default Services;
