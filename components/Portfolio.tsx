import React from "react";
import PortfolioCard from "./ui/PortfolioCard";
import { TracingBeam } from "./ui/TracingBeam";

const projects = [
  {
    imageSrc: "/image1.png",
    title: "digihry.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://digihry.sk",
    logoSrc: "logo-digihry.png",
  },
  {
    imageSrc: "/image2.png",
    title: "butterfly-reality.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://butterfly-reality.sk",
    logoSrc: "logo-br.png",
  },
  {
    imageSrc: "/image3.png",
    title: "previtalitu.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://previtalitu.sk",
    logoSrc: "logo-previtalitu.webp",
  },
  {
    imageSrc: "/image4.png",
    title: "newspirit.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://newspirit.sk",
    logoSrc: "logo-newspirit.webp",
  },
  {
    imageSrc: "/image5.png",
    title: "deska.shop",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://deska.shop",
    logoSrc: "logo-deska.webp",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="border-b border-white/[0.2]">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col justify-start items-start px-4 lg:px-0">
          <div className="text-5xl justify-start font-bold text-default-gradient leading-tight">
            Our journey:
            <br />
            Showcasing <span className="text-pink-gradient">client achievements</span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed inline mt-4 mb-8 max-w-xl">
            Take a look at our portfolio to see the diverse range of projects we've successfully completed. Each project
            is a testament to our commitment to quality and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
              logoSrc={project.logoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
