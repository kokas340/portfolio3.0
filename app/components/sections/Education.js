import EpccMesh from "../mesh/EpccMesh";
import PhotoMesh from "../mesh/PhotoMesh";
const Education = () => {
  return (
    <>
      <div className="w-screen titlePosition">
        <p className='text-slate-100 text-8xl font-bold text-center py-5'>Education</p>
      </div>
      <div class="grid grid-cols-1 2xl:grid-cols-4   px-12 w-screen  2xl:h-screen ">
        <div class="col-span-2 px-2 ">
          <p className='text-slate-100 text-5xl font-semibold text-center'>Cristóvão Colombo</p>
          <div className="py-10 flex justify-center ">
          <p className="text-slate-100 text-2xl font-semibold">Technical Degree in Informatics & Programming | 2018 - 2021</p>
          </div>
          <div className="flex justify-center">
          <ul class="list-disc ">
            <li className="text-slate-100 text-xl py-1">Completed comprehensive Technical Degree in Informatics & Programming.</li>
            <li className="text-slate-100 text-xl py-1">Studied programming languages like Java, PhP, JavaScript and C#.</li>
            <li className="text-slate-100 text-xl py-1">6-month internship for real-world experience.</li>
            <li className="text-slate-100 text-xl py-1">Proficient in frameworks: React, React Native, CodeIgniter, and Bootstrap.</li>
           

          </ul>
          </div>
          <div className="flex justify-center pt-12 ">
          <PhotoMesh mesh={"photoFrame"} canvas={"photo"} className=""></PhotoMesh>
          <canvas className={"photo "}></canvas>
          </div>
          
        </div>
        <div class="col-span-2 px-10">
          <p class='text-slate-100 text-5xl font-semibold text-center'>VIA University</p>
          <div className="py-10 flex justify-center">
              <p class="text-slate-100 text-2xl font-semibold">Bachelor's Degree in Software Engineering | 2022 - 2025</p>
          </div>
          <div className="flex justify-center">
          <ul class="list-disc">
            <li class="text-slate-100 text-xl py-1">Pursuing a Bachelor's Degree in Software Engineering at VIA University.</li>
            <li class="text-slate-100 text-xl py-1">Focused on developing expertise in software development and engineering principles.</li>
            <li class="text-slate-100 text-xl py-1">Committed to gaining hands-on experience and applying theoretical knowledge.</li>
            <li class="text-slate-100 text-xl py-1">Actively engaged in academic projects to enhance problem-solving abilities.</li>
            <li class="text-slate-100 text-xl py-1">Eager to contribute to innovative solutions and advancements in the field.</li>
          </ul>
        </div>
        </div>
      </div>
    </>

  );
};

export default Education;
