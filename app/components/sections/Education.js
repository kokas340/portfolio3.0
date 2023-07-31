import EpccMesh from "../mesh/EpccMesh";

const Education = () => {
  return (

    <div class="grid grid-cols-1 md:grid-cols-5   px-12 w-screen  h-screen ">
      <div class="col-span-2">
        <p className='text-slate-100 text-8xl font-bold text-center py-5'>Education</p>
        <p className='text-slate-100 text-5xl font-semibold text-center'>Cristóvão Colombo</p>
        <div className=" ">
        <EpccMesh></EpccMesh>
        <canvas className={"webgl3"}></canvas>
        </div>
     
      </div>
      <div class="col-span-">
      <p className='text-slate-100 text-8xl font-bold text-center py-5'></p>
        <p className='text-slate-100 text-5xl font-semibold text-center'>VIA University</p>
       
      </div>
    </div>
  );
};

export default Education;
