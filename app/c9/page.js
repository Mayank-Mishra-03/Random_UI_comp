"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SearchIcon } from "lucide-react";

const SVGFilter = () => {
  return (
    <svg className="absolute hidden h-0 w-0">
      <defs>
        <filter
          id="gooey-filter"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite
            in="SourceGraphic"
            in2="goo"
            operator="atop"
          />
        </filter>
      </defs>
    </svg>
  );
};

const GooeyFilter = () => {
  const [isExpanded, setisExpanded] = useState(false);
  const inputRef = useRef(null);
  const [searchText, setsearchText] = useState("");

  const buttonVariants = {
    collapsed: {
      width: 115,
      marginLeft: 0,
    },

    expanded: {
      width: 200,
      marginLeft: 50,
    },
  };

  const iconBubbleVariants = {
    collapsed: {
      scale: 0,
      opacity: 0,
    },
    expanded: {
      scale: 1,
      opacity: 1,
    },
  };

  const Transition = {
    duration: 1,
    type: "spring",
    bounce: 0.25,
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    } else {
      setsearchText("");
    }
  }, [isExpanded]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="relative flex items-center justify-center">
        <SVGFilter />
        <div
          style={{ filter: "url(#gooey-filter)" }}
          className="relative flex h-10 items-center justify-center"
        >
          <motion.div
            variants={buttonVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={Transition}
            className="h-10 flex items-center justify-center"
          >
            <button
              onClick={() => setisExpanded(true)}
              className="h-10 w-full cursor-pointer items-center justify-center flex gap-2 rounded-full bg-black text-white font-medium px-4"
            >
              {!isExpanded ? <SearchIcon /> : <></>}
              <motion.input
                layoutId="input"
                ref={inputRef}
                type="text"
                value={searchText}
                onBlur={() => !searchText && setisExpanded(false)}
                onChange={(e) => setsearchText(e.target.value)}
                placeholder="Search..."
                className="h-full w-full bg-transparent text-sm placeholder-white/50 outline-0"
              />
            </button>
          </motion.div>

          <motion.div
            variants={iconBubbleVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={Transition}
            className="absolute top-1/2 left-0 size-10 bg-black -translate-y-1/2 items-center justify-center flex rounded-full"
          >
            <SearchIcon
              color="white"
              size={20}
            />
          </motion.div>
        </div>
      </div>

      <div>
        <SVGFilter />
        <div
          style={{ filter: "url(#gooey-filter)" }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{
              x: [0, 70, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="size-12 bg-red-500 rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -70, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="size-12 bg-blue-500 rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default GooeyFilter;
