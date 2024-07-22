import React from "react";
import { Grid } from "./ui/FeaturesSection";
import { gridItems } from "@/data";

const KeyStatistics = () => {
  return (
    <div className="py-20 lg:py-30 max-w-7xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mx-auto">
        {gridItems.map(({ id, title, value, description }) => (
          <div
            key={id}
            className="relative bg-gradient-to-b from-[#9e65f4] to-purple-700 p-6 rounded-lg overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="text-base font-light uppercase tracking-wider dark:text-neutral-200 text-neutral-100 relative z-20">
              {title}
            </p>
            <p className="text-neutral-200 mt-4 text-base font-normal relative z-20">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStatistics;
