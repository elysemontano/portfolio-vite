import React, { useState, useEffect } from 'react';
import Welcome from '../components/Welcome';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
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
      <div className={`welcome-section ${scrollPosition > 50 ? "scrolled" : ""}`} id="welcome">
        <Welcome />
      </div>
      <NavBar scrollPosition={scrollPosition} scrollToSection={scrollToSection} />
      <Skills  />
      <Projects  />
      <Footer />
    </>
  );
};

export default Home;
