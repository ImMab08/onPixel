"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { clearInterval } from "timers";
import { animate } from "framer-motion";

export const Hero = () => {
  // const [wordIndex, setWordIndex] = useState(0);
  // const words = ['Software', 'Webs', 'fantastic', 'incredible']; // Lista de palabras

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cambia la palabra cada cierto tiempo
  //   }, 2000); // Cambia cada 2 segundos (ajusta según sea necesario)

  //   return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  // }, [words.length]);

  return (
    <section className=" mx-5 w-auto h-[680px] md:h-screen md:mx-20 items-center flex flex-col justify-center text-hero ">
      <div className="w-full md:flex">
        <div className="md:w-1/2 mx-auto flex items-center justify-center flex-col md:mt-20">
          <h1 className="text-white text-center md:text-left text-4xl md:text-7xl font-semibold">
            Transformamos ideas en soluciones digitales excepcionales.
          </h1>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10 md:mt-20">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ff26_0%,#393BB2_50%,#00ff26_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-lg font-medium text-white backdrop-blur-3xl">
              Contactanos ahora
            </span>
          </button>
        </div>

        <div className="w-1/2 hidden md:block relative top-10 left-10">
          <Image
            src="/img/fondo-hero.png"
            className=""
            width={600}
            height={500}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

// const TransitionWord = ({ word }) => {
//   return (
//     <span className="inline-block" key={word}>
//       {word}
//     </span>
//   );
// }
