"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCaretRight, FaCrown } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
  icon,
}: {
  items: {
    title: string;
    description: string[];
    link: string;
  }[];
  className?: string;
  icon: React.ReactNode;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  pb-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#02AAB0]/[0.1] block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="text-lg font-light leading-snug tracking-wide uppercase bg-gradient-to-br from-[#00CDAC] to-[#9733EE] bg-clip-text text-transparent">
              {item.title}
            </CardTitle>
            <CardDescription>
              {item.description.map((desc) => (
                <span key={desc} className="w-full inline-flex items-center gap-2">
                  {icon} {desc}
                </span>
              ))}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-4 overflow-hidden bg-[#191c2f] border border-transparent dark:border-white/[0.2] group-hover:border-[#02AAB0] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-5 text-slate-300 font-extralight tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
