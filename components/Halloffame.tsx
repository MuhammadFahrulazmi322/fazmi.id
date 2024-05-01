"use client";

import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { getResources } from "@/sanity/actions";

const Halloffame = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });
  const halloffameResources = resources.filter(
    (resource: any) => resource.halloffame === true
  );
  console.log(resources);
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-blue-300/20 py-16 md:py-12 flex flex-col gap-y-4  lg:gap-y-12"
    >
      <div className="font-bold">
        <h1 className=" text-xl lg:text-3xl text-center " id="halloffame">
          Projects
          <span className="text-white mx-2 p-2 rounded-md bg-blue-400 text-xl lg:text-3xl">
            Hall Of Fame
          </span>
        </h1>
      </div>
      <div className="p-8 mx-auto flex flex-col lg:flex-row gap-12 ">
        {halloffameResources?.length > 0 ? (
          halloffameResources?.map((resource: any) => (
            <Card
              key={resource._id}
              id={resource._id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              image={resource.image}
              slug={resource.slug.current}
              halloffame={resource.halloffame}
              techStack={resource.techStack}
              livesite={resource.livesite}
              github={resource.github}
            />
          ))
        ) : (
          <p>No resources found.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Halloffame;
