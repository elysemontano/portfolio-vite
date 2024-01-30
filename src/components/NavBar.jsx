import React, { useState, useEffect } from 'react';
import ProjectsDropdown from './ProjectsMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { Link as LinkScroll,  animateScroll as scroll } from 'react-scroll';
import logo from '../assets/elyse-logo.png';
import PrintButton from './PrintButton';

const NavBar = ({ scrollPosition, backgroundColor, printableComponentRef, handlePrint }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActiveLink('home');
      } else if (scrollY >= 200 && scrollY < 1000) {
        setActiveLink('skills');
      } else if (scrollY >= 1000 && scrollY < 2000) {
        setActiveLink('projects');
      } else if (scrollY >= 2000) {
        setActiveLink('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    }, 100);
    toggleMenu();
  };  
  

  const renderConditionalLinks = () => {
    const currentRoute = location.pathname;

    if (currentRoute === '/') {
      return (
        <div className='flex max-md:flex-col md:items-center max-md:items-end'>
          <LinkScroll to="skills" className={`text-white hover:text-white md:hover-animate cursor-pointer pr-4 ${activeLink === 'skills' ? 'active font-extrabold' : ''}`}>
            TOOLS
          </LinkScroll >
          <LinkScroll to="projects" className={`text-white hover:text-white md:hover-animate cursor-pointer pr-2 ${activeLink === 'projects' ? 'active font-extrabold' : ''}`}>
            PROJECTS
          </LinkScroll>
          {window.innerWidth > 768 && <ProjectsDropdown />}
          <LinkScroll to="contact" className={`text-white hover:text-white md:hover-animate cursor-pointer px-4 ${activeLink === 'contact' ? 'active font-extrabold' : ''}`}>
            CONTACT
          </LinkScroll>
        </div>
      );
    } else if (currentRoute.startsWith('/project-details/')) {
      return (
        <>
          <p onClick={() => scrollToSection('skills')} className="text-white hover:text-white md:hover-animate cursor-pointer">
            TOOLS
          </p>
          <p onClick={() => scrollToSection('projects')} className="text-white hover:text-white md:hover-animate cursor-pointer font-extrabold">
            PROJECTS
          </p>
          {window.innerWidth > 768 && <ProjectsDropdown />}
          <p onClick={() => scrollToSection('contact')} className="text-white hover:text-white md:hover-animate cursor-pointer">
            CONTACT
          </p>
        </>
      );
    } else if (currentRoute.startsWith('/resume')) {
      return (
        <>
          <LinkRouter to="/">Home</LinkRouter>
          <PrintButton printableComponentRef={printableComponentRef} handlePrint={handlePrint}/>
        </>
      )
    }
    return null;
  };

  return (
    <nav
      className={`flex justify-between items-center py-2 px-4 text-white header ${scrollPosition > 50 ? 'scrolled' : ''}`}
      style={{ backgroundColor }}
    >
      <LinkRouter to="/">
        <img src={logo} alt="logo" className='h-16 hover-animate mx-4'/>
      </LinkRouter>
      <div className="hidden md:flex items-center space-x-4">
        {renderConditionalLinks()}
      </div>
      <button
        onClick={toggleMenu}
        type="button"
        className="md:hidden p-2 text-white focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        <AiOutlineMenu className="w-5 h-5 md:hover-animate cursor-pointer" />
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
