import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pt-20 h-130'>
        <div className='pl-140 text-4xl font-bold'>Get in Touch</div>
        <div className='pl-141 text-xl p-5'>Feel free to reach out...</div>
        <div className='flex flex-col w-110 h-70 p-2 relative left-120 p-5 gap-3 bg-black text-white'>
            <input className='border w-100 p-3 text-white' type='text' placeholder='Your Name' />
            <input className='border w-100 p-3' type='email' placeholder='Your Email' />
            <input className='border w-100 p-3' type='text' placeholder='Your Message' />
            <button className=' pt-5 cursor-pointer hover:font-bold'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact