import React from "react";
import { Lamp } from "./ui/Lamp";
import { HoverEffect } from "./ui/CardHover";
import { FlipWords } from "./ui/FlipWords";
import { FaCaretRight } from "react-icons/fa";

export const services = [
  {
    title: "Web Development",
    description: [
      "Custom Website Design and Development",
      "E-commerce Solutions",
      "Content Management System (CMS)",
      "Website Maintenance and Support",
    ],
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description: [
      "iOS and Android App Development",
      "Cross-platform App Development",
      "Mobile App UI/UX Design",
      "App Store Optimization (ASO)",
    ],
    link: "mobile-app-development",
  },
  {
    title: "Digital Marketing",
    description: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing (SMM)",
      "Email Marketing Campaigns",
    ],
    link: "digital-marketing",
  },
  {
    title: "Content Creation",
    description: [
      "Copywriting and Blogging",
      "Video Production and Editing",
      "Graphic Design and Infographics",
      "Photography Services",
    ],
    link: "content-creation",
  },
  {
    title: "Branding & Identity",
    description: [
      "Logo Design and Brand Identity",
      "Brand Strategy and Consulting",
      "Brand Guidelines Development",
      "Print and Digital Design",
    ],
    link: "branding-and-identity",
  },
  {
    title: "UI/UX Design",
    description: [
      "User Interface (UI) Design",
      "User Experience (UX) Research and Testing",
      "Prototyping and Wireframing",
      "Usability Testing",
    ],
    link: "ui-and-ux-design",
  },
];

const words = ["website", "design", "branding", "content", "strategy"];

const About = () => {
  return (
    <section id="about">
      <div className="pb-20 lg:pb-30 max-w-7xl mx-auto">
        <div>
          <Lamp mainText="Elevating every dimension of your" gradientText="digital world" />
        </div>
        <div className="h-[10rem] flex justify-start items-center px-4">
          <div className="text-5xl font-normal text-neutral-600 dark:text-neutral-400 leading-tight">
            Build your
            <FlipWords words={words} /> <br />
            with GoSocial
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <HoverEffect items={services} icon={<FaCaretRight />} iconPosition="left" />
        </div>
      </div>
    </section>
  );
};

export default About;
