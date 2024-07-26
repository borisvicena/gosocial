import React from "react";

const MagicButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative mt-14">
      <div className="absolute inset-0 bg-gradient-to-r from-[#DA22FF] to-[#9733EE] rounded-lg" />
      <div className="px-8 py-2 bg-black-100 rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  );
};

export default MagicButton;
