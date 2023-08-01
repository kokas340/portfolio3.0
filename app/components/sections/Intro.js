import React, { useState, useEffect } from "react";
import IntroMesh from "../mesh/IntroMesh";
import SocialLinks from "./sectionComponents/SocialLinks";
import Menu from "./sectionComponents/Menu";

const Intro = () => {
  const [isXLScreen, setIsXLScreen] = useState(false);

  // Function to check if the screen size is below xl breakpoint
  const checkWindowSize = () => {
    setIsXLScreen(window.innerWidth < 1280); // 1280 is the xl breakpoint in Tailwind CSS
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
    <div className={`grid grid-cols-1 xl:grid-cols-6 w-screen ${isXLScreen ? "h-screen" : ""} flex items-center justify-center`}>
      <div className="col-span-3">
        <p className="text-slate-100 text-8xl font-bold text-center py-5 introText">Jack Spinola</p>
        <p className="text-slate-100 text-6xl font-semibold text-center introText mb-12">Software Developer</p>
        <div className="grid grid-cols-1 xl:grid-cols-10">
          <div className="flex justify-center xl:justify-end col-span-7 gap-8 mt-6">
            <SocialLinks />
          </div>
          <div className="flex justify-center mt-6 col-span-3 pl-6">
            <Menu />
          </div>
        </div>
      </div>
      {!isXLScreen && (
        <div className="col-span-3">
          <IntroMesh></IntroMesh>
          <canvas className={"webgl2"}></canvas>
        </div>
      )}
    </div>
  );
};

export default Intro;
