import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="teal">
          <div className="container">
            <div className="nav-wrapper">
              <a href="!#" className="brand-logo">
                {t('logo.1')}
              </a>
              <a href="!#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#home">{t('menu.1')}</a>
                </li>
                <li>
                  <a href="#about">{t('menu.2')}</a>
                </li>
                <li>
                  <a href="#contact">{t('menu.3')}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="#home">{t('menu.1')}</a>
        </li>
        <li>
          <a href="#about">{t('menu.2')}</a>
        </li>
        <li>
          <a href="#contact">{t('menu.3')}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
