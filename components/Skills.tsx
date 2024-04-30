"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Skills = () => {
  const skills = [
    { name: 'HTML 5', image: '/images/html.svg' },
    { name: 'CSS 3', image: '/images/css.svg' },
    { name: 'Sass', image: '/images/sass.svg' },
    { name: 'Tailwind CSS', image: '/images/tailwind-css.svg' },
    { name: 'PHP', image: '/images/php.svg' }, 
    { name: 'JavaScript', image: '/images/javascript.svg' },
    { name: 'React', image: '/images/react.svg' },
    { name: 'Next.js', image: '/images/nextjs.svg' },
    { name: 'TypeScript', image: '/images/typescript-icon.svg' },
    { name: 'Redux', image: '/images/redux-original.svg' },
    { name: 'Express JS', image: '/images/express-js.svg' },
    { name: 'MongoDB', image: '/images/mongodb.svg' },
    { name: 'Firebase', image: '/images/firebase.svg' },
    { name: 'MySQL', image: '/images/mysql.svg' },
    { name: 'Netbeans', image: '/images/netbeans.svg' },
    { name: 'React Native', image: '/images/react-native.svg' },
    { name: 'Framer', image: '/images/framer.svg' },





    
    
  ];

  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-blue-300/20 py-4 md:py-8 flex flex-col justify-center items-center"
    >
      <div className="font-bold">
        <h1 className=" text-lg lg:text-3xl text-center ">
          Skills
        </h1>
      </div>

      <div className="p-8 lg:px-48 items-center grid grid-cols-4 lg:grid-cols-6  gap-12">
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col gap-2 items-center justify-center'>
            <Image
              src={skill.image}
              alt={skill.name}
              width={48}
              height={48}
            />
            <p className='text-center text-sm text-slate-500'>{skill.name}</p>
          </div>
        ))}
      </div>
      
    </motion.section>
  )
}

export default Skills
