"use client"
import React, { useState, useEffect } from 'react';
import AboutMesh from './components/mesh/AboutMesh';
import Loader from './components/Loader';
import Intro from './components/sections/Intro';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);

  };


  useEffect(() => {
    if (!loading) {
      document.querySelector('main').classList.remove('loading');
    }
  }, [loading]);


  return (
    <main class="font-mono snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden loading scroll-smooth">
      <section class="snap-start  w-screen h-screen ">
     
        {loading ? (
          <Loader></Loader>
        ):(
          <Intro ></Intro>
        )}
      </section>
      <section id="about"class="snap-start  w-screen  h-screen ">
         
          <AboutMesh loading={loading} onLoadingComplete={handleLoadingComplete} />
        <canvas className={"webgl"}></canvas>
      </section>
      <section id="education" class="snap-start  w-screen h-screen ">
          <Education></Education>
      </section>
      <section id="experience" class="snap-start  w-screen h-screen ">
          <Experience></Experience>
      </section>
      <section id="projects" class="snap-start  w-screen h-screen ">
    <Projects></Projects>
      </section>
    </main>

  );
}
