"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Card from "./Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Filter from "./Filter";
import { getResources } from "@/sanity/actions";

const AllProjects = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  return (
    <motion.section
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

      {/* filter category */}
      <Filter />

      {/* card */}
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
              techStack={resource.techStack}
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
    </motion.section>
  );
};

export default AllProjects;
