"use client";
import { stagger, useAnimate, motion } from "motion/react";
import React, { useEffect } from "react";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium possimus repellat incidunt quasi dolorem amet animi deleniti nemo repellendus. Fugiat labore eligendi laudantium ipsam dolores enim eveniet beatae quamHarum id, enim exercitationem quisquam cupiditate eaque quis voluptate placeat ea iusto atque nobis explicabo architecto rem soluta consequuntur minus unde, numquam qui ex fugit. Odit laboriosam molestias sed quam.";

const page = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      {
        duration: 0.4,
        delay: stagger(0.02),
      }
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <div className="bg-black h-screen w-full flex items-center">
      <div
        ref={scope}
        className="max-w-4xl m-auto tracking-wide text-white text-2xl font-medium"
      >
        {/* <span style={{ opacity: 0 }}>{text}</span> */}
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              style={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
                display: "inline-block",
              }}
              key={index}
            >
              {word} &nbsp;
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default page;
