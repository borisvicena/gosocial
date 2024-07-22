import React from "react";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerate";
import MagicButton from "./ui/MagicButton";
import { SlArrowDown } from "react-icons/sl";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      </div>
      <div>
        <GridBackground />
      </div>
      <div className="relative flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center dark:text-blue-100 text-blue-900 max-w-80">
            MULTI-DIGITAL SOLUTION AGENCY
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Outstanding Digital Solutions for Marketing and Web Development"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl text-gray-500">
            Let us elevate your online presence and drive your success.
          </p>
          <a href="#about">
            <MagicButton title="Learn more" icon={<SlArrowDown />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
