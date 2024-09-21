"use client";
import React from "react";
import { Grid } from "@/components/ui/FeaturesSection";
import { gridItems } from "@/data";
import { motion } from "framer-motion";

const KeyStatistics = () => {
  return (
    <section id="stats">
      <div className="relative pt-20 lg:pt-32 max-w-7xl mx-auto px-2 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mx-auto">
          {gridItems.map(({ id, title, value, description }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }} // Start slightly down and hidden
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
              viewport={{ once: true, amount: 0.1 }} // Trigger once when in view
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger animation based on index
                ease: "easeInOut",
              }}
              className="relative bg-gradient-to-br from-[#191c2f] to-slate-800 p-4 rounded-lg overflow-hidden border dark:border-white/[0.2]"
            >
              <Grid size={20} />
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
                {value}
              </p>
              <p className="text-base font-light uppercase tracking-wider dark:text-white relative z-20">{title}</p>
              <p className="dark:text-slate-400 mt-4 text-sm tracking-wide leading-snug relative z-20">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStatistics;
