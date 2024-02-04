'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  
  return (
    <div className='h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-36 h-screen'>
                <img 
                  
                  className='h-20 mt-16'
                  src="instagramprojectimage.jpeg" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                      Case Study 1 of 4:
                    </span>{" "}
                    <span className='text-purple-500 italic'>Instagram </span> Clone
                  </h4>

                  <div className='text-lg text-center'>
                  This is a full-stack Java project, in this<span className='text-purple-500 italic'> Instagram </span> clone I've used Spring and Spring Boot frameworks for backend APIs (deployed on Railway cloud).
                  React JS and Tailwind CSS for the frontend part (deployed on Vercel).
                  Spring Security with "JWT token authenticaion" is integrated. <p>MySql docker image is being used for database.</p>
                  <p><a href='https://sumitsharma-instagramapp.vercel.app/' className='uppercase mx-auto text-purple-500'> link</a></p>
                  </div>
                  
                </div>
            </div>

            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-36 h-screen'>
                <img 
                  
                  className='h-20 mt-12'
                  src="hulu.jpeg" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                      Case Study 2 of 4:
                    </span>{" "}
                    <span className='text-green-500 italic'>Hulu </span> Clone
                  </h4>

                  <div className='text-lg text-center'>
                  In this<span className='text-green-500 italic'> Hulu </span> clone I've used Nextjs and TailwindCSS to design front-end. 
                  TMDB (The Movie Database) API is used to fetch the various genere movies which includes trending, horror, romantic, etc.
                  <p className='hidden sm:flex sm:flex-col'>Particularly from this build I've learnt the Flex-box and the Grid which are really really helpful. </p>
                  <a href='https://hulu-streaming-app.vercel.app/' className='uppercase mx-auto text-green-500'> link</a>
                  </div>
                  
                </div>
            </div>

            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-36 h-screen'>
                <img 
                  
                  className='h-20 mt-16'
                  src="imagegallery.png" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                      Case Study 3 of 4:
                    </span>{" "}
                    <span className='text-red-500 italic'>Image </span>Gallery
                  </h4>

                  <div className='text-lg text-center'>
                  In this<span className='text-red-500 italic'> Image </span> Gallery project I've used Reactjs and TailwindCSS to design front-end. 
                  Pixabay API is being used to fetch the images generated through the prompt that is provided as the search bar at the top.
                  <p className='hidden sm:flex sm:flex-col'>This was my first project as a Reactjs learner and I've learnt a number of things from this project and got my confidence built up. </p>
                  <a href='https://sumitparashar1510.github.io/Image_gallery/' className='uppercase mx-auto text-red-500'> link</a>
                  </div>
                  
                </div>
            </div>

            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-36 h-screen'>
                <img 
                  
                  className='h-20 mt-16'
                  src="portfolio.jpeg" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                      Case Study 4 of 4:
                    </span>{" "}
                    <span className='text-blue-500 italic'>Portfolio </span>
                  </h4>

                  <div className='text-lg text-center'>
                  And last but not the least, in this<span className='text-blue-500 italic'> Portfolio </span> Gallery project I've used NextJs and TailwindCSS to design front-end. 
                  Vercel is used to deploy the portfolio. It includes my various social handles, about section, my experience, projects, and contact me section.
                  <p className='hidden sm:flex sm:flex-col'>This is by far my favourite project as a learner and I really enjoyed a lot while building this. </p>
                  <a href='#hero' className='uppercase mx-auto text-blue-500'> link</a>
                  </div>
                  
                </div>
            </div>
    
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[250px] -skew-y-6'></div>
    </div>
    
  )
}

export default Projects