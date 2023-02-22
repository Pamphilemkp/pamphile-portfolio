/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHomeHeartLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { FaUserGraduate, FaCoffee } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function NavMobile({ open }) {
  const { t } = useTranslation();

  const activeStyle = {
    color: 'rgb(65, 105, 225)',
  };
  if (!open) return <LanguageSwitcher />;
  return (
    <div className="taggle-menu">
      <a href="https://www.buymeacoffee.com/pamphilemkp" className="buy-me-coffe">
        <FaCoffee className="coffee-icon" />
        <span className="coffee-text">{t('coffee')}</span>
      </a>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><RiHomeHeartLine /></span>
        <span>{t('navbar.home')}</span>
      </NavLink>
      <NavLink to="/About" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><FaUserGraduate /></span>
        <span>{t('navbar.about')}</span>
      </NavLink>
      <NavLink to="/Skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><GiSkills /></span>
        <span>{t('navbar.skills')}</span>

      </NavLink>
      <NavLink to="/Projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span><MdComputer /></span>
        <span>{t('navbar.projects')}</span>

      </NavLink>
      <NavLink to="/Contacts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <span>
          {' '}
          <span><CgProfile /></span>
        </span>
        <span>{t('navbar.contact')}</span>
      </NavLink>
    </div>
  );
}

export default NavMobile;
