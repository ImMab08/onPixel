"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";
import { HiOutlineHome } from "react-icons/hi";
import { FaCodeBranch } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HiOutlineHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaCodeBranch className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

  ];
  return (
    <div className="md:hidden relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
