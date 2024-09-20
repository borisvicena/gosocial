import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "./ui/CustomProfileCard";
import ValuesSection from "./ui/ValuesSection";
import MissionSection from "./ui/CustomMissionSection";
import { LuHeartHandshake } from "react-icons/lu";
import { Spotlight } from "./ui/Spotlight";

const About = () => {
  return (
    <section id="about">
      <div className="relative py-20 lg:py-32 max-w-5xl mx-auto">
        <div className="lg:flex lg:flex-row">
          <div className="flex flex-col justify-center items-center px-4 lg:px-0">
            <div className="text-5xl justify-center font-bold text-default-gradient leading-loose">
              We strive for better <span className="text-blue-gradient">digital future</span>
            </div>
            <p className="text-slate-400 text-base text-center mt-4 mb-8 max-w-4xl">
              Join us on a journey driven by passion and innovation, where our expert team is dedicated to crafting
              cutting-edge digital solutions. Explore our commitment to integrity, collaboration, and growth, and meet
              the people who make it all possible. Let's create something exceptional together.
            </p>
            <ValuesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
