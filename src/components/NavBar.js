/* eslint-disable consistent-return */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Twirl as Hamburger } from 'hamburger-react';

function NavBar() {
  return (
    <div className="">
      <div className="mobile-hamburger">
        {/* <Hamburger  /> */}
        <div className="name-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About Me</NavLink>
          <NavLink to="/Skills">My Skills</NavLink>
          <NavLink to="/Projects">My Projects</NavLink>
          <NavLink to="/Contacts">Contact</NavLink>
        </div>
      </div>

    </div>
  );
}

export default NavBar;
