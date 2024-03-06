import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Proyects } from "@/components/home/Proyects";

export default function Home() {
  return (
    <main className="page-bg relative z-1 overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0"></div>
      <Hero />
      <About />
      <Proyects />
    </main>
  );
}
