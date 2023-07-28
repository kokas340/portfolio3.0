"use client"
import React, { useState } from 'react';
import ThreeScene from './components/ThreeScene';
import Navbar from './components/Navbar';
import NeonBg from './components/NeonBg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <main className='wrapper font-roboto'>
      
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {loading && (
        <div className="loading-overlay flex items-center justify-center">
          {/* Add your cool loading animation or spinner here */}
          <div className="loading-spinner animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
        </div>
      )}
        <ThreeScene loading={loading} onLoadingComplete={handleLoadingComplete} />
        <canvas className={"webgl"}></canvas>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex-1 flex items-center justify-center ">
          <h1 id="intoText" className="text-4xl font-bold ">Welcome to Our Website</h1>
        </div>

        <div className="flex-1 flex items-center justify-center ">
          <h1 id="intoText" className="text-4xl font-bold ">Welcome to Our Website</h1>
        </div>
      </section>
    </main>
  );
}
