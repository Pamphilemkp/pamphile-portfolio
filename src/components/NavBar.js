/* eslint-disable consistent-return */
/* eslint-disable no-irregular-whitespace */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import NavMobile from './NavMobile';

function NavBar() {
  const activeStyle = {
    color: 'rgb(65, 105, 225)',
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="mobile-hamburger hamburger-navbar">
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          className="hamburger-icon"
        />
        <NavMobile open={isOpen} />
      </div>
      <div className="nav-desktop">
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        <NavLink to="/About" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
        <NavLink to="/Skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Skills</NavLink>
        <NavLink to="/Projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Projects</NavLink>
        <NavLink to="/Contacts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
