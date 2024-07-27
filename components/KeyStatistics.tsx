import React from "react";
import { Grid } from "./ui/FeaturesSection";
import { gridItems } from "@/data";

const KeyStatistics = () => {
  return (
    <div className="pt-20 lg:pt-30 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mx-auto">
        {gridItems.map(({ id, title, value, description }) => (
          <div
            key={id}
            className="relative bg-gradient-to-br from-[#191c2f] to-slate-800 p-6 rounded-lg overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              {value}
            </p>
            <p className="text-base font-light uppercase tracking-wider dark:text-white relative z-20">{title}</p>
            <p className="dark:text-slate-400 mt-4 text-sm tracking-wide leading-snug relative z-20">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStatistics;
