import React from "react";
import { BsArrowRight } from "react-icons/bs";

type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  logoSrc: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description, link, logoSrc }) => {
  return (
    <div className="flex items-start p-4 rounded-lg shadow-md hover:shadow-lg mb-6">
      {/* Left Side Image */}
      <img src={imageSrc} alt={title} className="w-1/3 h-full object-cover rounded-md mr-6" />

      {/* Right Side Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center mb-2">
          <img src={logoSrc} alt="Logo" className="w-10 h-10 object-contain mr-4" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
        >
          View Project <BsArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
