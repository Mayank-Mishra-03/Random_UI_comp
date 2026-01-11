"use client";
import React from "react";
import { motion, useAnimate } from "motion/react";
import { Check, Loader } from "lucide-react";

const page = () => {
  const [scope, animate] = useAnimate();

  const startAnimating = async () => {
    await animate(
      ".loader-icon",
      {
        opacity: 1,
        width: "2rem",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".loader-icon",
      {
        rotate: 360 * 3,
      },
      {
        duration: 3,
        ease: "linear",
      }
    );
    animate(
      ".loader-icon",
      {
        opacity: 0,
        width: 0,
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: "4.5rem",
        borderRadius: "200px",
      },
      {
        duration: 0.3,
      }
    );
    animate(
      "button",
      {
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #22c55e, #22c55e)",
      },
      {
        duration: 0.6,
      }
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
      },
      { duration: 0.3 }
    );
  };
  return (
    <div
      ref={scope}
      className="bg-amber-100 min-h-screen flex items-center justify-center relative"
    >
      <div className="w-full fixed top-0 bg-amber-500 py-1">
        <motion.span
          initial={{ x: -300 }}
          animate={{ x: "100vw" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="text-white font-medium tracking-wider text-sm inline-block"
        >
          !! Pay rightnow to get exclusive offers !!
        </motion.span>
      </div>
      <motion.button
        onClick={startAnimating}
        className="h-18 w-90 rounded-lg bg-linear-to-r from-amber-300 via-amber-500 to-amber-700 cursor-pointer text-white font-medium flex items-center justify-center gap-0.5"
      >
        <Loader
          style={{
            opacity: 0,
            width: 0,
          }}
          className="loader-icon"
        />
        <span className="text">Pay Now</span>
        <Check
          size={30}
          style={{
            opacity: 0,
          }}
          className="check-icon absolute inset-0 m-auto"
        />
      </motion.button>
    </div>
  );
};

export default page;
