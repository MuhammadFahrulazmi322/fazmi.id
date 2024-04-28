import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center  xl:min-h-screen pb-20">
        <div className="gap-y-8 flex flex-col m-4 flex-start">
          <div className=" shadow-lg shadow-black-200 bg-slate-200 p-4 lg:p-4 xl:p-8 md:max-w-md rounded-l-xl rounded-tr-xl font-bold text-right flex flex-col gap-4">
            <p className="text-sm md:text-base">
              HI, I am Muhammad Fahrul Azmi Husni
            </p>
            <p className="text-sm md:text-base">Frontend Developer</p>
          </div>
          <div className=" bg-slate-200 p-2 lg:p-8 rounded-l-xl rounded-tr-xl text-5xl font-normal md:max-w-md text-right leading-normal">
            <p className="text-sm md:text-base">
              Front-end and Next JS Specialist. For the past 4 years, I’ve been
              working with request client and Klinik Gigi Mentari to build great
              software.
            </p>
          </div>
        </div>
        <div className="flex flex-row xl:px-12 lg:flex-col lg:gap-y-4 gap-2 justify-center items-center m-4">
          <div className="p-2 lg:p-4 bg-white rounded-full lg:relative lg:drop-shadow-xl lg:translate-x-20">
            <Image
              src="/images/nextjs.svg"
              alt="nextjs"
              width={48}
              height={48}
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-12">
            <Image src="/images/react.svg" alt="react" width={48} height={48} />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-6">
            <Image
              src="/images/typescript-icon.svg"
              alt="typescript"
              width={48}
              height={48}
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-12">
            <Image
              src="/images/tailwind-css.svg"
              alt="tailwind"
              width={48}
              height={48}
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-20">
            <Image
              src="/images/redux-original.svg"
              alt="redux"
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/fahrul.png"
            alt="Fazmi Dev"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
