
import PhotoMesh from "../mesh/PhotoMesh";
const Education = () => {
  return (
    <>
      <div className=" titlePosition ">
        <p className='text-slate-100 text-5xl font-bold  py-5'>Education</p>
      </div>
      <div class="grid grid-cols-1 2xl:grid-cols-4    w-screen sm:pr-12">
        <div class="col-span-2  ">
          <div className="flex justify-center pt-12 ">
            <PhotoMesh mesh={"photoFrame"} canvas={"photo"} className=""></PhotoMesh>
            <canvas className={"photo "}></canvas>
          </div>
          <p class='text-slate-100 text-3xl font-semibold text-center'>Cristóvão Colombo</p>
          <p class="text-slate-100 text-2xl font-semibold text-center py-3">Technical Degree in Informatics & Programming</p>
          <p className="text-slate-400 text-xl  text-center">2018 - 20215</p>
        </div>
        <div class="col-span-2">
          <div className="flex justify-center pt-12 ">
            <PhotoMesh mesh={"photoFrame2"} canvas={"photo2"} className=""></PhotoMesh>
            <canvas className={"photo2 "}></canvas>
          </div>
          <p class='text-slate-100 text-3xl font-semibold text-center'>VIA University</p>
          <p class="text-slate-100 text-2xl font-semibold text-center py-3">Bachelor's Degree in Software Engineering </p>
          <p className="text-slate-400 text-xl  text-center">2022 - 2025</p>
        </div>
      </div>
    </>

  );
};

export default Education;
