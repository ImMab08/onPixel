"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const Contact = () => {
  const words = [
    {
      text: "Impulsa",
      className: "text-white text-6xl",
    },
    {
      text: "tus",
      className: "text-white text-6xl",
    },
    {
      text: "ideas",
      className: "text-white text-6xl",
    },
    {
      text: "Ahora.",
      className: "section-title text-6xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <p className="text-neutral-400 text-lg   ">
        No esperes más para contactarnos
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a target="_blank" href="https://www.workana.com/freelancer/8f0b32ac61fc53c2da34af5335950a68" className="w-40 h-10 rounded-xl bg-white text-black border border-black flex items-center justify-center text-bold  text-sm">
          Workana
        </a>
        <a href="" className="w-40 h-10 rounded-xl bg-white text-black border border-black flex items-center justify-center text-bold text-sm">
          Correo
        </a>
      </div>
    </div>
  );
}
