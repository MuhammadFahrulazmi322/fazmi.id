// Filter.tsx

import React from "react";
import { Button } from "./ui/button";

interface Props {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filter: React.FC<Props> = ({ selectedCategory, onCategoryChange }) => {
  const links = ["All", "React JS", "Next JS", "Mobile"];

  const handleFilter = (link: string) => {
    onCategoryChange(link); // category to home
  };

  return (
    <ul className="p-8 flex lg:flex-row max-w-sm md:max-w-full gap-2 lg:gap-8 flex-wrap justify-center">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="outline"
          size="lg"
          className={`${selectedCategory === link ? "bg-black text-white" : ""} hover:bg-black hover:text-white`}
          onClick={() => handleFilter(link)}
        >
          {link}
        </Button>
      ))}
    </ul>
  );
};

export default Filter;
