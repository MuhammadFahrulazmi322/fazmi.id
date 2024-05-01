"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Filter = () => {
  const [active, setActive] = useState("");
  const links = ["All", "Landing Page", "React JS", "Next JS", "Mobile"];

  const handleFilter = (link: string) => {
    setActive(link);
  };

  console.log({ active });
  return (
    <ul className="p-8 flex lg:flex-row max-w-sm md:max-w-full gap-2 lg:gap-8 flex-wrap justify-center">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="outline"
          color="blue"
          size="lg"
          className={`${active === link ? "bg-black text-white" : ""}`}
          onClick={() => handleFilter(link)}
        >
          {link}
        </Button>
      ))}
    </ul>
  );
};

export default Filter;
