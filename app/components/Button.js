import React from "react";

import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });

const Button = () => {
  return (
    <div className="rounded-md relative group pl-8 pr-3 tracking-tight border border-white/30 flex items-center gap-2 overflow-hidden">
      <Box />
      <div className="absolute inset-0 bg-white/20 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] transition-[clip-path] duration-400 ease-out"></div>
      <span
        className={`text-white inline-block group-hover:-translate-x-6 transition-transform duration-400 ${kalam.className}`}
      >
        Chat with Me
      </span>
    </div>
  );
};

const Box = () => {
  return (
    <div className="size-6 absolute group-hover:left-[calc(100%-1.5rem)] group-hover:transform group-hover:rotate-180 ease-out left-0 inset-y-0 my-auto transition-all duration-400 flex gap-px flex-col rounded-[5px] bg-yellow-500 justify-center items-center z-40">
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
};

const Bubble = ({ highlight }) => {
  return (
    <span
      className={`inline-block size-[3px] rounded-full shrink-0 ${highlight ? "bg-white animate-pulse ease-linear duration-200" : "bg-white/25"}`}
    ></span>
  );
};

export default Button;
