import React from 'react'

const About = () => {
  return (
    <div id="about" className='h-140'>
        <div className='p-5 text-4xl font-bold pl-140'>About Me</div>
        <div className='text-3xl p-2 pl-120'>MERN Stack Developer</div>
        <div className='text-l text-gray-700 p-10'>
            <p>I’m Shree Vardhini, a MERN Stack developer at the beginning of my journey, passionate about building clean, responsive, and user-friendly web applications. I enjoy learning new tools, improving my code, and understanding how things work from front end to back end.</p>
            <br/>
            <p> I’m always improving my skills and exploring new tools to build better products and solve real problems.I’ve worked on small projects that helped me strengthen my skills in React, Node.js, Express, and MongoDB, and I’m constantly exploring better ways to solve real-world problems through code. I’m excited to grow, collaborate, and take on new challenges in full-stack development.</p>
        </div>
        <div className='flex flex-row p-10 pl-90 gap-5 font-bold'>
            <button className='border rounded-lg p-2'>MongoDB</button>
            <button className='border rounded-lg p-2'>React.js</button>
            <button className='border rounded-lg p-2'>Node.js</button>
            <button className='border rounded-lg p-2'>Express.js</button>
            <button className='border rounded-lg p-2'>TailwindCSS</button>
            <button className='border rounded-lg p-2'>Javascript</button>
        </div>
    </div>
  )
}

export default About