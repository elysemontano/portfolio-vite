import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import projectData from "../projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NavBar from "../components/NavBar";
import YouTube from "react-youtube";
import ProjectButtons from "../components/ProjectButtons";
import ImageModal from "../components/ImageModal";

const ProjectPage = ({modalRef, isModalOpen, openModal, closeModal, modalImage}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentProject = projectData?.find((project) => project.id === +id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DynamicDisplay = currentProject?.display.tag;

  return (
    <>
      <NavBar backgroundColor={"rgba(62, 52, 91, 0.8)"}  />
      {isModalOpen && (
              <ImageModal modalImage={modalImage} isModalOpen={isModalOpen} closeModal={closeModal} modalRef={modalRef} />
            )}
      <div className="max-w-[1040px] mx-auto md:pl-4 md:pr-4 lg:pr-20 p-4 py-16 pt-40 text-gray-500 bg-white ">
        <ProjectButtons currentProject={currentProject} />
        <div className=" lg:hover-animate">
          <h1 className="text-4xl mt-6 font-bold text-indigo-900">
            {currentProject?.name}
          </h1>
          <div className="flex flex-wrap py-1">
            <p className="pr-2">More resources:</p>
            {currentProject?.links.map((projectLink, index) => (
              <a
                href={projectLink?.url}
                key={index}
                className="flex items-center underline pr-4 lg:hover-animate"
                target="_blank"
              >
                <projectLink.icon />
                <span className="pl-2">{projectLink?.description}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap py-1">
            <p className="pr-2">Technologies:</p>
            {currentProject?.technologies.map((Technology, index) => (
              <p
                key={index}
                className="px-1 flex items-center"
              >
                <Technology size={25} />
              </p>
            ))}
          </div>
          <p className="py-8">{currentProject?.descriptionLong}</p>
        </div>
        <div className="lg:hover-animate flex flex-col justify-center">
          {currentProject?.display.notes && (
            <p className="italic px-4 pb-2 sm:px-10">
              * Note: {currentProject?.display.notes}
            </p>
          )}
          {DynamicDisplay === "video" && (
            <div className="video-responsive">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/PDoEL58fZWA?si=TCbryC2oHhT2wLbC`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          )}
          {DynamicDisplay === "mov" && (
            <div className="video-responsive">
              <video autoPlay loop muted playsInline id="video">
                <source role="video" src={currentProject?.display.src} type="video/mp4" />
              </video>
            </div>
          )}
          {DynamicDisplay === "img" && (
                <img
                  className="w-full"
                  src={currentProject?.display.src}
                  alt={currentProject?.name}
                  onClick={() => !isModalOpen && openModal(currentProject?.display.src)}
                />
          )}
        </div>

        <div id="why" className="lg:hover-animate">
          <h3 className="text-4xl font-bold text-indigo-900 pt-20">
            My <span className="text-indigo-400">why</span>
          </h3>
          <div className="flex flex-wrap items-center pt-4">
            <p className="w-full md:w-1/2 md:pr-4">{currentProject?.why}</p>
            <img
              className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0"
              src={currentProject?.whyPic}
              alt=""
              onClick={() => !isModalOpen && openModal(currentProject?.whyPic)}
            />
          </div>
        </div>

        <div id="process" className="lg:hover-animate">
          <h3 className="text-4xl font-bold text-indigo-900 pt-20 text-end max-md:text-left">
            My <span className="text-indigo-400">process</span>
          </h3>
          <div className="flex flex-wrap items-center pt-4">
            <img
              className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
              src={currentProject?.processPic}
              alt=""
              onClick={() => !isModalOpen && openModal(currentProject?.processPic)}
            />
            <p className="w-full md:w-1/2 md:pl-4 ">
              {currentProject?.process}
            </p>
          </div>
        </div>

        <div id="lessons" className="lg:hover-animate">
          <h3 className="text-4xl font-bold text-indigo-900 pt-20">
            My <span className="text-indigo-400">growth</span>
          </h3>
          <div className="flex flex-wrap items-center pt-4 pb-8">
            <p className="w-full md:w-1/2 md:pr-4">{currentProject?.lesson}</p>
            <img
              className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0"
              src={currentProject?.lessonPic}
              alt=""
              onClick={() => !isModalOpen && openModal(currentProject?.lessonPic)}
            />
          </div>
        </div>
          <ProjectButtons currentProject={currentProject} />
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;
