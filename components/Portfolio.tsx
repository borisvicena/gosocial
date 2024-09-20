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

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
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
          {/* !!! PLACEHOLDER CARD TODO !!! */}
          <Card className="w-full bg-transparent border-white/[0.1] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <p className="text-white/[0.2] group-hover:text-white transition-all duration-1000">Your logo</p>
              <div className="flex justify-center items-center h-60">
                <BsPlusCircleDotted
                  size={64}
                  className="text-white/[0.2] group-hover:text-blue-500 transition-all duration-700 hover:cursor-pointer"
                />
              </div>
              <CardTitle className="text-white/[0.2] group-hover:text-white transition-all duration-1000">
                Your Company
              </CardTitle>
              <CardDescription className="text-white/[0.2] group-hover:text-muted-foreground transition-all duration-1000">
                Your Industry
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white/[0.2] group-hover:text-white">
              <div className="w-full inline-flex items-center gap-2 transition-all duration-300">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-300" />
                Everything
              </div>
              <div className="w-full inline-flex items-center gap-2 transition-all duration-500">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-500" />
                you
              </div>
              <div className="w-full inline-flex items-center gap-2 transition-all duration-700">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-700" />
                need!
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline"
                className="text-white/[0.2] group-hover:text-white group-hover:border-blue-500 transition-all duration-500"
              >
                Contact Us
              </Button>
            </CardFooter>
          </Card>
          {/* !!! PLACEHOLDER CARD TODO !!! */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
