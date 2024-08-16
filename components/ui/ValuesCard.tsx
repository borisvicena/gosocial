import React from "react";

type ValuesCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ValuesCard: React.FC<ValuesCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start p-4 border border-white/[0.2] rounded-lg group">
      <div className="text-3xl mb-4 p-3 rounded-lg border border-white/[0.2] transition-all duration-500 group-hover:shadow-[#4776E6] group-hover:text-blue-gradient shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 text-sm tracking-wide leading-snug text-left">{description}</p>
    </div>
  );
};

export default ValuesCard;
