"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  logoSrc: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description, link, logoSrc }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 hover:shadow-2xl w-full h-96 cursor-pointer"
      whileHover={{
        scale: 1.02,
        rotate: 1,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {/* Layered Background with Asymmetry */}
      <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-black">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover opacity-70 transform skew-y-3 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
        />
      </motion.div>

      {/* Floating Logo */}
      <motion.div
        className="absolute top-6 left-6 w-16 h-16 p-2 bg-white rounded-full shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
        whileHover={{ rotate: 360 }}
      >
        <img src={logoSrc} alt="Company Logo" className="w-full h-full object-contain" />
      </motion.div>

      {/* Dynamic Content Area */}
      <motion.div
        className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent text-left"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
      >
        <h3 className="text-white text-3xl font-bold mb-2 transition-transform duration-700 group-hover:translate-y-1">
          {title}
        </h3>
        <p className="text-gray-300 text-base mb-4 transition-transform duration-700 group-hover:translate-y-1 delay-100">
          {description}
        </p>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-lg font-semibold text-blue-400 gap-2 hover:underline"
          whileHover={{ x: 10 }}
        >
          Explore <BsArrowRight />
        </motion.a>
      </motion.div>

      {/* Diagonal Animated Border */}
      <motion.div
        className="absolute inset-0 border-t-8 border-blue-500 border-opacity-30 rounded-xl pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
