import React from 'react'
const Navbar = () => {
  return (
    <div className="w-full h-20 flex flex-row justify-between items-center bg-blue-900 p-10 text-white">
        <div className='text-2xl font-bold'>Shree Vardhini V</div>
        <div className='flex flex-row gap-8 text-l font-semibold cursor-pointer'>
           
            <a href='#home'><div className='hover:font-bold'>Home</div></a>
            <a href='#about'><div className='hover:font-bold'>About</div></a>
            <a href='#skill'><div className='hover:font-bold'>Skill</div></a>
            <a href='#project'><div className='hover:font-bold'>Project</div></a>
            <a href='#contact'><div className='hover:font-bold'>Contact</div></a>
        </div>
    </div>
  
  )
}

export default Navbar