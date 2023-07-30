import Desktop2 from "./Desktop2";

const Intro = () => {
  return (

    <div class="grid grid-cols-1 md:grid-cols-5    w-screen  h-screen flex items-center justify-center">
      <div class="col-span-2">
        <p className='text-slate-100 text-8xl font-bold text-center py-5'>Jack Spinola</p>
        <p className='text-slate-100 text-6xl font-semibold text-center'>Software Developer</p>
        <ul class="mt-8 text-center text-xl">
          <li class="cursor-pointer hover:text-blue-500">
            <a href="#about">About</a>
          </li>
          <li class="cursor-pointer hover:text-blue-500">
            <a href="#education">Education</a>
          </li>
          <li class="cursor-pointer hover:text-blue-500">
            <a href="#experience">Experience</a>
          </li>
          <li class="cursor-pointer hover:text-blue-500">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div class="col-span-3">
        <Desktop2></Desktop2>
        <canvas className={"webgl2"}></canvas>
      </div>
    </div>
  );
};

export default Intro;
