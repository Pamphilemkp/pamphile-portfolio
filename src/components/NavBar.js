import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/About">About Me</NavLink>
    <NavLink to="/Skills">My Skills</NavLink>
    <NavLink to="/Projects">My Projects</NavLink>
    <NavLink to="/Contacts">Contact</NavLink>
  </div>
);

export default NavBar;
