"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-container">
          <svg
            className="close-menu"
            onClick={closeMenu}
            width="30px"
            height="30px"
            viewBox="0 0 1024.00 1024.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <path
              fill="#ffffff"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-sm font-medium">
          <Link className="text-gray-400 hover:text-white text-2xl" href="/" onClick={closeMenu}>Nosotros</Link>
          <Link className="text-gray-400 hover:text-white text-2xl" href="/pricing" onClick={closeMenu}>Proyectos</Link>
          <Link className="text-gray-400 hover:text-white text-2xl" href="/pricing" onClick={closeMenu}>Contacto</Link>
        </div>
        <div>
          
        </div>
      </div>

       {/*z-[50] fixed top-0  */}
      <header className="w-full border-b backdrop-blur-sm bg-black/[0.6]">
        <div className="hidden md:flex container h-20 items-center justify-between max-w-[88rem] mx-auto">
          <div>
            <h1 className="section-title lg:text-[3.5rem] font-bold text-center text-white relative z-20">
              onPixel
            </h1>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium xl:flex">
            <a className="text-gray-400 hover:text-white text-2xl" href="/#About" onClick={closeMenu}>Nosotros</a>
            <Link className="text-gray-400 hover:text-white text-2xl" href="/#Proyects" onClick={closeMenu}>Proyectos</Link>
            <Link className="text-gray-400 hover:text-white text-2xl" href={"Contact"} onClick={closeMenu}>Contacto</Link>
          </div>
        </div>
        
        <div className="flex md:hidden container h-20 items-center justify-between px-5">
          <div className={`container-svg-header ${menuOpen ? "open" : ""}`}>
            <svg
              onClick={toggleMenu}
              width="35px"
              height="35px"
              viewBox="0 -1 12 12"
              id="meteor-icon-kit__regular-bars-s"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.85714 2C0.38376 2 0 1.55228 0 1C0 0.44772 0.38376 0 0.85714 0H11.1429C11.6162 0 12 0.44772 12 1C12 1.55228 11.6162 2 11.1429 2H0.85714zM0.85714 6C0.38376 6 0 5.5523 0 5C0 4.4477 0.38376 4 0.85714 4H11.1429C11.6162 4 12 4.4477 12 5C12 5.5523 11.6162 6 11.1429 6H0.85714zM0.85714 10C0.38376 10 0 9.5523 0 9C0 8.4477 0.38376 8 0.85714 8H11.1429C11.6162 8 12 8.4477 12 9C12 9.5523 11.6162 10 11.1429 10H0.85714z"
                fill="#fff"/>
            </svg>
          </div>
          <h1 className="section-title text-4xl font-bold text-center text-white relative z-20">
            onPixel
          </h1>
        </div>

      </header>
    </>
  );
};

{
  /* <section className="z-[50] fixed top-0 w-full border-b backdrop-blur-sm bg-black/[0.6] border-white/[0.1]">
<div className="hidden md:flex container h-20 items-center justify-between max-w-[88rem] mx-auto">
  <div>
    <h1 className="section-title lg:text-[3.5rem] font-bold text-center text-white relative z-20">onPixel</h1>
  </div>
  <div className="flex items-center space-x-6 text-sm font-medium xl:flex">
    <a className="text-gray-400 hover:text-white text-2xl" href="/" onClick={closeMenu}>
      Nosotros
    </a>
    <Link className="text-gray-400 hover:text-white text-2xl" href="/pricing" onClick={closeMenu}>
      Proyectos
    </Link>
    <Link className="text-gray-400 hover:text-white text-2xl" href="/pricing" onClick={closeMenu}>
      Contacto
    </Link>
  </div>
</div>
</section> */
}
