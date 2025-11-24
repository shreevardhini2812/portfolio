import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbHtml } from "react-icons/tb";


const Skill = () => {
  return (
    <div id="skill" className='h-150 bg-blue-900'>
        <div className='text-3xl font-bold text-white p-10 pl-140'>My Skills</div>
        <div className='grid grid-cols-4 gap-10 p-10 justify-between items-center text-white pl-50'>
            <div>
                <div><FaReact size={100} /></div>
                <div className='p-5'>React</div>
            </div>
            <div>
                <div><FaNodeJs size={100} /></div>
                <div className='p-5'>Node.js</div>
            </div>
            <div>
                <div><SiMongodb size={100} /></div>
                <div className='p-5'>MongoDB</div>
            </div>
            <div>
                <div><SiExpress size={100} /></div>
                <div className='p-5'>Express.js</div>
            </div>
            <div>
                <div><IoLogoJavascript size={100} /></div>
                <div className='p-5'>JavaScript</div>
            </div>
            <div>
                <div><RiTailwindCssFill size={100} /></div>
                <div className='p-5'>TailwindCSS</div>
            </div>
            <div>
                <div><TbHtml size={100} /></div>
                <div className='p-2'>HTML5/ CSS3</div>
            </div>
        </div>
    </div>
  )
}

export default Skill