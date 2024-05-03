"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Halloffame from "@/components/Halloffame";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { getResources } from "@/sanity/actions";
import Filter from "@/components/Filter";
import Card from "@/components/Card";


interface Props {
  searchParams: { [key: string]: string | undefined };
}
const Home = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: "",
    category: searchParams?.category || "",
    page: "1",
  });
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

        <Filter />
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mx-auto">
          {resources?.length > 0 ? (
            resources?.map((resource: any) => (
              <Card
                id={resource._id}
                key={resource._id}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                image={resource.image}
                slug={resource.slug.current}
                halloffame={resource.halloffame}
                techStack1={resource.techStack1}
                techStack2={resource.techStack2}
                techStack3={resource.techStack3}
                techStack4={resource.techStack4}
                techStack5={resource.techStack5}
                livesite={resource.livesite}
                github={resource.github}
              />
            ))
          ) : (
            <p>No resource found</p>
          )}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
