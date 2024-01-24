import React, { useState, useEffect } from 'react';
import Welcome from '../components/Welcome';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = ({ handleOutsideClick, isModalOpen, openModal, closeModal, modalImage, printableComponentRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const scrollToSection = (offsetTop) => {
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div onClick={handleOutsideClick} className={`welcome-section ${scrollPosition > 50 ? "scrolled" : ""}`} id="welcome">
        <Welcome />
      </div>
      <NavBar scrollPosition={scrollPosition} scrollToSection={scrollToSection} printableComponentRef={printableComponentRef}/>
      <Skills  />
      <Projects  isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage}  />
      <div className='lg:pl-28 md:pl-20'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
