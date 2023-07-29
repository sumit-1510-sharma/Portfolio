'use client';
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1.5}}
     className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-gray-500'>
        Hover over a skill for currency profieciency
      </h3>

      <div className='absolute top-56 md:top-48 grid grid-cols-5 gap-5'>
      
      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='java.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>85%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='dsa2.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='c++.png'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>50%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='mysql.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>80%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='os.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='dbms.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='cns.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <img
        src='guitarhand.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='htmlCss.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>85%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='javascript.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>80%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='tailwind.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>75%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='nextjs.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>70%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='vscode.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>90%</p>
            </div>
        </div>
      </div>

      <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:200, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src='intellij.jpg'
        className='rounded-full border border-gray-500 object-cover h-12 w-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-lg font-bold text-black opacity-100'>95%</p>
            </div>
        </div>
      </div>

      </div>
    </motion.div>
  )
}

export default Skills