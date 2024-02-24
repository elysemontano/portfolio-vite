import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '../projectData';
import ImageModal from './ImageModal';

const Projects = ({isModalOpen, openModal, closeModal, modalImage}) => {
  const displayProjects = projectData?.filter((project, index) => index !== projectData.length - 1)
  return (
    <div id="projects" className='max-w-[1040px] mx-auto md:px-20 p-4 py-16 text-gray-500'>
      <div className='lg:hover-animate'>
        <h1 className='text-4xl font-bold text-indigo-900'>My latest and greatest <span className='text-indigo-400'>projects</span></h1>
        <p className='py-8'>Alongside working as an instructor, I like to keep my skills up to date by continuously working on new and exciting things. Technology is always changing and improving, so I like to keep myself improving and helping people with the applications I develop</p>
      </div>
      {isModalOpen && (
        <ImageModal modalImage={modalImage} isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
      <div className='grid md:grid-cols-2 justify-center items-center md:gap-40 max-md:gap-20'>
        {displayProjects?.map((project, index) => (
          <ProjectItem project={project} key={index} isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
