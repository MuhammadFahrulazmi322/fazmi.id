"use client";

import AllProjects from "@/components/AllProjects";
import Contact from "@/components/Contact";
import Halloffame from "@/components/Halloffame";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { getResources } from "@/sanity/actions";
import React from "react";

const Home = async () => {
  
  return (
    <>
      <Hero />
      <Halloffame />
      <AllProjects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
