"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Mode from "@/components/Mode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full h-auto px-4 py-6 z-1000 bg-transparent">
      <div className="w-[90%] h-auto mx-auto flex justify-between items-center text-ivory">
        <div className="text-lg md:text-xl">
          <Link href="/">Cashivo</Link>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
          {navdata.map((data) => (
            <Link key={data.id} href={data.link} className="text-lg md:text-xl">
              {data.title}
            </Link>
          ))}
          <Button variant="outline" className="bg-lightblue dark:bg-darkblue dark:hover:bg-darkwhite dark:hover:text-graphite border-lightblue">
            Download app
          </Button>
          <Mode />
        </div>
        <div className="lg:hidden flex gap-4 items-center">
          <Mode />
          {open ? <IoMdClose onClick={handleClick} className="z-110 lg:hidden" /> : <FiMenu onClick={handleClick} className="z-110 lg:hidden" />}
        </div>
      </div>
      {open && (
        <div className="lg:hidden fixed top-0 left-0 w-[75%] h-full sm:w-full sm:h-auto sm:py-15 sm:rounded-b-xl flex flex-col gap-6 bg-lightblue pt-15 pl-12">
          {navdata.map((data) => (
            <Link key={data.id} href={data.link} onClick={handleClick} className="text-lg">
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
