import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProfileCard from "./ui/CustomProfileCard";
import ValuesSection from "./ui/ValuesSection";
import MissionSection from "./ui/CustomMissionSection";
import { LuHeartHandshake } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="border-b border-white/[0.2]">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="lg:flex lg:flex-row">
          <div className="flex flex-col justify-start items-start px-4 lg:px-0">
            <div className="text-5xl justify-start font-bold text-default-gradient leading-tight">
              Meet GoSocial:
              <br />
              minds behind the <span className="text-blue-gradient">digital magic</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              Discover the passionate professionals who are dedicated to delivering innovative digital solutions. Learn
              more about our journey, values, and the talented individuals who make it all happen.{" "}
              <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                Contact Us <BsArrowRight />
              </a>
            </p>
            <ValuesSection />
            <MissionSection />
          </div>
          {/* <div className="flex justify-center lg:justify-end items-start w-full lg:w-1/3 mt-10 lg:mt-0">
            <div className="flex-col">
              <p className="font-bold mb-8 text-3xl">Our Core Team</p>
              <div className="my-8">
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
              <div className="my-8">
                <ProfileCard
                  imageSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                  name="John Doe"
                  title="Web Developer, Software Engineer"
                  socials={{
                    instagram: "https://instagram.com/borisvicena",
                    github: "https://github.com/borisvicena",
                    twitter: "https://twitter.com/borisvicena",
                    linkedin: "https://linkedin.com/in/borisvicena",
                  }}
                />
              </div>
              <div className="mt-8">
                <ProfileCard
                  imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                  name="Robert Johnson"
                  title="Project Manager"
                  socials={{
                    instagram: "https://instagram.com/borisvicena",
                    github: "https://github.com/borisvicena",
                    twitter: "https://twitter.com/borisvicena",
                    linkedin: "https://linkedin.com/in/borisvicena",
                  }}
                />
              </div>
            </div> 
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default About;
