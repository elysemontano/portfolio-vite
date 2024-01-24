import React from 'react';
import { IoMdPrint } from "react-icons/io";


const PrintButton = ({ handlePrint }) => {

  return (
    <button onClick={handlePrint}><IoMdPrint size={40} className='border-2 border-white rounded-md p-2 hover:bg-white/30 hover-animate'/></button>
  );
};

export default PrintButton;
