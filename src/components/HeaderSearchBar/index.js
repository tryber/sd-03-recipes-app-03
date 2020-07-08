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

  const type = location.pathname === '/comidas' ? 'meal' : 'cocktail';

  const { setIsFetching, setData } = useContext(SearchBarContext);

  const { searchParam, searchName } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const radioInput = (htmlFor, value, dataTestId, label) => (
    <label htmlFor={htmlFor} className="search-label">
      <input
        type="radio"
        name="searchParam"
        value={value}
        data-testid={dataTestId}
        onClick={(e) => handleChange(e)}
      />
      {label}
    </label>
  );


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
        {radioInput('ingredient', 'ingredients', 'ingredient-search-radio', 'Ingredientes')}
        {radioInput('name', 'name', 'name-search-radio', 'Nome')}
        {radioInput('firstLetter', 'firstLetter', 'first-letter-search-radio', 'Primeira letra')}
      </div>
      <button
        type="button"
        name="searchParam"
        data-testid="exec-search-btn"
        className="search-button"
        onClick={() => searchButton(
          history,
          type,
          setIsFetching,
          setData,
          searchParam,
          searchName,
        )}
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
