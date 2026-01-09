"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  X,
  MessageCircleMoreIcon,
  Settings2,
  TimerResetIcon,
  Database,
  Plus,
} from "lucide-react";

export const Card = () => {
  const [open, setopen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="w-80 min-h-110 h-110 rounded-xl custom-shadow p-4 flex flex-col"
          >
            <h2 className="font-bold font-mono text-[12px]">
              Mayank's UI Component
            </h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of beautiful UI components, let's get on with it
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setopen(false)}
                className="flex items-center gap-1.5 text-[10px] mt-4 custom-shadow px-2 py-1 rounded-md font-mono"
              >
                <Image
                  src="/anchor.svg"
                  width={50}
                  height={50}
                  alt="anchor_logo"
                  className="w-3 h-3"
                />
                Mayank
                <X className="w-3 h-3 text-neutral-500" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 mt-3 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  // duration: 0.5,
                  // ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute inset-0 w-full h-full rounded-lg bg-white divide-y divide-neutral-200"
              >
                <SeperateCards
                  Title="Chat"
                  Context="Message your friends and family"
                  Icon={MessageCircleMoreIcon}
                />
                <SeperateCards
                  Title="Settings"
                  Context="Configure your settings"
                  Icon={Settings2}
                />
                <SeperateCards
                  Title="24 hours"
                  Context="Super fast delivery"
                  Icon={TimerResetIcon}
                />
                <SeperateCards
                  Title="Database"
                  Context="Optimized database storage"
                  Icon={Database}
                />
                <div className="group flex flex-col items-center justify-center px-2 py-2 gap-1 cursor-pointer">
                  <div className="custom-shadow rounded-full p-1">
                    <Plus className="w-4 h-4 text-neutral-500" />
                  </div>
                  <span className=" text-[10px] font-medium font-mono">
                    Create project
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SeperateCards = ({ Title, Context, Icon }) => {
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="flex items-center px-4 py-4 gap-3 text-[11px] font-mono cursor-pointer"
    >
      <div className="custom-shadow p-1  rounded-sm">
        {<Icon className="w-4 h-4 text-neutral-500" />}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-[11px]">{Title}</span>
        <span className="text-[10px] text-neutral-500">{Context}</span>
      </div>
    </motion.div>
  );
};
