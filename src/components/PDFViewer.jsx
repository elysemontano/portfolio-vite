import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import pdfUrl from "../assets/resume.pdf"



const PDFViewer = () => {

  return (
    <div>
      <Document file={pdfUrl} >
      </Document>
    </div>
  );
};

export default PDFViewer