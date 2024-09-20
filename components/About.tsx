import React from "react";
import ValuesSection from "./ui/ValuesSection";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings } from "@/data";

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
        <ValuesSection />
      </div>
    </section>
  );
};

export default About;
