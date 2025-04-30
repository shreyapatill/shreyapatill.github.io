// components/ui/project-carousel.tsx
"use client";
import React, { useEffect, useRef, useState, createContext, useContext, JSX } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

interface CarouselProps {
  items: JSX.Element[];
}

type ProjectCard = {
  src: string;
  title: string;
  tags: string[]; // Changed from category to tags
  content: React.ReactNode;
  iconLists?: string[];
  link?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const ProjectCarousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
        >
          <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" },
                }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black-200 disabled:opacity-50 hover:bg-purple-300 transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-white-100" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black-200 disabled:opacity-50 hover:bg-purple-300 transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white-100" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectCard;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Remove currentIndex since it is not used
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef as React.RefObject<HTMLElement>, () => setOpen(false));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-black-200 border border-black-300 md:h-[28rem] md:w-80 hover:border-purple-200 transition-all"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black-200/80 via-transparent to-transparent" />
        <div className="relative z-40 p-6">
          {/* Tags preview (show first 2 tags) */}
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-0.5 rounded-full text-xs font-medium bg-black-100 border border-purple-300/30 text-purple-100"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-black-100 border border-black-300 text-white-200">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white-100 md:text-2xl">
            {project.title}
          </p>
        </div>
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="absolute inset-0 z-10 object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black-200/90 backdrop-blur-lg"
            />
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-[60] mx-auto my-10 h-fit max-w-4xl rounded-3xl bg-black-100 border border-black-300 p-6 font-sans md:p-10"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-purple-300 hover:bg-purple-200 transition-colors"
                onClick={() => {
                  setOpen(false);
                  onCardClose(index);
                }}
              >
                <IconX className="h-6 w-6 text-white-100" />
              </button>
              
              <h3 className="text-2xl font-semibold text-white-100 md:text-4xl">
                {project.title}
              </h3>
              <div className="py-6 text-white-200">{project.content}</div>
              
              {project.iconLists && (
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="border border-white/[.2] rounded-full bg-black-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * iconIndex + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={`tech-icon-${iconIndex}`}
                          width={50}
                          height={50}
                          className="p-1.5 w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple-200 group-hover:text-purple-300 transition-colors">
                        Project Link
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};