import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-2 p-4 w-full">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-x-8 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">
            Built with Next JS, Tailwind CSS, Typescript, Sanity & EmailJS
          </p>
          <p className="text-sm">
            &copy; 2023 Muhammad Fahrul Azmi Husni. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/MuhammadFahrulazmi322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-fahrul-azmi-husni-345661206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-black hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.youtube.com/@fazmidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl text-black hover:text-gray-400" />
          </Link>
          <Link href="mailto:fazmi322@gmail.com">
            <FaEnvelope className="text-2xl text-black hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
