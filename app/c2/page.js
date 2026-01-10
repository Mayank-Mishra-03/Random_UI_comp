"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

const links = [
  {
    id: 1,
    title: "Home",
    href: "/c2",
  },
  {
    id: 2,
    title: "About",
    href: "/c2",
  },
  {
    id: 3,
    title: "Contact",
    href: "/c2",
  },
  {
    id: 4,
    title: "Products",
    href: "/c2",
  },
  {
    id: 5,
    title: "Reviews",
    href: "/c2",
  },
];

const page = () => {
  const [hovered, sethovered] = useState(null);
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-start justify-center py-10">
      <div className="min-w-2/3 bg-neutral-300 flex items-center justify-evenly rounded-full px-2.5 py-1 border border-neutral-400">
        {links.map((link, index) => {
          return (
            <Link
              onMouseEnter={() => sethovered(index)}
              onMouseLeave={() => sethovered(null)}
              key={link.id}
              href={link.href}
              className="group text-sm text-neutral-700 relative w-3/4 h-full text-center py-3"
            >
              {hovered === index && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 w-full rounded-full bg-gray-900 "
                ></motion.div>
              )}
              <span className="relative group-hover:text-white transition-all delay-150">
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
