import React from "react";
import { GridBackground } from "./ui/GridBackground";
import HeadingUI from "./ui/custom/HeadingUI";
import { Spotlight } from "./ui/Spotlight";
import ButtonUI from "./ui/custom/ButtonUI";
import { FaArrowRightLong, FaRegCompass } from "react-icons/fa6";

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
          <div className="inline-flex gap-4 my-10">
            <a href="#services">
              <ButtonUI text="Learn more" variant="secondary" size="large" icon={<FaRegCompass />} />
            </a>
            <a href="/contact">
              <ButtonUI text="Contact" variant="none" size="large" icon={<FaArrowRightLong />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
