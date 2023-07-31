import IntroMesh from "../mesh/IntroMesh";

const Intro = ({onLoadingComplete}) => {



  return (

    <div class="grid grid-cols-1 md:grid-cols-5    w-screen  h-screen flex items-center justify-center">
      <div class="col-span-2">
        <p className='text-slate-100 text-8xl font-bold text-center py-5 introText'>Jack Spinola</p>
        <p className='text-slate-100 text-6xl font-semibold text-center introText mb-12'>Software Developer</p>
        <div className="  flex justify-end mt-8 pr-10">
          
          <ul class=" bottom-0 left-0 ">
            <li class="cursor-pointer hover:text-blue-500 about text-4xl  mb-2">
              <a href="#about">About</a>
            </li>
            <li class="cursor-pointer hover:text-blue-500 education text-4xl  mb-2">
              <a href="#education">Education</a>
            </li>
            <li class="cursor-pointer hover:text-blue-500 experience text-4xl  mb-2">
              <a href="#experience">Experience</a>
            </li>
            <li class="cursor-pointer hover:text-blue-500 projects text-4xl  mb-2">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

      </div>
      <div class="col-span-3">
        <IntroMesh ></IntroMesh>
        <canvas className={"webgl2"}></canvas>
      </div>
    </div>
  );
};

export default Intro;
