"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="flex  justify-center h-screen flex-col gap-12 items-center"
    >
      <h1 className="text-4xl text-center text-red-500 ">
        Not Found This page
      </h1>
      <Button onClick={() => router.replace("/")}>Back Home</Button>
    </motion.div>
  );
};

export default NotFound;
