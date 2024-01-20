import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto p-4 py-16 text-gray-500 lg:hover-animate'>
      <h1 className='text-4xl font-bold text-indigo-900'>Let's <span className='text-indigo-400'>connect</span></h1>
      <p className='py-10'>Feel free to reach out for more information, checkout my GitHub, or connect with me on LinkedIn.</p>
      <a href='https://drive.google.com/file/d/1ELlgr8Q_MBmaetuARax9ru7O7FdBXKeT/view?usp=sharing' target="_blank" className="flex items-center text-indigo-900 pb-3 hover:animate-pulse">
        <IoDocumentTextOutline />
        <p className='pl-4'>Resume</p>
      </a>
      <div className='flex items-center text-indigo-900 hover:animate-pulse'>        
        <MdOutlineEmail />
        <p className='pl-4'>elysemontano.dev@gmail.com</p>  
      </div> 
      <div className='flex w-20 pt-4 text-indigo-900 max-w-[1040px]'>
        <a href="https://www.linkedin.com/in/elysemontano/" target="_blank">
          <AiFillLinkedin className='mr-4 cursor-pointer hover:animate-pulse' size={25}/>
        </a>
        <a href='https://github.com/elysemontano' target='_blank'>
          <AiFillGithub className='cursor-pointer hover:animate-pulse' size={25}/>
        </a>
      </div>
    </div>
  )
}

export default Footer