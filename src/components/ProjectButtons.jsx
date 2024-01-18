import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectData from "../projectData";
import { useNavigate } from "react-router-dom"

const ProjectButtons = ({currentProject}) => {
  const navigate = useNavigate()

  const calculateAdvanceProject = () => {
    return (currentProject?.id % projectData.length) + 1;
  };

  const isAtFirstProject = currentProject?.id === 1;
  const isAtLastProject = currentProject?.id === projectData.length;

  const nextProject = () => {
    const advanceProject = (currentProject?.id % projectData.length) + 1;
    navigate(`/project-details/${advanceProject}`);
    window.scrollTo(0, 0);
  };

  const previousProject = () => {
    const previousProject = currentProject?.id - 1 <= 0 ? projectData.length : currentProject?.id - 1;
    navigate(`/project-details/${previousProject}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="sm:flex sm:items-center">
      <button
        onClick={previousProject}
        className={`max-sm:mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-900 rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-900 mr-4 hover-animate ${
          isAtFirstProject ? "hidden" : ""
        }`}
      >
        <FaArrowLeft className="mr-2" />
        <span className="pr-2">Previous Project:</span>
        {
          projectData[
            currentProject?.id - 2 >= 0
              ? currentProject?.id - 2
              : projectData.length - 1
          ]?.name
        }
      </button>

      <button
        onClick={nextProject}
        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-900 rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-900 hover-animate ${
          isAtLastProject ? "hidden" : ""
        }`}
      >
        <span className="pr-2">Next Project:</span>
        {projectData[calculateAdvanceProject() - 1]?.name}
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default ProjectButtons;
