'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-center'>
        <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className="flex flex-row items-center">
            {/* Social Icons */}
              <SocialIcon 
              url='https://www.linkedin.com/in/sumit-sharma-22839622b/'
              className='cursor-pointer'
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon 
              url='https://www.facebook.com/profile.php?id=100016526745520'
              className='cursor-pointer'
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon 
              url='https://www.instagram.com/the_thirteenth_scale/'
              className='cursor-pointer'
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon 
              url='https://www.youtube.com/channel/UCKHu_rMruNODYcn-at1wQtw'
              className='cursor-pointer'
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon 
              url='https://github.com/sumitparashar1510'
              className='cursor-pointer'
              fgColor='gray'
              bgColor='transparent'
            />
            
        </motion.div>
 
        <motion.div onClick={() => (window.location.href="#contact")} initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
              className="cursor-pointer"
              network="email"
              fgColor='gray'
              bgColor='transparent' 
            />
            <div>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </div>
        </motion.div>
    </header>
  )
}