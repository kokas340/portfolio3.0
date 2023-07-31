import IntroMesh from "../mesh/IntroMesh";
import SocialLinks from "./sectionComponents/SocialLinks";
import Menu from "./sectionComponents/Menu";

const Intro = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-5    w-screen  h-screen flex items-center justify-center">
      <div class="col-span-2">
        <p className='text-slate-100 text-8xl font-bold text-center py-5 introText'>Jack Spinola</p>
        <p className='text-slate-100 text-6xl font-semibold text-center introText mb-12'>Software Developer</p>
        <div className="grid grid-cols-3">
          <div className="flex justify-end col-span-2 gap-8 mt-6">
            <SocialLinks/>
          </div>
          <div className="flex justify-end mt-6 pr-10">
            <Menu/>
          </div>
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
