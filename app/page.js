"use client"
import React, { useState,useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import Navbar from './components/Navbar';
import NeonBg from './components/NeonBg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);

  };


  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.querySelector('main').setAttribute('id', '');
    } else {
      document.body.style.overflow = 'visible';
      document.querySelector('main').setAttribute('id', 'container');
    }
  }, [loading]);
  return (
    <main id="container" className='delscorl'>
    <section class=" h-screen mb-7">
    <ThreeScene loading={loading} onLoadingComplete={handleLoadingComplete} />
        <canvas className={"webgl"}></canvas>
    {loading && (
        <svg width="200" height="200" viewBox="0 0 100 100">
        <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
        <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
        <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
        <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
      </svg>
      )}
   
    </section>
    <section class=" h-screen">
    <h1 id="intoText" className="text-4xl font-bold ">Welcome to Our Website</h1>
    </section>
    
  </main>
  );
}
