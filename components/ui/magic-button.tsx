"use client";
import React, { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * UI: border magic from tailwind css btns
 * Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 * change border radius to rounded-lg
 * add margin of md:mt-10
 * remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  modalContent,
  modalClassName,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  modalContent?: ReactNode;
  modalClassName?: string;
}) => {
  if (modalContent) {
    return (
      <ModalProvider>
        <MagicButtonWithModal 
          title={title}
          icon={icon}
          position={position}
          otherClasses={otherClasses}
          modalContent={modalContent}
          modalClassName={modalClassName}
        />
      </ModalProvider>
    );
  }

  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#B5446E_50%,#CBACF9_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

const MagicButtonWithModal = ({
  title,
  icon,
  position,
  otherClasses,
  modalContent,
  modalClassName,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
  modalContent?: ReactNode;
  modalClassName?: string;
}) => {
  const { open, setOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <>
      <button
        className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
        onClick={() => setOpen(true)}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#B5446E_50%,#CBACF9_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black-100 bg-opacity-50"
            />
            
            <motion.div
              ref={modalRef}
              className={cn(
                "min-h-[50%] max-h-[90%] w-[90%] md:max-w-[60%] bg-white-100 dark:bg-black-100 border border-transparent dark:border-black-200 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden overflow-y-auto",
                modalClassName
              )}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateX: 40,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black-100 dark:text-white-100 h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col flex-1 p-8 md:p-10 text-black dark:text-white-100">
                {modalContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export default MagicButton;