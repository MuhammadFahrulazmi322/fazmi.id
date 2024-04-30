"use client";
import React from 'react'
import { motion } from "framer-motion"
import { Button } from './ui/button';
const Contact = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-12"
      
    >
      <div className="font-bold">
        <h1 className="text-xl lg:text-3xl text-center " id="contact">
          How Can I Help you? <br className='block lg:hidden'/> Tell me about your project
        </h1>
      </div>
      {/* form input */}
      <form action={"submit"}
        className='flex flex-col justify-center items-center gap-6 max-container px-4 md:px-8 py-12'
      >
        <input type="text" placeholder="Your Name" className='p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full' />
        <input type="email" placeholder=" Your Email" className='p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full' />
        <textarea cols={30} rows={5} placeholder="Your Message" className='p-4  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full'></textarea>
        <Button type="submit" className='text-base'>Send Message</Button>
      </form>

      
    </motion.section>
  )
}

export default Contact