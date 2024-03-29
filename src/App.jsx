import {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectPage from './pages/ProjectPage'; // Make sure to import your ProjectPage component
import PDFViewer from './components/PDFViewer';
import ErrorPage from './pages/ErrorPage'
import Resume from './pages/Resume'



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const printableComponentRef = useRef();

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('backdrop-blur-modal')) {
      closeModal();
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printableComponentRef.current,
  });



  const openModal = (image) => {
    if (!isModalOpen) {
      setModalImage(image);
      setIsModalOpen(true);
    }
  };
  
  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage} printableComponentRef={printableComponentRef} handleOutsideClick={handleOutsideClick} />} />
          <Route path="/resume" element={<Resume ref={printableComponentRef} handlePrint={handlePrint}/>}/>
          <Route path="/project-details/:id" element={<ProjectPage isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage} printableComponentRef={printableComponentRef} />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
      <PDFViewer />
    </>
  );
};

export default App;
