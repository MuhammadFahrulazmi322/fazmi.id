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
      className=" py-4 md:py-8"
    >
      <div className="font-bold">
        <h1 className=" text-lg lg:text-3xl text-center ">
          Explore All
          <span className="text-white mx-4 p-2 rounded-md bg-blue-400 text-lg lg:text-3xl">
            {" "}
            Fahrul Project's
          </span>
        </h1>
      </div>

      {/* filter category */}
      <div className="p-8 lg:px-24 flex lg:flex-row max-w-sm lg:max-w-full gap-2 lg:gap-8 flex-wrap justify-center">
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
      <div className="p-8 lg:px-64 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 ">
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

