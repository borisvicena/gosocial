import React from "react";
import { FeaturesSection } from "./ui/FeaturesSection";

const Metrics = () => {
  return (
    <div className="relative py-20 lg:py-40">
      <FeaturesSection />
      <p className="text-white font-bold text-3xl mt-10">
        We like to talk{" "}
        <span className="bg-gradient-to-br from-[#9e65f4] to-[#cbacf9] bg-clip-text text-transparent">numbers</span>
      </p>
    </div>
  );
};

export default Metrics;
