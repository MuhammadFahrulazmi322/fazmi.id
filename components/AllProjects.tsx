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

const AllProjects = () => {
  const links = ["All", "Landing Page", "React JS", "Next JS", "Mobile"];
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
      <div className="p-8 flex lg:flex-row max-w-sm md:max-w-full gap-2 lg:gap-8 flex-wrap justify-center">
        {links.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            color="blue"
            size="lg"
            className="hover:bg-black hover:text-white"
          >
            {link}
          </Button>
        ))}
      </div>

      {/* card */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
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

