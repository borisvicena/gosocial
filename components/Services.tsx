"use client";
import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { services } from "@/data";
import { IoMdCheckmark } from "react-icons/io";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings } from "@/data";
import { SectionProvider } from "./ui/custom/SectionProvider";

const Services = () => {
  return (
    <SectionProvider id="services">
      <SectionHeader
        title={SectionHeaderSettings.services.title}
        gradientTitle={SectionHeaderSettings.services.gradientTitle}
        gradient={"text-orange-gradient"}
        description={SectionHeaderSettings.services.description}
      />
      <HoverEffect items={services} icon={<IoMdCheckmark color="#0f9b0f" />} />
    </SectionProvider>
  );
};

export default Services;
