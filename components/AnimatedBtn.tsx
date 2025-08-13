"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

type Animatedprops = {
  children: React.ReactNode;
};

const MotionButton = motion(Button);

const AnimatedBtn = ({ children }: Animatedprops) => {
  return (
    <MotionButton
      whileHover={{ rotate: 5, scale: 1.02 }}
      whileTap={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      variant="default"
      className="font-semibold bg-contrast hover:bg-ivory dark:bg-contrast text-graphite dark:hover:bg-darkwhite dark:hover:text-graphite py-5 shadow-none transition-shadow hover:shadow-xl hover:shadow-black duration-200">
      {children}
    </MotionButton>
  );
};

export default AnimatedBtn;
