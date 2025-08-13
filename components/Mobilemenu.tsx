"use client";

import Link from "next/link";
import { navdata } from "@/constants";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { MobileMenuProps } from "@/type";

const Mobilemenu = ({ open, handleClick }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 overflow-hidden max-w-full">
          {/* backdrop blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" onClick={handleClick} />
          {/* menu panel */}
          <div className="absolute top-0 left-0 h-full w-[75%] sm:w-[60%] max-w-full bg-lightblue shadow-lg flex flex-col gap-6 pt-15 pl-12 z-20">
            {navdata.map((data) => {
              const isActive = pathname === data.href;
              return (
                <Link key={data.id} href={data.href} onClick={handleClick} className={`${isActive ? `text-dim` : `text-darkwhite`} text-lg text-darkwhite active:text-contrast focus:text-contrast font-semibold`}>
                  {data.title}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobilemenu;
