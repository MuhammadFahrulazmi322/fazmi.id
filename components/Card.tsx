"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div key={`${id}-${slug}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col gap-y-4 bg-white  shadow-2xl lg:px-4 md:py-0 rounded-lg max-w-[300px] h-[500px] "
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="flex justify-center relative">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className={`md:max-w-[400px] rounded-tr-lg rounded-tl-lg ${hovered ? "brightness-50" : "brightness-70"}`}
            key={`${id}-${slug}-image`} // Unique key for image
          />
        </div>

        {github || livesite ? (
          <div
            className={`${hovered ? "block" : "hidden"} py-4 absolute right-9 flex gap-x-4 px-2 md:px-0`}
          >
            {github ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="cursor-pointer"
                key={`${id}-github`} // Unique key for GitHub link
              >
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="icons/github.svg"
                    alt="GitHub Icon"
                    width={32}
                    height={32}
                    key={`${id}-github`} // Unique key for GitHub link
                  />
                </Link>
              </motion.div>
            ) : (
              <></>
            )}
            {livesite ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="cursor-pointer"
                key={`${id}-livesite`} // Unique key for Live Site link
              >
                <Link href={livesite} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="icons/site.svg"
                    alt="Site Icon"
                    width={32}
                    height={32}
                    key={`${id}-livesite`} // Unique key for Live Site link
                  />
                </Link>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-row justify-left py-2 px-4 md:px-0 relative lg:-translate-y-20 lg:translate-x-0 gap-x-1.5">
          {/* Displaying Techstack */}
          {techStack &&
            techStack
              .filter((tech) => tech)
              .map((tech, index) => (
                <div
                  key={`${id}-${index}`} // Unique key for each tech stack item
                  className=" p-2 bg-white rounded-full drop-shadow-2xl flex items-center"
                >
                  <Image
                    src={tech} // Accessing the URL of the image from Sanity
                    alt="image techstack"
                    width={24}
                    height={24}
                    key={`${id}-${index}`} // Unique key for each tech stack item
                  />
                </div>
              ))}
        </div>
        <div className="relative lg:-translate-y-14 flex flex-col gap-y-4 px-4 py-4 mb-4 md:mb-0">
          <h1 className="text-lg md:text-xl font-bold text-center">{title}</h1>
          <p className="text-sm font-medium max-w-md text-center text-slate-500">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
