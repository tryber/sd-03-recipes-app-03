import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import searchButton from './searchButtonFunction';
import { SearchBarContext } from './HeaderSearchBarContext';

const HeaderSearchBar = ({ history, location }) => {
  const [state, setState] = useState({
    searchParam: 'name',
    searchName: '',
  });

  const { setIsFetching, setData } = useContext(SearchBarContext);

  const { searchParam, searchName } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        name="searchName"
        placeholder="Buscar Receita"
        data-testid="search-input"
        className="search-input"
        onChange={(e) => handleChange(e)}
      />
      <div className="radio-container">
        <label htmlFor="ingredient" className="search-label">
          <input
            type="radio"
            name="searchParam"
            value="ingredients"
            data-testid="ingredient-search-radio"
            onClick={(e) => handleChange(e)}
          />
          Ingrediente
        </label>
        <label htmlFor="name" className="search-label">
          <input
            type="radio"
            name="searchParam"
            value="name"
            data-testid="name-search-radio"
            onClick={(e) => handleChange(e)}
          />
          Nome
        </label>
        <label htmlFor="first-letter" className="search-label">
          <input
            type="radio"
            name="searchParam"
            data-testid="first-letter-search-radio"
            onClick={(e) => handleChange(e)}
            value="firstLetter"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        name="searchParam"
        data-testid="exec-search-btn"
        className="search-button"
        onClick={() => searchButton(history, location, setIsFetching, setData, searchParam, searchName)}
      >
        Buscar
      </button>
    </div>
  );
};

export default withRouter(HeaderSearchBar);

HeaderSearchBar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
