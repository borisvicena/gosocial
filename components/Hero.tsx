import React from "react";
import { GridBackground } from "./ui/GridBackground";
import HeadingUI from "./ui/TextGenerate";
import MagicButton from "./ui/MagicButton";
import { SlArrowDown } from "react-icons/sl";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 max-w-7xl mx-auto">
      <div>
        <Spotlight className="-top-10 left-0" fill="white" />
      </div>
      <div>
        <GridBackground />
      </div>
      <div className="relative flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center dark:text-blue-100 text-blue-900 max-w-80">
            MULTI-DIGITAL SOLUTION AGENCY
          </h2>
          <HeadingUI />
          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-xl text-slate-400">
            Let us elevate your online presence and drive your success.
          </p>
          <a href="#services">
            <MagicButton title="Learn more" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
