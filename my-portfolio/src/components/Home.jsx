import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Home = () => {
  return (
    <div id="home" className='w-full h-120 justify-center items-center pl-125 pt-30'>
        <div className='text-4xl font-bold'>I'm Shree Vardhini</div>
        <div className='text-2xl p-3'>Full-Stack MERN Developer</div>
        <div className='flex flex-row gap-5 w-80 p-2 justify-between'>
            <a href='https://drive.google.com/file/d/19IOw7NjqpMKhmLx4YtzMm9e15LFwcWv1/view?usp=drive_link'><button className='bg-black text-white p-3 rounded hover:shadow-lg cursor-pointer'>Download Resume</button></a>
            <a href='#contact'><button className='bg-black text-white p-3 rounded hover:shadow-lg cursor-pointer'>Contact Me</button></a>
        </div>
        <div className='w-35 p-4 relative left-23 top-5 flex flex-row justify-between items-center cursor-pointer'>
            <a href='https://github.com/shreevardhini2812'><div><FaGithub /></div></a>
            <a href='https://www.linkedin.com/in/shree-vardhini-v-43a787201/'><div><FaLinkedin /></div></a>
            <div class="relative inline-block group">
              <span class="cursor-pointer"><MdEmail /></span>
              <span class="absolute left-0 top-full mt-1 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                shreevardhini28122000@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default Home