'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>About</h3>
      
      <motion.img initial={{x:-200,opacity:0}} transition={{duration:1.2}} whileInView={{x:0,opacity:1}} 
      src="sumitPicAbout.jpg"
      className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 md:h-48 md:w-48 mt-12 rounded-full object-cover md:rounded-lg lg:h-60 lg:w-60"
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold hidden md:flex'>
            Here is a <span className='text-[#F7AB0A] ml-3 mr-3'> little </span> background
        </h4>
        <div className='w-72 text-md'>
          I am a highly-motivated and adaptable <span className='text-[#f7ab0a]'>Software Engineering</span> Student
          and eager to kick start my career in the world of Technology.
          Proficient in <span className='text-[#f7ab0a]'>Full-Stack Java</span> Programming, Data Structures and Algorithms.
          Strong Problem-solving and collaborations skills. 
          <p className='hidden md:flex'>Effective communicator with a passion for continuous learning.</p> 
        </div>
      </div>
    </motion.div>
  )
}

export default About