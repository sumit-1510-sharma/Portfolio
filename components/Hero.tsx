'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';


function Hero() {
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's Sumit`,"GuyWhoLovesToPlayGuitar","<And Loves to Code too/>"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="sumitPic.jpg" alt="" />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Final Year Student</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='skyblue' />
          </h1>

          <div className='pt-5'>
            <a href="#about">
              <button className='heroButton'>About</button>
            </a>
            <a href="#experience">
              <button className='heroButton'>Experience</button>
            </a>
            <a href="#skills">
              <button className='heroButton'>Skills</button>
            </a>
            <a href="#projects">
              <button className='heroButton'>Projects</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero