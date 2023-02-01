/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHomeHeartLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';

function NavMobile({ open }) {
  const activeStyle = {
    color: 'rgb(65, 105, 225)',
  };
  if (!open) return null;
  return (
    <div className="taggle-menu">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><RiHomeHeartLine /></span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/About" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><FaUserGraduate /></span>
        <span>About</span>
      </NavLink>
      <NavLink to="/Skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><GiSkills /></span>
        <span>Skills</span>

      </NavLink>
      <NavLink to="/Projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><MdComputer /></span>
        <span>Projects</span>

      </NavLink>
      <NavLink to="/Contacts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span>
          {' '}
          <span><CgProfile /></span>
        </span>
        <span>Contact</span>

      </NavLink>
    </div>
  );
}

export default NavMobile;
