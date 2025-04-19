import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-800 via-violet-800 to-indigo-800" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 py-2 bg-slate-950 text-sm font-medium backdrop-blur-3xl gap-2 text-white hover:bg-transparent ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;