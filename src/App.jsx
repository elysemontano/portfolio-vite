import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectPage from './pages/ProjectPage'; // Make sure to import your ProjectPage component
import PDFViewer from './components/PDFViewer';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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
          <Route exact path="/" element={<Home isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage} />} />
          <Route path="/project-details/:id" element={<ProjectPage isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalImage={modalImage} />} />
        </Routes>
      </Router>
      <PDFViewer />
    </>
  );
};

export default App;
