"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";

const springVariables = { stiffness: 100, damping: 20 };

const page = () => {
  const { scrollYProgress } = useScroll();

  const maskSize = useSpring(
    useTransform(scrollYProgress, [0, 1], [14000, 800]),
    springVariables,
  );
  const maskPosition = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1200, 100]),
    springVariables,
  );

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.3, 1]),
    springVariables,
  );

  const outerImageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springVariables,
  );

  const whiteFillOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div className="h-[300vh] bg-black">
      <motion.div
        style={{ scale: imageScale, opacity: outerImageOpacity }}
        className="fixed inset-0 h-full w-full bg-[url('/rockstarBackground.webp')] bg-fixed bg-cover"
      ></motion.div>
      <motion.div
        className="fixed inset-0 w-full h-full flex"
        style={{
          maskImage: "url('/mask.webp')",
          maskRepeat: "no-repeat",
          maskSize: useMotionTemplate`${maskSize}px`,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
        }}
      >
        <motion.div
          style={{ scale: imageScale }}
          className="fixed inset-0 h-full w-full bg-[url('/rockstarBackground.webp')] bg-fixed bg-cover"
        ></motion.div>
        <motion.div
          style={{ opacity: whiteFillOpacity }}
          className="fixed inset-0 h-full w-full bg-white"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default page;
