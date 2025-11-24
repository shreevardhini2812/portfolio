import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pt-20 h-130'>
        <div className='pl-140 text-4xl font-bold text-blue-900'>Get in Touch</div>
        <div className='pl-141 text-xl p-5 text-gray-800'>Feel free to reach out...</div>
        <div className='flex flex-col w-110 h-70 p-2 relative left-120 p-5 gap-3 bg-gray-300 text-white border'>
            <input className=' w-100 p-3 text-black font-semibold' type='text' placeholder='Your Name' />
            <input className=' w-100 p-3 text-black font-semibold' type='email' placeholder='Your Email' />
            <input className=' w-100 p-3 text-black font-semibold' type='text' placeholder='Your Message' />
            <button className=' pt-3 cursor-pointer bg-blue-900 pb-3 hover:font-bold'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact