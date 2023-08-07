
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import PhoneMesh from '../mesh/PhoneMesh';
const Experience = () => {
  const [isXLScreen, setIsXLScreen] = useState(false);

  // Function to check if the screen size is below xl breakpoint
  const checkWindowSize = () => {
    setIsXLScreen(window.innerWidth < 1380); // 1280 is the xl breakpoint in Tailwind CSS
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
        <p className="text-slate-100 text-5xl font-bold text-center pt+2 pt-14">Work Experience</p>

      </div>
      
      <div className={` ${isXLScreen ? " " : "grid grid-cols-1 xl:grid-cols-6"} w-screen h-sreen p-2 pt-2` }>
        <div className="col-span-3 ">

          <div className='flex flex-row gap-5 justify-center md:mb-1 md:pb-1 '>
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
                <p className="text-slate-100 text-4xl font-semibold text-center lg:pt-2">GoClick</p>
                <p className="text-slate-100 text-2xl font-semibold lg:pt-4 ">Software Developer Intern</p>
              </div>

              <p className='text-slate-400'>01/2021 – 06/2021</p>
            </div>

          </div>
          <p className='text-xl text-slate-100 py-3 pl-2'>
  As a Software Development Intern at GoClick, I contributed to projects like a Supermarket Delivery App during COVID-19. My role included:
</p>
<ul className="list-inside list-none pt-5 px-5 text-slate-100">
  <li className='py-1'>🚀Driving Supermarket Delivery App development to address pandemic needs.</li>
  <li className='py-1'>🛍️Creating user-friendly shopping experiences amidst challenges.</li>
  <li className='py-1'>💼Collaborating in cross-functional teams to build real-world applications.</li>
  <li className='py-1'>🗣️Communicating project progress for transparency.</li>
  <li className='py-1'>🌐Contributing to secure transaction apps during COVID-19.</li>
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
        <div className="col-span-3 flex content-center">
          <PhoneMesh mesh={"phonessr"} canvas={"phonessr"}></PhoneMesh>
          <canvas className={"phonessr "}></canvas>
        </div>
        )}
      </div>
    </>

  );
};

export default Experience;