"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getResources } from "@/sanity/actions";
import Filter from "@/components/Filter";
import Card from "@/components/Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Halloffame from "@/components/Halloffame";
import Hero from "@/components/Hero";
import useResources from "@/hooks/useResource";
import Loading from "../../loading";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Home: React.FC<Props> = ({ searchParams }) => {
  const resources = useResources(searchParams);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    if (resources) {
      setLoading(false);
    }
  }, [resources]);

  const paginateData = (data: any[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const handleNextClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(resources.length / ITEMS_PER_PAGE))
    );
  };

  const handlePreviousClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePageClick = (
    pageNumber: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Hero />
      {loading ? (
        <Loading />
      ) : (
        <>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="bg-blue-300/20 py-16 md:py-12 flex flex-col gap-y-4 lg:gap-y-12"
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
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto">
              {resources?.length > 0 ? (
                paginateData(resources).map((resource: any, index: number) => (
                  <Card
                    key={`${resource._id}-${index}`}
                    id={resource._id}
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
                  <PaginationPrevious
                    href="#"
                    onClick={handlePreviousClick}
                    isActive={currentPage === 1}
                  />
                </PaginationItem>
                {[
                  ...Array(Math.ceil(resources.length / ITEMS_PER_PAGE)).keys(),
                ].map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => handlePageClick(page + 1, e)}
                      isActive={page + 1 === currentPage}
                    >
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={handleNextClick}
                    isActive={
                      currentPage ===
                      Math.ceil(resources.length / ITEMS_PER_PAGE)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
          <Skills />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
