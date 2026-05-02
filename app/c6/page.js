"use client";
import React, { useRef, useState } from "react";
import {
  Home,
  RemoveFormattingIcon,
  Motorbike,
  Github,
  Linkedin,
  RotateCcwKey,
  TerminalSquareIcon,
} from "lucide-react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-auto max-w-3xl bg-neutral-300 p-10 rounded-2xl flex gap-10 overflow-auto scrollbar-hide">
        {/* Note: If the parent container has flex property, then its children might shrink even if width is applied to them. Flex overrides the width property. So to avoid this use shrink-0 */}
        {/* Note: To hide the scrollbar use scrollbar-hide. Scrollbar hide is defined in the globals.css file */}
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
        <div className="h-80 w-80 shrink-0 bg-neutral-200 border border-neutral-500 rounded-3xl"></div>
      </div>
      <FloatingDocComponent />
    </div>
  );
};

const links = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Page C1",
    icon: RemoveFormattingIcon,
    href: "/c1",
  },
  {
    title: "Page C2",
    icon: Motorbike,
    href: "/c2",
  },
  {
    title: "Page C3",
    icon: Github,
    href: "/c3",
  },
  {
    title: "Page C4",
    icon: Linkedin,
    href: "/c4",
  },
  {
    title: "Page C5",
    icon: RotateCcwKey,
    href: "/c5",
  },
  {
    title: "Page C6",
    icon: TerminalSquareIcon,
    href: "/c6",
  },
];

const FloatingDocComponent = () => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      // clientX is the x coordinate of the mouse relative to the viewport (your screen)
      // pageX is the x coordinate of the mouse relative to the whole document. It remembers the all the parts of the document that you have scrolled past.
      onMouseLeave={(e) => mouseX.set(Infinity)}
      className="fixed bottom-30 inset-x-0 mx-auto rounded-2xl flex items-center justify-center gap-4 h-16 bg-neutral-200 w-fit px-4"
    >
      {links.map((elem, _) => (
        <IconContainer
          mouseX={mouseX}
          key={elem.title}
          elem={elem}
        />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ elem, mouseX }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (value) => {
    let bounds = ref?.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return value - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={elem.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="rounded-xl bg-neutral-300 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-0.5 whitespace-pre bg-neutral-100 rounded-md text-xs text-neutral-600 font-semibold"
            >
              {elem.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <elem.icon className="text-neutral-600 w-full h-full" />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default page;
