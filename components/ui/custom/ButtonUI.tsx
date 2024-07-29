// Toolkit: SigmaUI (Custom Component)
// Author: Boris Vicena

import React from "react";

type ButtonUIProps = {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "none" | "shadow" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
};

const ButtonUI: React.FC<ButtonUIProps> = ({
  text = "This is a button",
  onClick,
  type = "button",
  variant = "shadow",
  size = "medium",
  icon,
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition duration-300 border border-white/[0.2]";
  const btnSize = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-md",
  };
  const btnVariant = {
    none: "bg-none",
    shadow: "bg-gradient-to-br from-[#191c2f] to-slate-800 text-white",
    secondary: "bg-gradient-to-br from-[#DA22FF] to-[#9733EE]",
    tertiary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${btnSize[size]} ${btnVariant[variant]}`}>
      {text}
      {icon && <span className={`ml-2`}>{icon}</span>}
    </button>
  );
};

export default ButtonUI;
