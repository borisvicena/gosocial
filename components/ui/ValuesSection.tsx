import React from "react";
import ValuesCard from "./ValuesCard";
import { PiHandshake, PiSmiley } from "react-icons/pi";
import { IoBulb, IoDiamondOutline, IoShieldHalfOutline, IoTrendingUp } from "react-icons/io5";

const values = [
  {
    title: "Innovation",
    description:
      "We strive to bring the most innovative solutions to the market, pushing the boundaries of technology.",
    icon: <IoBulb />,
    iconBgGradient: "bg-gradient-to-br from-[#EDDE5D] to-[#F09819]",
  },
  {
    title: "Collaboration",
    description: "Our team works closely with clients to ensure we deliver exactly what they need.",
    icon: <PiHandshake />,
    iconBgGradient: "bg-gradient-to-br from-[#02AAB0] to-[#4776E6]",
  },
  {
    title: "Growth",
    description: "We focus on growth for both our clients and our company, continuously improving and evolving.",
    icon: <IoTrendingUp />,
    iconBgGradient: "bg-gradient-to-br from-[#a5e29c] to-[#1b7b2c]",
  },
  {
    title: "Integrity",
    description: "We adhere to the highest ethical standards, ensuring trust and transparency in all our dealings.",
    icon: <IoShieldHalfOutline />,
    iconBgGradient: "bg-gradient-to-br from-[#DA22FF] to-[#9733EE]",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering excellence in everything we do, from our services to our customer support.",
    icon: <IoDiamondOutline />,
    iconBgGradient: "bg-gradient-to-br from-[#f953c6] to-[#b91d73]",
  },
  {
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring our clients are satisfied with our work and the results they achieve.",
    icon: <PiSmiley />,
    iconBgGradient: "bg-gradient-to-br from-[#928DAB] to-[#1F1C2C]",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <ValuesCard
          key={index}
          title={value.title}
          description={value.description}
          icon={value.icon}
          iconBgGradient={value.iconBgGradient}
        />
      ))}
    </div>
  );
};

export default ValuesSection;
