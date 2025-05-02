"use client";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/spotlight";
import MagicButton from "./ui/magic-button";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import IMG_2475 from "./images/IMG_2475.png";
import IMG_5938 from "./images/IMG_5938.png";
import IMG_2476 from "./images/IMG_2476.png"; 
import IMG_0208 from "./images/IMG_0208.png"; 
import IMG_1836 from "./images/IMG_1836.png"; 

const Hero = () => {
  return (
    <div className="relative min-h-screen pb-20 pt-36">
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="#B5446E"
      />
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="#2EC4B6"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#CBACF9" />
      <div className="absolute inset-x-0 top-[5vw] flex flex-col items-center justify-center top-30 z-0">
        <TextHoverEffect text="SHREYA" />
        <TextHoverEffect text="PATIL" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 pointer-events-none">
        <p className="uppercase tracking-widest text-s text-center text-purple-100 pointer-events-none">
          echo &quot;Hello, World&quot; {">"} better_world.sh
        </p>
        <div className="w-full max-w-6xl px-4 pointer-events-none">
          <TextGenerateEffect
            words="Engineering impactful change with imagination, creativity, and curiosity."
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white text-black pointer-events-none">
            Hi! I&apos;m Shreya. Welcome to my personal portfolio.
          </p>
        </div>
        <div className="pointer-events-auto">
          <MagicButton
            title="About Me"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="pointer-events-auto"
            modalContent={
              <div className="p-8 pointer-events-auto">
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    About Me ✨
                  </span>{" "}
                </h4>
                <div className="flex justify-center items-center pointer-events-auto">
                  {[
                    IMG_2476,
                    IMG_5938,
                    IMG_0208,
                    IMG_2475,
                    IMG_1836,
                  ].map((image, idx) => (
                    <motion.div
                      key={"about-images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <Image
                        src={typeof image === "string" ? image : image.src}
                        alt="About Shreya"
                        width={500}
                        height={500}
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-6 px-4 max-w-3xl mx-auto">
                  <div className="max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed space-y-4">
                      <span className="block">
                        Hi! I&apos;m Shreya, a student a background in Electrical and Computer Engineering and currently advancing my studies in Computer Science at the graduate level with a passion for making an impact on the world using technology 🌎💻. I&apos;m interested in many areas of tech, but artificial intelligence, data engineering, and embedded systems interest me the most!
                      </span>

                      <span className="block">
                        I&apos;ve completed internships at Amazon Lab 126, Amazon, and John Deere, as well as worked on my own startups to practically apply my engineering skills, which you can learn about below ⬇️. On campus, I&apos;ve been very active, including participating &amp; mentoring in women in engineering organizations, holding various leadership positions, taking part in sustainability initiatives, projects, and councils, and working on social impact entrepreneurial projects ❤️🌍.
                      </span>

                      <span className="block">
                        Apart from ECE and CS courses, I pride myself in taking interdisciplinary coursework, specifically related to sustainability/energy/environment and industrial design. When I&apos;m not coding or building things, you can find me practicing yoga, cooking, painting, or tasting new pizza slices 🍕. I&apos;m very adventurous and love to travel and try new things 🪂🏄‍♀️. I am always looking to connect with people with similar interests, so feel free to reach out! 💬🤗
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            }
            modalClassName="w-full max-w-md" // optional
          />
        </div>
      </div>    
    </div>    
  );
};

export default Hero;