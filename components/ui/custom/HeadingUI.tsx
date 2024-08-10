// Toolkit: SigmaUI (Custom Component)
// Author: Boris Vicena

import { cn } from "@/lib/utils";
import React from "react";

const HeadingUI = () => {
  return (
    <h1>
      <MainText className="text-center text-[40px] md:text-5xl lg:text-5xl">
        Outstanding Digital Solutions for
        <GradientText>&nbsp;Marketing&nbsp;</GradientText>and<GradientText>&nbsp;Web Development&nbsp;</GradientText>
      </MainText>
    </h1>
  );
};

const MainText = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-default-gradient">{children}</div>
      </div>
    </div>
  );
};

const GradientText = ({ children }: { children: React.ReactNode }) => {
  return <div className={`inline-flex text-purple-gradient`}>{children}</div>;
};

export default HeadingUI;
