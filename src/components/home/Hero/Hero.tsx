"use client";
import React from "react";
import Image from "next/image";

export const Hero = () => {

  return (
    <section className=" flex items-center   md:mx-40  text-hero ">
      <div className="md: h-screen  mx-auto flex items-center justify-center flex-col">
        <h1 className="text-white text-center text-4xl md:text-7xl font-semibold">
          Transformamos ideas en soluciones digitales excepcionales.
        </h1>
        {/* <a href="https://www.workana.com/freelancer/8f0b32ac61fc53c2da34af5335950a68" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10 md:mt-20">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ff26_0%,#393BB2_50%,#00ff26_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-lg font-medium text-white backdrop-blur-3xl">
            Contactanos ahora
          </span>
        </a> */}
      </div>
      {/* <div className="w-1/2 hidden md:block relative top-10 left-3">
        <Image
          src="/img/fondo-hero.png"
          className=""
          width={600}
          height={500}
          alt=""
        />
      </div> */}
    </section>
  );
};
