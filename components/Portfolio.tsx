"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/Button";
import { IoMdCheckmark } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings, portfolioItems } from "@/data";
import PortfolioCard from "./ui/custom/PortfolioCard";
import { motion } from "framer-motion";
import { SectionProvider } from "./ui/custom/SectionProvider";

const Portfolio = () => {
  return (
    <SectionProvider id="portfolio">
      <SectionHeader
        title={SectionHeaderSettings.portfolio.title}
        gradientTitle={SectionHeaderSettings.portfolio.gradientTitle}
        gradient={"text-pink-gradient"}
        description={SectionHeaderSettings.portfolio.description}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
            className="flex"
          >
            <PortfolioCard key={index} {...item} />
          </motion.div>
        ))}
      </div>
    </SectionProvider>
  );
};

export default Portfolio;
