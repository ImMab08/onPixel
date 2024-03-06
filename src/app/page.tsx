import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Proyects } from "@/components/home/Proyects";

export default function Home() {
  return (
    <main className=" bg-black">
      <Hero />
      <About />
      <Proyects />
    </main>
  );
}
