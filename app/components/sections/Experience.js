

import Image from 'next/image';
import PhoneMesh from '../mesh/PhoneMesh';
const Experience = () => {
  return (
    <>
    <div className='h-40 pt-10'>
    <p className="text-slate-100 text-6xl font-bold text-center py-5 pt-14">Work Experience</p>

    </div>
c
      <div className="grid grid-cols-1 xl:grid-cols-6 w-screen h-sreen p-9 pt-12">
        <div className="col-span-3">

          <div className='flex flex-row gap-5 justify-center md:mb-14 md:pb-14'>
            <Image
              src="/goclick.png"
              alt="goclick"
              className='rounded-full'
              width={65}
              height={65}
            />
            <p className="text-slate-100 text-4xl font-semibold text-center pt-4">GoClick</p>
            <p className="text-slate-100 text-2xl font-semibold pt-6 ">Software Developer Intern <span className='text-slate-400'>| 01/2021 – 06/2021</span></p>
       
          </div>

          <ul className="list-disc list-inside text-slate-100 text-lg font-normal">
              <li>
                Worked as a software developer on a team responsible for developing an e-commerce app.
              </li>
              <li>
                Collaborated with a team of developers and designers to ensure the app was user-friendly.
              </li>
              <li>
                Contributed to the entire software development lifecycle, including requirements gathering,
                design, development, and testing.
              </li>
              <li>
                Demonstrated strong problem-solving skills and ability to learn quickly and adapt to new technologies.
              </li>
              <li>
                Developed valuable communication and collaboration skills by presenting project progress to the
                team and providing updates to the client.
              </li>
              <li>
                These projects were made during the COVID-19 pandemic and served as a solution for a more secure
                environment, reducing contact between people.
              </li>
            </ul>
            <p className="text-slate-100 text-lg font-normal text-center">
              Technologies used: Spring Boot, MySQL, React Native, Node.Js, Stripe, AWS
            </p>
        </div>
        <div className="col-span-3">
            <PhoneMesh mesh={"phonessr"} canvas={"phonessr"}></PhoneMesh>
            <canvas className={"phonessr "}></canvas>
        </div>
      </div>
    </>

  );
};

export default Experience;