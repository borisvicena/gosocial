import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  logoSrc: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description, link, logoSrc }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full h-96">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full bg-gradient-to-br from-[#191c2f] to-slate-800 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute top-4 left-4 w-fit h-12 p-2">
        <img src={logoSrc} alt="Company Logo" className="w-full h-full object-contain" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-2xl font-semibold mb-2 transition-transform duration-500 group-hover:translate-y-0 transform translate-y-4">
          {title}
        </h3>
        <p className="text-gray-300 text-base mb-4 transition-transform duration-500 group-hover:translate-y-0 transform translate-y-4 delay-100">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-lg flex items-center gap-2 hover:underline transition-transform duration-500 group-hover:translate-y-0 transform translate-y-4 delay-200 z-10"
        >
          View Project <BsArrowRight />
        </a>
      </div>
      <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-blue-500 transition-border duration-500 pointer-events-none"></div>
    </div>
  );
};

export default PortfolioCard;
