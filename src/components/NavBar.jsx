// NavBar.jsx

import React, { useState } from 'react';
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const NavBar = ({ scrollPosition, backgroundColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderConditionalLinks = () => {
    const currentRoute = location.pathname;

    if (currentRoute === '/') {
      return (
        <>
          <LinkScroll to='skills' className="text-white hover:text-white hover-animate cursor-pointer">
            Tools
          </LinkScroll>
          <LinkScroll to='projects' className="text-white hover:text-white hover-animate cursor-pointer">
            Projects
          </LinkScroll>
          <LinkScroll to='contact' className="text-white hover:text-white hover-animate cursor-pointer">
            Contact
          </LinkScroll>
        </>
      );
    } else if (currentRoute.startsWith('/project-details/')) {
      return (
        <>
          <LinkRouter to='/' className="text-white hover:text-white hover-animate cursor-pointer">
            Home
          </LinkRouter>
          <LinkScroll to='why' className="text-white hover:text-white hover-animate cursor-pointer">
            Why
          </LinkScroll>
          <LinkScroll to='process' className="text-white hover:text-white hover-animate cursor-pointer">
            Process
          </LinkScroll>
          <LinkScroll to='lessons' className="text-white hover:text-white hover-animate cursor-pointer">
            Lessons
          </LinkScroll>
          <LinkScroll to='contact' className="text-white hover:text-white hover-animate cursor-pointer">
            Contact
          </LinkScroll>
        </>
      );
    }
    return null;
  };

  return (
    <nav
      className={`flex justify-between items-center text-white p-4 header ${
        scrollPosition > 50 ? 'scrolled' : ''
      }`}
      style={{ backgroundColor }}
    >
      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/elysemontano/" target="_blank">
          <AiFillLinkedin className="cursor-pointer hover-animate" size={35} />
        </a>
        <a href='https://github.com/elysemontano' target='_blank'>
          <AiFillGithub className="cursor-pointer hover-animate" size={35} />
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {renderConditionalLinks()}
      </div>
      <button
        onClick={toggleMenu}
        type="button"
        className="md:hidden p-2 text-white focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        <AiOutlineMenu className="w-5 h-5 hover-animate cursor-pointer" />
      </button>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 bg-opacity-75">
          {renderConditionalLinks()}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
