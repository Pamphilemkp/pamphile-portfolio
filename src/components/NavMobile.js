/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMobile({ open }) {
  const activeStyle = {
    color: 'rgb(65, 105, 225)',
  };
  if (!open) return null;
  return (
    <div className="taggle-menu">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
      <NavLink to="/About" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
      <NavLink to="/Skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Skills</NavLink>
      <NavLink to="/Projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Projects</NavLink>
      <NavLink to="/Contacts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact</NavLink>
    </div>
  );
}

export default NavMobile;
