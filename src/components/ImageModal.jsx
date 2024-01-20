import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const ImageModal = ({ modalImage, closeModal }) => {
  return (
    <div className="fixed top-8 right-0 left-0 z-50 h-full flex justify-center items-center">
      <div className="w-full max-w-5xl max-h-full rounded-lg shadow relative" style={{ backgroundColor:"rgba(62, 52, 91, 0.8)" }}>
        <div className="flex items-center px-4 md:px-5 pt-2 border-t rounded-b">
          <button
            onClick={closeModal}
            type="button"
            className=" bg-transparent rounded-lg text-sm text-white w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-indigo-600/80 dark:hover:text-white"
          >
            <AiOutlineCloseSquare size={25}/>
          </button>
        </div>
        <div className="p-6">
            <img className="w-full rounded-lg" src={modalImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
