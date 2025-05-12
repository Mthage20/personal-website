import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="scroll-container">
      <section className="section" id="home">
        <LandingPage />
      </section>
      <section className="section" id="projects">
        <ProjectsPage />
      </section>
      <section className="section" id="about">
        <AboutPage />
      </section>
      <section className="section" id="resume">
        <ResumePage />
      </section>
      <section className="section" id="contact">
        <ContactPage />
      </section>
    </div>
  );
}

export default App;
