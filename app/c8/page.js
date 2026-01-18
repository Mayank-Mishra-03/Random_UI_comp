"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises. ",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    image:
      "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been a game-changer for our team. Highly recommended!",
    name: "Sarah Chen",
    designation: "CTO at TechFlow",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A truly intuitive platform that has streamlined our workflow significantly.",
    name: "Michael Ross",
    designation: "Product Manager at Innovate Inc",
    image:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "We've seen a 30% increase in productivity since integrating this solution.",
    name: "Emily Davis",
    designation: "Operations Director at SwiftLogistics",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The customer support is unparalleled. They really care about your success.",
    name: "David Wilson",
    designation: "Founder at StartupHub",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Flexible, powerful, and easy to use. Exactly what we were looking for.",
    name: "Jessica Lee",
    designation: "Senior Designer at CreativeWorks",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple. ",
    name: "Robert Taylor",
    designation: "CISO at SecureNet",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The analytics dashboard is incredibly detailed and helpful for decision making.",
    name: "Linda Martinez",
    designation: "VP of Marketing at BrightFuture",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const page = () => {
  const [active, setactive] = useState(testimonials[0]);

  const handlePrev = () => {
    setactive(
      (prev) =>
        testimonials[
          (testimonials.length + testimonials.indexOf(prev) - 1) %
            testimonials.length
        ],
    );
  };
  const handleNext = () => {
    setactive(
      (prev) =>
        testimonials[(testimonials.indexOf(prev) + 1) % testimonials.length],
    );
  };

  const isActive = (index) => {
    return testimonials[index] === active;
  };

  const randomRotate = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 gap-20 max-w-4xl mx-auto h-1/2 relative">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotate(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomRotate(),
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: randomRotate() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                key={testimonial.name}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={400}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div>
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="py-5"
          >
            <h2 className="font-bold text-2xl">{active.name}</h2>
            <p className="text-neutral-400 text-base">{active.designation}</p>
            <p className="text-neutral-600 text-lg font-semibold pt-10 flex flex-wrap">
              {active.quote.split(" ").map((word, idx) => (
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: idx * 0.05 }}
                  key={word + idx}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>
          <div className="flex gap-10 absolute bottom-1/4">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center hover:rotate-17 transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="h-6 w-6 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center hover:-rotate-17 transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="h-6 w-6 text-black cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
