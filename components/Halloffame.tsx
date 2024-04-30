"use client";

import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Halloffame = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-blue-300/20 py-4 md:py-8"
    >
      <div className="font-bold">
        <h1 className=" text-lg lg:text-3xl text-center ">
          Projects
          <span className="text-white mx-4 p-2 rounded-md bg-blue-400 text-lg lg:text-3xl">
            {" "}
            Hall Of Fame
          </span>
        </h1>
      </div>
      <div className="p-8 lg:px-24 flex flex-col lg:flex-row gap-12 ">
        <Card />
        <Card />
        <Card />
      </div>
    </motion.section>
  );
};

export default Halloffame;
