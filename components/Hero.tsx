import { FaLocationArrow } from "react-icons/fa";

import MagicButton from "./ui/magic-button";
import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <TextHoverEffect text="SHREYA" />
      <TextHoverEffect text="PATIL" />
    </div>
  );
};

export default Hero;