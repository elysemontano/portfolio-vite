import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link as LinkRouter, useParams } from 'react-router-dom';
import projectData from '../projectData';

const ProjectsDropdown = () => {
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const { id } = useParams();

  const handleMouseEnter = () => {
    setIsProjectMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProjectMenuOpen(false);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter}>
      <div className={`cursor-pointer text-white transform ${isProjectMenuOpen ? 'rotate-180' : ''}`}>
        <FaCaretDown />
      </div>
      {isProjectMenuOpen && (
        <ul className="absolute right-0 mt-4 space-y-2 bg-opacity-90 rounded-lg bg-white shadow-md shadow-indigo-900/40 p-2 w-60" onMouseLeave={handleMouseLeave}>
          {projectData?.map((project, index) => (
            <LinkRouter to={`/project-details/${project.id}`} className="text-black" key={index}>
              <li
                className="border-t-2 pt-2 pl-2"
                style={{ fontWeight: +id === project.id ? 'bold' : 'normal' }}
                key={index}
              >
                {project.name}
              </li>
            </LinkRouter>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsDropdown;
