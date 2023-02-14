/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ParticleBackground from 'react-particle-backgrounds';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import PageNotFound from './pages/PageNotFound';

function App() {
  const settings = {
    particle: {
      particleCount: 75,
      color: '#fff',
      minSize: 3,
      maxSize: 10,
    },
    velocity: {
      minSpeed: 0.5,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000,
    },
  };

  return (
    <div className="App">
      <ParticleBackground settings={settings} className="app-global-bg" />
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;