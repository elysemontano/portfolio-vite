import React, { useState, useRef, useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const ImageModal = ({ isModalOpen, modalImage, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className={`${
            isModalOpen ? "bg-overlay" : ""
          } fixed top-20 px-4 py-4 pb-20 right-0 left-0 z-50 h-full flex justify-center items-center`}
        >
          <div
            className={`w-full max-w-5xl h-inherit rounded-lg shadow-2xl border-2 border-gray-300 ${
              isModalOpen ? "backdrop-blur-modal" : ""
            }`}
            style={{ backgroundColor: "white" }}
          >
            <div className="flex items-center px-4 md:px-5 mt-2 border-t rounded-b">
              <button
                onClick={closeModal}
                type="button"
                className="rounded-lg text-sm text-indigo-600/80 w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-indigo-600/80 dark:hover:text-white"
              >
                <AiOutlineCloseSquare size={35} />
              </button>
            </div>
            <div className="p-6">
              <img className="w-full rounded-lg" src={modalImage} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
