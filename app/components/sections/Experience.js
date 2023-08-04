
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import PhoneMesh from '../mesh/PhoneMesh';
const Experience = () => {
  const [isXLScreen, setIsXLScreen] = useState(false);

  // Function to check if the screen size is below xl breakpoint
  const checkWindowSize = () => {
    setIsXLScreen(window.innerWidth < 1780); // 1280 is the xl breakpoint in Tailwind CSS
  };

  // Add event listener to check window size on component mount and resize
  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <>
      <div className='h-40 pt-10'>
        <p className="text-slate-100 text-6xl font-bold text-center py-5 pt-14">Work Experience</p>

      </div>
      
      <div className={` ${isXLScreen ? " " : "grid grid-cols-1 xl:grid-cols-7"} w-screen h-sreen p-9 pt-12` }>
        <div className="col-span-4">

          <div className='flex flex-row gap-5 justify-center md:mb-14 md:pb-14'>
            <div>
              <Image
                src="/goclick.png"
                alt="goclick"
                className='rounded-full'
                width={65}
                height={65}
              />     </div>
            <div>
              <div className='flex flex-row gap-5'>
                <p className="text-slate-100 text-4xl font-semibold text-center lg:pt-4">GoClick</p>
                <p className="text-slate-100 text-2xl font-semibold lg:pt-6 ">Software Developer Intern </p>
              </div>

              <p className='text-slate-400'>| 01/2021 – 06/2021</p>
            </div>

          </div>
          <p className='text-slate-100 text-xl py-1'>
            As a Software Development Intern at GoClick, I engaged in dynamic projects amid COVID-19 challenges, including a cutting-edge Supermarket Delivery App. My role showcased growth through:
          </p>
          <ul className="list-inside text-slate-100 text-lg font-normal list-none pt-5 px-5 ">
            <li className='py-1'>🚀 Driving innovative Supermarket Delivery App development, addressing pandemic needs and reducing physical interactions.</li>
            <li className='py-1'>📈 Demonstrating adaptability with technologies like Spring Boot, MySQL, React Native, Node.Js, Stripe, and AWS.</li>
            <li className='py-1'>🛍️ Playing a pivotal role in crafting user-friendly shopping experiences amidst emerging challenges.</li>
            <li className='py-1'>💼 Excelling within cross-functional teams, translating concepts into real-world applications.</li>
            <li className='py-1'>🗣️ Effectively communicating project progress, enhancing transparency and accountability.</li>
            <li className='py-1'>🌐 Contributing to a safer environment through secure transaction apps during COVID-19 restrictions.</li>
          </ul>
         
          <div className='flex flex-row justify-center pt-10 lg:gap-4 pb-10'>
            <img
              class="rounded-full mx-2"
              src="/sb.png"
              title="Spring Boot"
              width={60}
              height={60}
              alt="Spring Boot" />
               <img
              class="rounded-full mx-2"
              src="/react.png"
              title="React Native"
              width={60}
              height={60}
              alt="React Native" />
            <img
              class="rounded-full mx-2"
              src="/aws.png"
              width={60}
              height={60}
              title="AWS"
              alt="AWS" />
            <img
              class="rounded-full mx-2"
              src="/stripe.png"
              width={60}
              height={60}
              title="Stripe"
              alt="Stripe" />
            <img
              class="rounded-full mx-2"
              src="/node.png"
              width={60}
              height={60}
              title="Node.Js"
              alt="Node.Js" />
              <img
              class="rounded-full mx-2"
              src="/sql.png"
              width={60}
              height={60}
              title="SQL"
              alt="SQL" />
          </div> 
        </div>
        {!isXLScreen && (
        <div className="col-span-3">
          <PhoneMesh mesh={"phonessr"} canvas={"phonessr"}></PhoneMesh>
          <canvas className={"phonessr "}></canvas>
        </div>
        )}
      </div>
    </>

  );
};

export default Experience;