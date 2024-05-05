"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = ["Home", "Hall Of Fame", "Projects", "Skills", "Contact"];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="px-4 lg:px-12 md:py-4 bg-transparent backdrop-blur-sm border-slate-200 fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-between">
        <Image
          src="/images/logo-fazmi.png"
          alt="Fazmi Dev"
          width={180}
          height={180}
          className="w-40 h-14"
        />
        <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden text-slate-500 ">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.replace(" ", "").toLowerCase() === "hallof fame" ? "halloffame" : item.replace(" ", "").toLowerCase()}`}
                className="text-md uppercase hover:text-black font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden md:block ">
          <Image
            src="/icons/iconHumburger.svg"
            alt="ic_humburger"
            width={24}
            height={24}
            onClick={handleToggleMobileMenu}
            className="cursor-pointer pt-4"
          />
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 z-20"
          onClick={handleToggleMobileMenu}
        >
          <div className="flex items-center justify-center ">
            <ul
              id="mobileMenu"
              className=" mt-12 md:mt-20 w-[80%] bg-black px-4 py-4 flex flex-col gap-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col gap-6 border-b-2 border-gray py-4 px-4 items-center text-white ">
                {links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.replace(" ", "").toLowerCase() === "hallof fame" ? "halloffame" : item.replace(" ", "").toLowerCase()}`}
                      className="text-sm  hover:text-black font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
