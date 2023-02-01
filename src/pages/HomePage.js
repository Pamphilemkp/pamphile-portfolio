import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';

function HomePage() {
  return (
    <div className="home-container">
      <NavBar />
      <Home />
    </div>
  );
}

export default HomePage;
