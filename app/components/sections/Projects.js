import ProjectMesh from "../mesh/ProjectMesh";

const Projects = () => {

  return (
    <>
      <div className="h-28">
        <p className=' text-slate-100 text-5xl font-bold text-center  pt-12'>Projects</p>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-6    w-screen  h-screen ">
        <div class="col-span-2 pt-12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <a className='z-50' href="https://www.rigacup.lv/" target="_blank">
            <div className="flex justify-center">
              <ProjectMesh mesh={"riga"} canvas={"webglChess2"}></ProjectMesh>
              <canvas className={"webglChess2"}></canvas>
            </div>
            <div className="pt-4  flex justify-center ">
              <div className="w-5/6">
                <p className='text-slate-100 text-2xl font-semibold text-center pt-6'>Riga Cup</p>
                <p className='text-slate-100   text-center pt-9 px-12 pl-4 '>I developed the backend for this system managing all the tournaments and teams.</p>
              </div>
            </div>
          </a>
          <div className='flex flex-row justify-center pt-10'>
            <img
              class="rounded-full mx-2"
              src="/PHP.png"
              title="PHP"
              width={60}
              height={60}
              alt="PHP" />
            <img
              class="rounded-full mx-2"
              src="/html.png"
              width={60}
              height={60}
              title="HTML"
              alt="HTML" />
            <img
              class="rounded-full mx-2"
              src="/js.png"
              width={60}
              height={60}
              title="JS"
              alt="JS" />
            <img
              class="rounded-full mx-2"
              src="/bootstrap.png"
              width={60}
              height={60}
              title="Bootstrap"
              alt="Bootstrap" />
            <img
              class="rounded-full mx-2"
              src="/codeig.png"
              width={60}
              height={60}
              title="Code Igniter"
              alt="Code Igniter" />
              <img
              class="rounded-full mx-2"
              src="/sql.png"
              width={60}
              height={60}
              title="SQL"
              alt="SQL" />
          </div>
        </div>

        <div class="col-span-2 pt-12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <a className='z-50' href="https://github.com/kokas340/chess" target="_blank">
            <div className="xl:h-160">
              <ProjectMesh mesh={"chess"} canvas={"webglChess"}></ProjectMesh>
              <canvas className={"webglChess"}></canvas>
            </div>
            <div className="pt-4  flex justify-center ">
              <div className="w-3/4">
                <p className='text-slate-100 text-2xl font-semibold text-center pt-6'>Chess</p>
                <p className='text-slate-100   text-center pt-9 px-9'>I took this on as a challenge, not being allowed to use any chess pre-built libraries.</p>
              </div>
            </div>
          </a>
          <div className='flex flex-row justify-center pt-10'>
            <img
              class="rounded-full mx-2"
              src="/react.png"
              title="React"
              width={60}
              height={60}
              alt="React" />
            <img
              class="rounded-full mx-2"
              src="/tailwind.jpg"
              title="Tailwind"
              width={60}
              height={60}
              alt="Tailwind" />
          </div>
        </div>

        <div class="col-span-2 pt-12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <a className='z-50' href="https://github.com/kokas340/FirebaseChat" target="_blank">
            <div>
              <ProjectMesh mesh={"phone"} canvas={"webglPhone"}></ProjectMesh>
              <canvas className={"webglPhone "}></canvas>
            </div>
            <div className="pt-4  flex justify-center ">
              <div className="w-3/4">
                <p className='text-slate-100 text-2xl font-semibold text-center pt-6'>Messenger App</p>
                <p className='text-slate-100   text-center px-9 pt-9'>I had too much time on my hands and decided to create a chat app with React Native and Firebase.</p>
              </div>
            </div>
          </a>
          <div className='flex flex-row justify-center pt-10'>
            <img
              class="rounded-full mx-2"
              src="/react.png"
              title="React Native"
              width={60}
              height={60}
              alt="React Native" />
            <img
              class="rounded-full mx-2"
              src="/firebase.jpg"
              title="Firebase"
              width={60}
              height={60}
              alt="Firebase" />
          </div>
        </div>

      </div>
    </>

  );
};

export default Projects;


