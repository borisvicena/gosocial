import React from "react";

type ValuesCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgGradient: string;
};

const ValuesCard: React.FC<ValuesCardProps> = ({ title, description, icon, iconBgGradient }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-[#191c2f] to-slate-800 border border-white/[0.2] rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
      <div className={`text-4xl mb-4 p-2 rounded-full ${iconBgGradient}`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 text-sm tracking-wide leading-snug text-center">{description}</p>
    </div>
  );
};

export default ValuesCard;
