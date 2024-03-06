"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export const Hero = () => {
  return (
    <section className="h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="section-title md:text-7xl text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
        onPixel
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Apasionados por la tecnología y la creatividad. Con más de 4 años de experiencia, hemos transformando ideas en soluciones digitales excepcionales. Nuestro equipo diverso y talentoso se ha ganado la confianza de empresas líderes.
        </p>
      </div>
      <BackgroundBeams />
    </section>
  );
}