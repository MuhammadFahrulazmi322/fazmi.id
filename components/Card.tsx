import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  techStack: { name: string; image: { asset: { url: string } } }[]; // Updated techStack type
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
  techStack,
  livesite,
  github,
  image,
  halloffame,
}: Props) => {
  return (
    <section className="flex flex-row">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col gap-y-4 bg-white  shadow-2xl p-4 rounded-lg "
      >
        <div className="flex justify-center">
          <Image src={image} alt={title} width={400} height={400} />
        </div>
        <div className="flex flex-row justify-left py-2 lg: lg:-translate-y-20 lg:translate-x-5 gap-x-1.5">
          {/* Displaying Techstack */}
          {/* {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center"
            >
              <Image
                src={tech.image.asset.url} // Accessing the URL of the image from Sanity
                alt={tech.name}
                width={26}
                height={26}
              />
              <p>{tech.image.asset.url}</p>
            </div>
          ))} */}
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
