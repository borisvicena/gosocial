import React from "react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import ButtonUI from "@/components/ui/custom/ButtonUI";
import { FaArrowRightLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <section id="cta" className="border-y border-white/[0.2]">
      <div className="h-[30rem] w-full rounded-md bg-gradient-to-br from-[#191c2f] to-black-100 relative flex flex-col items-center justify-center antialiased">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="flex flex-col justify-center items-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="inline-flex my-3 text-default-gradient">Ready to Elevate Your Online Presence?</span>
            <span className="inline-flex bg-purple-gradient py-1 px-3 rounded-lg mb-8">It&#x27;s today or never.</span>
          </h2>
          <p className="text-base mt-4 max-w-md mx-auto text-slate-400">
            We're here to support you every step of the way. Join our happy clients and start building your digital
            future today.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a href="/contact">
                <ButtonUI text="Contact" variant="secondary" size="large" icon={<FaArrowRightLong />} />
              </a>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default CTA;
