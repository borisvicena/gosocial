"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionHeader({
  title,
  gradientTitle,
  gradient,
  description,
  longDescription = false,
  centered = false,
}: {
  title: string;
  gradientTitle: string;
  gradient: string;
  description: string;
  longDescription?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cn("flex flex-col px-4 lg:px-0", centered ? "items-center text-center" : "items-start text-left")}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className={cn(
          "text-5xl font-bold leading-tight",
          centered ? "justify-center" : "justify-start",
          "text-default-gradient"
        )}
      >
        {title} <span className={cn(gradient)}>{gradientTitle}</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        className={cn(
          "text-slate-400 text-base leading-relaxed mt-8 mb-16",
          longDescription ? "max-w-4xl" : "max-w-xl",
          centered ? "mx-auto" : ""
        )}
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionHeader;
