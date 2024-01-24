import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoIosDocument } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto p-4 py-16 text-gray-500 lg:hover-animate">
      <h1 className="text-4xl font-bold text-indigo-900">
        Let's <span className="text-indigo-400">connect</span>
      </h1>
      <p className="pt-4 pb-2 flex flex-wrap">
        Feel free to reach out for more information, check out my{' '}
        <a href="https://github.com/elysemontano" target="_blank" className=" hover:animate-pulse flex flex-wrap text-indigo-900">
          <AiFillGithub className="sm:mx-2 cursor-pointer " size={25} />
          GitHub
        </a>
        , or connect with me on{' '}
        <a href="https://www.linkedin.com/in/elysemontano/" target="_blank" className="text-indigo-900 flex flex-wrap hover:animate-pulse">
          <AiFillLinkedin className="sm:mx-2 cursor-pointer" size={25} />
          LinkedIn
        </a>
        !
      </p>
      <NavLink to="/resume" target="_blank" className="flex items-center text-indigo-900 pb-3 hover:animate-pulse">
        <IoIosDocument />
        <p className="pl-4">Resume</p>
      </NavLink>
      <div className='flex items-center text-indigo-900 hover:animate-pulse'>        
        <MdOutlineEmail />
        <p className='pl-4'>elysemontano.dev@gmail.com</p>  
      </div> 
    </div>
  );
};

export default Footer;
