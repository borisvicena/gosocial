// Toolkit: SigmaUI (Custom Component)
// Author: Boris Vicena

import { cn } from "@/lib/utils";
import React from "react";

const HeadingUI = () => {
  return (
    <h1>
      <MainText className="text-center text-[40px] md:text-5xl lg:text-5xl">
        Outstanding Digital Solutions for
        <GradientText fromColor="#DA22FF" toColor="#9733EE">
          Marketing
        </GradientText>{" "}
        and{" "}
        <GradientText fromColor="#DA22FF" toColor="#9733EE">
          Web Development
        </GradientText>
      </MainText>
    </h1>
  );
};

const MainText = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide bg-gradient-to-br from-slate-50 to-slate-400 bg-clip-text text-transparent">
          {children}
        </div>
      </div>
    </div>
  );
};

const GradientText = ({
  children,
  fromColor,
  toColor,
}: {
  children: React.ReactNode;
  fromColor: string;
  toColor: string;
}) => {
  return (
    <div className={`inline-flex bg-gradient-to-br from-[${fromColor}] to-[${toColor}] bg-clip-text text-transparent`}>
      {children}
    </div>
  );
};

export default HeadingUI;
