import React from "react";
import { Lamp } from "./ui/Lamp";

const About = () => {
  return (
    <section id="about">
      <div className="pb-20 lg:pb-30 max-w-7xl mx-auto">
        <div>
          <Lamp mainText="We strive for better" gradientText="digital future" />
        </div>
      </div>
    </section>
  );
};

export default About;
