"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";
const Filter = () => {
  const [active, setActive] = useState("All");
  const searchParms = useSearchParams();
  const router = useRouter();
  const links = ["All", "React JS", "Next JS", "Mobile"];

  const handleFilter = (link: string) => {
    let newUrl = "";

    if (active === link) {
      setActive("");

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="p-8 flex lg:flex-row max-w-sm md:max-w-full gap-2 lg:gap-8 flex-wrap justify-center">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="outline"
          size="lg"
          className={`${active === link ? "bg-black text-white" : ""} hover:bg-black hover:text-white`}
          onClick={() => handleFilter(link)}
        >
          {link}
        </Button>
      ))}
    </ul>
  );
};

export default Filter;
