import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';
import SomeProjects from '../components/Projects/SomeProjects';
import AboutMe from '../components/About/AboutMe';
import Contact from '../components/Contact/Contact';
import SkillsList from '../components/Skills/SkillsList';

function HomePage() {
  return (
    <div className="home-container">
      <NavBar />
      <Home />
      <SkillsList />
      <SomeProjects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default HomePage;
