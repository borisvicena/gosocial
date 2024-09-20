import React from "react";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings, values } from "@/data";
import ValuesCard from "./ui/ValuesCard";

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
            <ValuesCard key={index} title={value.title} description={value.description} icon={value.icon} />
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default About;
