"use client"
import React, { useState, useEffect } from 'react';
import AboutMesh from './components/mesh/AboutMesh';
import Loading from './components/animation/Loading';
import Intro from './components/sections/Intro';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  };
  useEffect(() => {
    if (!loading) {
      document.querySelector('main').classList.remove('loading');
    }
  }, [loading]);

  return (
    <main class="font-mono snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden loading scroll-smooth">
      <section class="snap-start  w-screen h-screen relative">
        <div
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-teal-800 z-10 transition-opacity duration-500 ease-in-out ${loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <Loading />
        </div>
        <Intro />
      </section>
      <section id="about" class="snap-start  w-screen  h-screen ">
        <AboutMesh loading={loading} onLoadingComplete={handleLoadingComplete} />
        <canvas className={"webgl"}></canvas>
      </section>
      <section id="education" class="snap-start  w-screen h-screen ">
        <Education />
      </section>
      <section id="experience" class="snap-start  w-screen h-screen ">
        <Experience />
      </section>
      <section id="projects" class="snap-start  w-screen h-screen ">
        <Projects />
      </section>
    </main>
  );
}
