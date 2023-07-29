import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{opacity:0}} animate={{scale:[1,2,2,3,1], opacity:[0.1,0.2,0.4,0.8,0.1,1.0], borderRadius:["20%","20%","50%","80%","20%"]}} transition={{duration:2.5}} className='relative flex justify-center items-center'>
      <div className="absolute border border-[#333333] mt-52 rounded-full animate-ping h-[200px] w-[200px]"/>
      <div className="absolute border border-[#F7AB0A] mt-52 rounded-full h-[300px] w-[300px] opacity-20 animate-pulse"/>
      <div className="absolute border border-[#333333] mt-52 rounded-full h-[500px] w-[500px]"/>
      <div className='absolute border border-[#333333] mt-52 rounded-full h-[650px] w-[650px]'/>
      <div className='absolute border border-[#333333] mt-52 rounded-full opacity-20 h-[800px] w-[800px]'/>
    </motion.div>
  )
}

export default BackgroundCircles