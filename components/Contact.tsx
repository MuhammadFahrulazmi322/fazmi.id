"use client";
import React from 'react'
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-blue-300/20 py-4 md:py-8"
    >
      <div className="font-bold">
        <h1 className=" text-lg lg:text-3xl text-center ">
          How can I help your Business?
        </h1>
      </div>
      
    </motion.section>
  )
}

export default Contact