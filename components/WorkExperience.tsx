'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:1.5}}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scrollbar-hidden'>
      <h3 className='absolute uppercase top-16 tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      
      <div className='w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory scrollbar  scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-transparent'>


      <article className='flex flex-col md:h-80 mt-12 rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
      <motion.img 
      initial={{y:-100,opacity:0}}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='mt-6 h-16 w-16 md:flex rounded-full object-center xl:w-[180px] xl:h-[180px] object-cover' src="internship.jpg" alt="" />

      <div className='px-0 md:px-10 sm:flex'>
        <div>
        <h4 className='text-2xl font-light text-[#F7AB0A]'>InternPe</h4>
        <p className=' font-bold text-2xl mt-1 sm:mr-12'>Web Developer Intern</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 md:h-6 md:w-6 rounded-full' src="htmlCss.jpg" alt="" />
            <img className='h-10 w-10 md:h-6 md:w-6 rounded-full' src="javascript.jpg" alt="" />
            <img className='h-10 w-10 md:h-6 md:w-6 rounded-full' src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1" alt="" />
        </div>
        </div>

        <div className='md:ml-24'>
        <p className='hidden sm:inline uppercase text-[#F7AB0A]'>started working...</p>

          <ul className='hidden sm:inline list-disc ml-5 text-lg'>
            <li>13th March 2023</li>
            <li>Duration: 1 Month</li>
          </ul>
        </div>
        
      </div>
    </article>
    

    <article className='flex flex-col md:h-80 mt-12 rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
      <motion.img 
      initial={{y:-100,opacity:0}}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='mt-6 h-16 w-16 md:flex rounded-full object-center xl:w-[180px] xl:h-[180px] object-cover' src="internship.jpg" alt="" />

      <p className='px-0 md:px-10 sm:flex text-3xl font-sans'>
        <span className='text-[#F7AB0A]'>'much'</span> 'much' <span className='text-[#F7AB0A]'> 'much' </span> 
      </p>
      <p className='px-0 md:px-10 sm:flex text-3xl'>
        more to add here...
      </p>
    </article>

      </div>
    </motion.div>
  )
}

export default WorkExperience