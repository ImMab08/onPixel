'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <></>
  );
}
