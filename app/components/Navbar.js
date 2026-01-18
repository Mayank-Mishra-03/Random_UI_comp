"use client";
import {
  Github,
  Home,
  Linkedin,
  Motorbike,
  RemoveFormattingIcon,
  RotateCcwKey,
  TerminalSquareIcon,
} from "lucide-react";
import { useMotionValue, useTransform, motion, useSpring, useMotionTemplate } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";

const navLinks = [
  {
    title: "H",
    href: "/",
  },
  {
    title: "P1",
    href: "/c1",
  },
  {
    title: "P2",
    href: "/c2",
  },
  {
    title: "P3",
    href: "/c3",
  },
  {
    title: "P4",
    href: "/c4",
  },
  {
    title: "P5",
    href: "/c5",
  },
  {
    title: "P6",
    href: "/c6",
  },
  {
    title: "P7",
    href: "/c7",
  },
  {
    title: "P8",
    href: "/c8",
  },
];

const Navbar = () => {
  const mouseY = useMotionValue(Infinity);
  return (
    <div
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="fixed bottom-1/2 translate-y-1/2 left-5 z-50 bg-neutral-200 flex flex-col items-center justify-center gap-3 w-16 py-4 rounded-3xl"
    >
      {navLinks.map((elem, _) => (
        <IndividualLink
          key={elem.title}
          elem={elem}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
};

const IndividualLink = ({ elem, mouseY }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseY, (value) => {
    const bounds = ref?.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return value - bounds.y - bounds.height / 2;
  });

  const springVariables = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  };

  const widthTransform = useSpring(
    useTransform(distance, [-100, 0, 100], [40, 80, 40]),
    springVariables,
  );
  const heightTransform = useSpring(
    useTransform(distance, [-100, 0, 100], [40, 80, 40]),
    springVariables,
  );

  const fontSizeTransform = useSpring(
    useTransform(distance, [-100, 0, 100], [1, 1.7, 1]),
    springVariables,
  );

  return (
    <Link href={elem.href}>
      <motion.div
        ref={ref}
        style={{ width: widthTransform, height: heightTransform }}
        className="bg-neutral-300 p-2 rounded-full flex items-center justify-center"
      >
        <motion.div
          style={{ fontSize: useMotionTemplate`${fontSizeTransform}rem` }}
          className="text-neutral-600 font-semibold w-full h-full flex items-center justify-center"
        >
          {elem.title}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navbar;
