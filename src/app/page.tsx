import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Proyects } from "@/components/home/Proyects";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Proyects />
      <Contact />
    </main>
  );
}
