"use client";
import { FaLocationArrow } from "react-icons/fa";

import MagicButton from "./ui/magic-button";
import { Vortex } from "./ui/vortex";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="relative min-h-screen pb-20 pt-36">
      <div className="absolute inset-x-0 top-[5vw] flex flex-col items-center justify-center top-30 z-0">
        <TextHoverEffect text="SHREYA" />
        <TextHoverEffect text="PATIL" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 pointer-events-none">
        <p className="uppercase tracking-widest text-s text-center text-blue-100 pointer-events-none">
          echo "Hello, World" {">"} better_world.sh
        </p>
        <div className="w-full max-w-6xl px-4 pointer-events-none">
          <TextGenerateEffect
            words="Engineering impactful change with imagination, creativity, and curiosity."
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl  dark:text-white text-black pointer-events-none">
            Hi! I'm Shreya. Welcome to my personal portfolio.
          </p>
        </div>
      </div>    
    </div>
    
  );
};

export default Hero;