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
            className="relative bg-gradient-to-br from-[#DA22FF] to-[#9733EE] p-6 rounded-lg overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="text-base font-light uppercase tracking-wider dark:text-neutral-200 text-neutral-100 relative z-20">
              {title}
            </p>
            <p className="text-slate-200 mt-4 text-base font-normal relative z-20">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStatistics;
