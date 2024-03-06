"use client";
import React from "react";
import { useState, useEffect } from 'react';

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
    <section className="container mx-auto  items-center h-screen flex">
      <div className="w-1/2">
      </div>
      <div className="w-1/2">
      </div>
    </section>
  );
}

// const TransitionWord = ({ word }) => {
//   return (
//     <span className="inline-block" key={word}>
//       {word}
//     </span>
//   );
// }