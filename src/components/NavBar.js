/* eslint-disable consistent-return */
/* eslint-disable no-irregular-whitespace */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import NavMobile from './NavMobile';
import LanguageSwitcher from './LanguageSwitcher';

function NavBar() {
  const { t } = useTranslation();

  const activeStyle = {
    color: 'rgb(65, 105, 225)',
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="mobile-hamburger hamburger-navbar">
        <LanguageSwitcher />
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
        <LanguageSwitcher />
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>{t('navbar.home')}</NavLink>
        <NavLink to="/About" style={({ isActive }) => (isActive ? activeStyle : undefined)}>{t('navbar.about')}</NavLink>
        <NavLink to="/Skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>{t('navbar.skills')}</NavLink>
        <NavLink to="/Projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>{t('navbar.projects')}</NavLink>
        <NavLink to="/Contacts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>{t('navbar.contact')}</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
