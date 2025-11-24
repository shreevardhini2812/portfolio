import React from 'react'

const Project = () => {
  return (
    <div id="project" className='h-200 bg-gray-300'>
        <div className='text-3xl font-bold p-10 pl-135'>My Projects</div>
        <div className='justify-center text-xl text-gray-900 pl-90'>Here are some of my recent works that demonstrate my skills.</div>
        <div className='p-20 flex flex-row justify-between'>
          <div className='w-85 bg-blue-900 text-white p-5'>
            <div className='text-3xl'>Library Management System</div>
            <div className='p-1 pt-5'>A library management system is a software application designed to organize and track a library's collection of books, as well as manage member information and borrowing activities.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-5'>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>React</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Express</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Node.js</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>MongoDB</button>
            </div>
            <div className='flex flex-col p-2 pt-5 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/Project_Library/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/Project_Library/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Backend Code</div></a>
              <a href='https://libraryproje.netlify.app/login'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Live Demo</div></a>
            </div>
          </div>


          <div className='w-85 bg-blue-900 text-white p-5'>
            <div className='text-3xl'>ToDo App</div>
            <div className='p-1 pt-5'>A to-do app is a digital checklist that helps you manage tasks, reminders, and plans on a computer or mobile device.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-25'>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>React</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Express</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Node.js</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>MongoDB</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Redux</button>

            </div>
            <div className='flex flex-col p-2 pt-5 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/todo/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/todo/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Backend Code</div></a>
              <a href='https://mellifluous-puppy-efc100.netlify.app/'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Live Demo</div></a>
            </div>
          </div>
          
          

          <div className='w-85 bg-blue-900 text-white p-5'>
            <div className='text-3xl'>Contact Manager</div>
            <div className='p-1 pt-5'>A contact manager project is a software system designed to centralize, organize, and track all contact information and communication interactions with individuals or businesses.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-13'>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>React</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Express</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>Node.js</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-gray-400 font-semibold text-black'>MongoDB</button>
            </div>
            <div className='flex flex-col p-2 pt-5 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/contactman/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/contactman/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Backend Code</div></a>
              <a href='https://neon-torte-02c367.netlify.app/'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:font-bold'>Live Demo</div></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project