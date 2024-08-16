import React from "react";
import ValuesCard from "./ValuesCard";
import {
  IoBulbOutline,
  IoDiamondOutline,
  IoHappyOutline,
  IoPeopleOutline,
  IoShieldHalfOutline,
  IoTrendingUpSharp,
} from "react-icons/io5";
const values = [
  {
    title: "Innovation",
    description:
      "We strive to bring the most innovative solutions to the market, pushing the boundaries of technology.",
    icon: <IoBulbOutline />,
  },
  {
    title: "Collaboration",
    description: "Our team works closely with clients to ensure we deliver exactly what they need.",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Growth",
    description: "We focus on growth for both our clients and our company, continuously improving and evolving.",
    icon: <IoTrendingUpSharp />,
  },
  {
    title: "Integrity",
    description: "We adhere to the highest ethical standards, ensuring trust and transparency in all our dealings.",
    icon: <IoShieldHalfOutline />,
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering excellence in everything we do, from our services to our customer support.",
    icon: <IoDiamondOutline />,
  },
  {
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring our clients are satisfied with our work and the results they achieve.",
    icon: <IoHappyOutline />,
  },
];

const ValuesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {values.map((value, index) => (
        <ValuesCard key={index} title={value.title} description={value.description} icon={value.icon} />
      ))}
    </div>
  );
};

export default ValuesSection;
