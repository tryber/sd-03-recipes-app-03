import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
// import woman from './mulher.svg';
// import man from './pessoa.svg';
import profileIcon from '../../images/profileIcon.svg';

const Header = ({ title, searchIcon, onClick }) => (
  <header className="heading-container">
    <div>
      <Link to="/perfil">
        <img
          className="personal-icon"
          src={profileIcon}
          alt="icone de  perfil"
          data-testid="profile-top-btn"
        />
      </Link>
    </div>
    <h1 data-testid="page-title">{title}</h1>
    {searchIcon && (
      <Link>
        <button
          className="personal-icon"
          src={searchIcon}
          alt="icone de  busca"
          data-testid="search-top-btn"
          onClick={onClick}
        />
      </Link>
    )}
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
