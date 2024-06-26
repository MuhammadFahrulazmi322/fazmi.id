"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const scaleVariants = {
    whileinView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row justify-center items-center mt-20  xl:min-h-screen pb-20 "
        id="home"
      >
        <div className="gap-y-8 flex flex-col m-4 flex-start lg:max-w-[720px] 2xl:max-w-full">
          <div className="z-5 shadow-lg shadow-black-200 bg-slate-200 p-4 lg:p-4 xl:p-8  rounded-l-xl rounded-tr-xl font-bold text-right flex flex-col gap-4 ">
            <p className="text-sm md:text-xl 2xl:text-2xl font-montserrat">
              👋 Hi, I am Muhammad Fahrul Azmi Husni
            </p>
            <p className="text-sm md:text-base 2xl:text-xl">
              Frontend Developer
            </p>
          </div>
          <div className="z-5 bg-slate-200 shadow-lg shadow-black-200 text-red-400 p-4 lg:p-8 rounded-xl text-sm md:text-base font-normal text-right leading-normal">
            <Typewriter
              options={{
                strings: [
                  " Front-end and Next JS Specialist",
                  " 4 Years Experience",
                  " I’ve been working with request client",
                  " And working at Klinik Gigi Mentari",
                  " To build great software",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "custom-typewriter",
                cursorClassName: "custom-cursor",
                delay: 50,
              }}
            />
          </div>
        </div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileinView}
          className="flex flex-row xl:px-12 px-8 lg:flex-col lg:gap-y-2 gap-2 justify-center items-center m-4"
        >
          <div className=" p-2 lg:p-4 bg-white rounded-full lg:relative lg:drop-shadow-xl lg:translate-x-20">
            <Image
              src="/images/nextjs.svg"
              alt="nextjs"
              width={48}
              height={48}
              className="w-8 h-8 2xl:w-10 2xl:h-10"
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-12">
            <Image
              src="/images/react.svg"
              alt="react"
              width={48}
              height={48}
              className="w-8 h-8 2xl:w-10 2xl:h-10 "
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-6">
            <Image
              src="/images/typescript-icon.svg"
              alt="typescript"
              width={48}
              height={48}
              className="w-8 h-8 2xl:w-10 2xl:h-10 "
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-12">
            <Image
              src="/images/tailwind-css.svg"
              alt="tailwind"
              width={48}
              height={48}
              className="w-8 h-8 2xl:w-10 2xl:h-10 "
            />
          </div>
          <div className="p-2 lg:p-4 bg-white rounded-full  lg:relative lg:drop-shadow-xl lg:translate-x-20">
            <Image
              src="/images/redux-original.svg"
              alt="redux"
              width={48}
              height={48}
              className="w-8 h-8 2xl:w-10 2xl:h-10 "
            />
          </div>
        </motion.div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/fahrul.png"
            alt="Fazmi Dev"
            width={300}
            height={300}
            className="2xl:w-[600px] 2xl:h-auto lg:w-300px"
            priority
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
