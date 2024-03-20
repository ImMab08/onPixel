"use client";
import Image from "next/image";
import { Tabs } from "./tabs";

export const Proyects = () => {
  const tabs = [
    {
      title: "LMS Landing, App and Software",
      value: "lms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#072E89] to-[#00FF26]">
          <p>LMS Landing, App and Software</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Tickets Software",
      value: "tickets",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#072E89] to-[#00FF26]">
          <p>Tickets Software</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Tourism & Hotel Platform",
      value: "tourism",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#072E89] to-[#00FF26]">
          <p>Tourism & Hotel Platform</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Landing Page",
      value: "landing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#072E89] to-[#00FF26]">
          <p>Landing Page</p>
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Memory Card Game",
      value: "memory",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#072E89] to-[#00FF26]">
          <p>Memory Card Game</p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div id="/#Proyects" className="relative flex flex-col item-center justify-center mt-20 mb-20">
      <h1 className="section-title text-center text-white font-bold text-6xl md:text-8xl">Proyectos</h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 md:my-20">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <Image
      src="/img/klazia-si.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent2 = () => {
  return (
    <Image
      src="/img/tickets.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent3 = () => {
  return (
    <Image
      src="/img/finqueo.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent4 = () => {
  return (
    <Image
      src="/img/cornerstone.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent5 = () => {
  return (
    <Image
      src="/img/memory.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
