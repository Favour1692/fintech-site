"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav className="fixed top-0 w-full h-auto px-4 py-6 border-b border-b-ivory/50 z-1000 bg-dim">
      <div className="w-[90%] h-auto mx-auto flex justify-between items-center text-ivory">
        <div className="text-lg md:text-xl">finch</div>
        <div className="hidden md:flex gap-6 items-center">
          {navdata.map((data) => (
            <Link key={data.id} href={data.link} className="text-lg md:text-xl">
              {data.title}
            </Link>
          ))}
          <Button variant="outline" className="bg-lightblue border-lightblue">
            Download app
          </Button>
        </div>
        {open ? <IoMdClose onClick={handleClick} className="z-110 md:hidden" /> : <FiMenu onClick={handleClick} className="z-110 md:hidden" />}
      </div>
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-[75%] h-full sm:w-full sm:h-auto sm:py-15 sm:rounded-b-xl flex flex-col gap-6 bg-lightblue pt-15 pl-12">
          {navdata.map((data) => (
            <Link key={data.id} href={data.link} className="text-lg">
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
