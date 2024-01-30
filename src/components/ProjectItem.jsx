import {useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageModal from "./ImageModal";

const ProjectItem = ({ project, isModalOpen, openModal }) => {


  return (
    <div className="max-w-sm bg-white shadow-xl shadow-indigo-900/30 rounded-lg dark:border-gray-700 flex flex-col items-center h-200 w-full md:hover-animate">
      <button
        className="h-full block text-whitefocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => !isModalOpen && openModal(project.img1)}
      >
        <img className="p-10 w-full" src={project?.img1} alt="" />
      </button>

      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-wide text-indigo-900">
          {project.name}
        </h5>
        <div className="flex flex-wrap py-1">
          {project?.links.map((projectLink, index) => (
                <a
                  href={projectLink?.url}
                  key={index}
                  className="flex text-xs items-center underline pr-2 lg:hover-animate"
                  target="_blank"
                >
                  <projectLink.icon />
                  <span className="pl-1">{projectLink?.description}</span>
                </a>
              ))}
        </div>
        <div className="flex flex-wrap mt-2 mb-4">
          {project?.technologies.map((Technology, index) => (
            <p key={index} className="px-1 flex items-center">
              {(index === 0 || index === 1) ?
                <Technology size={20} />
                : ""
              }
            </p>
          ))}
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
          {project.descriptionShort}
        </p>
        <Link
          to={`/project-details/${project.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-900 rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-900"
        >
          Read more
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
