import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "./ui/CustomProfileCard";

const About = () => {
  return (
    <section id="about" className="border-b border-white/[0.2]">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="lg:flex lg:flex-row">
          <div className="lg:w-2/3 flex flex-col justify-start items-start px-4 lg:px-0">
            <div className="text-5xl font-bold bg-gradient-to-br from-slate-50 to-slate-500 bg-clip-text text-transparent leading-tight">
              Meet GoSocial:
              <br />
              minds behind the{" "}
              <span className="bg-gradient-to-br from-[#02AAB0] to-[#4776E6] bg-clip-text">digital magic</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              Discover the passionate professionals who are dedicated to delivering innovative digital solutions. Learn
              more about our journey, values, and the talented individuals who make it all happen.{" "}
              <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                Contact Us <BsArrowRight />
              </a>
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 mt-6 bg-gradient-to-br from-[#02AAB0] to-[#4776E6] text-white font-semibold rounded-lg shadow-md"
            >
              Learn more
            </a>
          </div>
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/3 mt-10 lg:mt-0">
            <ProfileCard
              imageSrc="/borisvicena.jpg"
              name="Boris Vicena"
              title="CEO, Web Developer, SEO Specialist"
              socials={{
                instagram: "https://instagram.com/borisvicena",
                github: "https://github.com/borisvicena",
                twitter: "https://twitter.com/borisvicena",
                linkedin: "https://linkedin.com/in/borisvicena",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
