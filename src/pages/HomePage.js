import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';
import SomeProjects from '../components/Projects/SomeProjects';
import AboutMe from '../components/About/AboutMe';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <div className="home-container">
      <NavBar />
      <Home />
      <SomeProjects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default HomePage;
