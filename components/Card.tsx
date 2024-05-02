"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  techStack1: string;
  techStack2: string;
  techStack3: string;
  techStack4: string;
  techStack5: string;
  livesite: string;
  github: string;
  image: string;
  halloffame: boolean;
}

const Card = ({
  id,
  title,
  description,
  slug,
  category,
  techStack1,
  techStack2,
  techStack3,
  techStack4,
  techStack5,
  livesite,
  github,
  image,
  halloffame,
}: Props) => {
  const techStack = [
    techStack1,
    techStack2,
    techStack3,
    techStack4,
    techStack5,
  ];

  return (
    <section className="flex flex-row">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col gap-y-4 bg-white  shadow-2xl p-4 rounded-lg max-w-[400px] border-2 border-black"
      >
        <div className="flex justify-center">
          <Image src={image} alt={title} width={400} height={400} />
        </div>
        <div className="flex flex-row justify-left py-2 lg: lg:-translate-y-20 lg:translate-x-5 gap-x-1.5">
          {/* Displaying Techstack */}
          {techStack &&
            techStack
              .filter((tech) => tech)
              .map((tech, index) => (
                <div
                  key={index}
                  className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center"
                >
                  <img
                    src={tech} // Accessing the URL of the image from Sanity
                    alt="image techstack"
                    width={26}
                    height={26}
                  />
                </div>
              ))}
        </div>
        <div className="relative lg:-translate-y-14 flex flex-col gap-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-center">{title}</h1>
          <p className="text-sm font-medium max-w-md text-center text-slate-500">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
