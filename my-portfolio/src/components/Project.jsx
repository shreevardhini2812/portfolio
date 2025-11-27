import React from 'react'

const Project = () => {
  return (
    <div id="project" className='h-320 bg-gray-300'>
        <div className='text-3xl font-bold p-10 pl-135'>My Projects</div>
        <div className='justify-center text-xl text-gray-900 pl-90'>Here are some of my recent works that demonstrate my skills.</div>
        <div className='p-20 flex flex-col gap-20 justify-between items-center'>
          <div className='flex flex-row '>

          <div><img src="/lib.png" width="400" height="100"/></div>
          
          <div className='w-160 bg-white text-black p-5'>
            <div className='text-3xl text-blue-900'>Library Management System</div>
            <div className='p-1 pt-5'>A library management system is a software application designed to organize and track a library's collection of books, as well as manage member information and borrowing activities.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-1'>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>React</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Express</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Node.js</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>MongoDB</button>
            </div>
            <div className='flex flex-row pt-5 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/Project_Library/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/Project_Library/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Backend Code</div></a>
              <a href='https://libraryproje.netlify.app/login'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Live Demo</div></a>
            </div>
          </div>
          </div>

          <div className='flex flex-row '>
          <div><img src="/weather.png" width="400" height="100"/></div>
          <div className='w-160 bg-white text-white p-5'>
            <div className='text-3xl text-blue-900'>Weather App</div>
            <div className='p-1 pt-5 text-black'>A weather app project involves building an application that displays current weather and forecasts for a specific location, typically using an API like OpenWeatherMap to fetch data.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-3'>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>React</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Express</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Node.js</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>MongoDB</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>OpenWeatherMap API</button>


            </div>
            <div className='flex flex-row pt-5 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/weatherapp/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/weatherapp/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Backend Code</div></a>
              <a href='https://weatap.netlify.app/'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Live Demo</div></a>
            </div>
          </div>
          </div>
          

          <div className='flex flex-row '>
          <div><img src="/travel.png" width="400" height="100"/></div>
          <div className='w-160 bg-white text-white p-5'>
            <div className='text-3xl text-blue-900'>Traver Tracker App</div>
            <div className='p-1 pt-5 text-black'>The Travel Tracker App helps users record and manage their travel experiences in one place. Users can add trips with details like destination, dates, description. They can update or delete trips anytime and view all their journeys in a clean dashboard.</div>
            <div className='flex flex-row gap-2 flex-wrap pt-5'>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>React</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Express</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>Node.js</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>TailwindCSS</button>
              <button className=' rounded-full p-1 bg-blue-900 font-semibold text-white'>MongoDB</button>
            </div>
            <div className='flex flex-row pt-4 gap-2 text-center'>
              <a href='https://github.com/shreevardhini2812/traveltracker/tree/main/frontend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Frontend Code</div></a>
              <a href='https://github.com/shreevardhini2812/traveltracker/tree/main/backend'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Backend Code</div></a>
              <a href='https://traapp.netlify.app/'><div className='p-2 rounded bg-gray-400 text-black font-semibold cursor-pointer hover:bg-blue-900 hover:text-white hover:font-bold'>Live Demo</div></a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Project