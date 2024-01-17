import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '../projectData';

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-gray-500'>
      <div className='hover-animate'>
        <h1 className='text-4xl font-bold text-indigo-900'>My latest and greatest <span className='text-indigo-400'>projects</span></h1>
        <p className='py-8'>Alongside working as an instructor, I like to keep my skills up to date by continuously working on new and exciting things. Technology is always changing and improving, so I like to keep myself improving and helping people with the applications I develop</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-8'>
        {projectData?.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
