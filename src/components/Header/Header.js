import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span">Lista de tareas</span>
      </nav>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
