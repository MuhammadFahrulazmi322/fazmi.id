"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Card = () => {
  return (
    <section className="flex flex-row">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col gap-y-4 bg-white  shadow-2xl p-4 rounded-lg"
      >
        <Image
          src="/images/short-url.png"
          alt="card"
          width={400}
          height={400}
        />
        <div className="flex flex-row justify-left py-2 lg: lg:-translate-y-20 lg:translate-x-5 gap-x-1.5">
          {/* {Techstack} */}
          <div className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center">
            <Image
              src="/images/tailwind-css.svg"
              alt="tailwind"
              width={26}
              height={26}
            />
          </div>
          <div className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center">
            <Image
              src="/images/nextjs.svg"
              alt="nextjs"
              width={26}
              height={26}
            />
          </div>
          <div className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center">
            <Image
              src="/images/react.svg"
              alt="react"
              width={26}
              height={26}
            />
          </div>
          
        </div>
        <div className="relative lg:-translate-y-14 flex flex-col gap-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Short URL
          </h1>
          <p className="text-sm font-medium max-w-md text-center text-slate-500">
            You can shorten your URL at here build with Next JS, Tailwind CSS,
            React JS & Local Storage
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
