"use client";
import React from "react";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings, values } from "@/data";
import ValuesCard from "./ui/ValuesCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div className="relative py-20 lg:py-32 max-w-5xl mx-auto">
        <SectionHeader
          title={SectionHeaderSettings.about.title}
          gradientTitle={SectionHeaderSettings.about.gradientTitle}
          gradient={"text-blue-gradient"}
          description={SectionHeaderSettings.about.description}
          longDescription={true}
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start hidden and slightly moved down
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
              viewport={{ once: true, amount: 0.5 }} // Trigger once when in view
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }} // Stagger animation for each card
            >
              <ValuesCard title={value.title} description={value.description} icon={value.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
