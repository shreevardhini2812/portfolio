import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";


const Certificate = () => {
  return (
    <div className='p-10 bg-blue-900 h-115'>
        <div className='text-3xl text-white font-bold pl-140'>Certification</div>
        <div className='text-2xl pl-80 p-5 text-white'>Here are the certifications I’ve completed as part of my learning journey</div>
        <div className='bg-white relative left-80 w-180 p-10 text-black'>
        <div className='flex flex-row gap-20 p-2'>
            <div className='text-xl'>MERN Full Stack Development Course with AI Tools - GUVI</div>
            <a href='https://drive.google.com/file/d/1mYZsLnZunDIsV4IeJFh29WyNO-boMPXx/view?usp=sharing' target="_blank"><button className='cursor-pointer text-blue-900 hover:text-gray-400 text-3xl'><FaArrowCircleRight /></button></a>
        </div>
        <div className='flex flex-row gap-20 p-2'>
            <div className='text-black text-xl'>Salesforce Platform Developer I - Cognizant Technology Solutions</div>
            <a href='https://drive.google.com/file/d/17FR2qGOJMuxptYjzq0r7ZfrJcnBSM6rC/view?usp=drive_link' target="_blank"><button className='cursor-pointer text-blue-900 hover:text-gray-400 text-3xl'><FaArrowCircleRight /></button></a>
        </div>
        </div>
    </div>
  )
}

export default Certificate