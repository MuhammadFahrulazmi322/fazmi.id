import AllProjects from "@/components/AllProjects";
import Contact from "@/components/Contact";
import Halloffame from "@/components/Halloffame";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Halloffame/>
      <AllProjects/>
      <Skills/>
      <Contact/>
    </>
  );
};

export default Home;
