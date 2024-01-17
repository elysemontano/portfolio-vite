import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectPage from './pages/ProjectPage'; // Make sure to import your ProjectPage component
import PDFViewer from './components/PDFViewer';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project-details/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
      <PDFViewer />
    </>
  );
};

export default App;
