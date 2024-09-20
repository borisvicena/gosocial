import React from "react";

type ValuesCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ValuesCard: React.FC<ValuesCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-black-100 items-center p-8 border border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 rounded-lg group">
      <div
        className={`text-3xl mb-6 p-4 rounded-lg border border-blue-500/[0.5] group-hover:border-blue-500  transition-all duration-500`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1 text-white leading-loose">{title}</h3>
      <p className="text-slate-400 text-sm font-normal tracking-normal leading-snug text-center">{description}</p>
    </div>
  );
};

export default ValuesCard;
