"use client";
import React from "react";
import Image from "next/image";
import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

const RESUME_LINK = "https://drive.google.com/file/d/1dOdZZnbsTpyZ8SWOLFN5kxJc5KqfEOWy/view?usp=sharing";

const Experience = () => {
  return (
    <div id="workexperience" className="py-20 w-full">
      <h1 className="heading text-center mb-12 text-white">
        My <span className="text-purple-200">work experience</span>
      </h1>

      {/* Resume Button - Centered below heading */}
      <div className="flex justify-center mb-12">
        <MagicButton
          title="Complete Resume"
          icon={<FaLocationArrow />}
          position="right"
          onClick={() => window.open(RESUME_LINK, "_blank")}
          otherClasses="w-full md:w-auto" // Makes button full width on mobile, auto on desktop
        />
      </div>

      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex flex-col text-black dark:text-white border border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col sm:flex-row items-center p-5 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128}
                height={128}
                className="w-20 sm:w-32 object-contain"
              />
              <div className="text-left">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-white-100 mt-2 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;