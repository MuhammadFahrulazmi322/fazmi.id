"use client";

import AllProjects from "@/components/AllProjects";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Halloffame from "@/components/Halloffame";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <motion.div
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

        <Halloffame />
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" py-16 md:py-12 flex flex-col gap-y-4  lg:gap-y-12"
      >
        <div className="font-bold">
          <h1 className=" text-xl lg:text-3xl text-center " id="projects">
            Explore All
            <span className="text-white mx-2 p-2 rounded-md bg-blue-400 text-xl lg:text-3xl">
              {" "}
              Fahrul Project's
            </span>
          </h1>
        </div>

        <AllProjects />
      </motion.div>
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
