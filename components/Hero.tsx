import React from "react";
import { GridBackground } from "./ui/GridBackground";
import HeadingUI from "./ui/custom/HeadingUI";
import { Spotlight } from "./ui/Spotlight";
import ButtonUI from "./ui/custom/ButtonUI";
import { FaArrowRightLong, FaRegCompass } from "react-icons/fa6";
import { SectionProvider } from "./ui/custom/SectionProvider";

const Hero = () => {
  return (
    <SectionProvider id="hero">
      <Spotlight className="top-10 left-10" fill="white" />
      <GridBackground />
      <div className="relative flex justify-center mt-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest border border-blue-100/[0.2] rounded-full px-5 py-1 bg-slate-800 text-sm text-center dark:text-blue-100 text-blue-900">
            &#127775; MULTI-DIGITAL SOLUTION AGENCY &#127775;
          </h2>
          <HeadingUI />
          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-xl text-slate-400">
            Let us elevate your online presence and drive your success.
          </p>
          <div className="inline-flex gap-4 mt-10">
            <a href="#services">
              <ButtonUI text="Learn more" variant="secondary" size="large" icon={<FaRegCompass />} />
            </a>
            <a href="/contact">
              <ButtonUI text="Contact" variant="none" size="large" icon={<FaArrowRightLong />} />
            </a>
          </div>
        </div>
      </div>
    </SectionProvider>
  );
};

export default Hero;
