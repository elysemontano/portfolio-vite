import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <div className="max-w-sm bg-white shadow-xl shadow-gray-300 rounded-lg dark:border-gray-700 flex flex-col items-center h-200 w-full hover-animate">
      <div className="h-full">
        <img className="p-10 w-full" src={project.img1} alt="" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="text-2xl font-bold tracking-wide text-indigo-900">
            {project.name}
          </h5>
        </a>
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
