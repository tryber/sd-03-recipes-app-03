import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderSearchBar from '../HeaderSearchBar';
import './style.css';
// import woman from './mulher.svg';
// import man from './pessoa.svg';
import profileIcon from '../../images/profileIcon.svg';
import iconSearch from '../../images/searchIcon.svg';


const Header = ({ title, searchIcon }) => {
  const [viewSearch, setViewSearch] = useState(false);

  return (
    <div >
      <header className="header-container">
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={profileIcon}
            alt="icone de perfil"
            className="header-icon"
          />
        </Link>
        <h1 data-testid="page-title" className="header-title">{title}</h1>
        {searchIcon && (
          <input
            type="image"
            src={iconSearch}
            data-testid="search-top-btn"
            alt="icone de  busca"
            onClick={() => setViewSearch(!viewSearch)}
            className="header-icon-search"
          />
        )}
        {!searchIcon && (<p />)}
      </header>
      {viewSearch && <HeaderSearchBar />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool.isRequired,
};
