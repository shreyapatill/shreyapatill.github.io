import { FaLocationArrow } from "react-icons/fa";

import MagicButton from "./ui/magic-button";
import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Vortex
          rangeY={200}
          particleCount={500}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        />
      </div>
        
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            echo "Hello, World" > better_world.sh
          </p>

          <TextGenerateEffect
            words="hidden realities of nature"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            Hi! I'm Shreya. Welcome to my personal portfolio.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;