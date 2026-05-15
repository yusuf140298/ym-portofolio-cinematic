"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const Scene = dynamic(() => import("@/components/three/scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-ink" />,
});

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </SmoothScrollProvider>
  );
}
