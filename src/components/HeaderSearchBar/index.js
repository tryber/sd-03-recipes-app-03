import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';
import './style.css';
import { fetchRecipesByIngredient, fetchRecipesByName, fetchRecipesByFirstLetter } from '../../services/searchBarAPI';
import { SearchBarContext } from './HeaderSearchBarContext';
import { zipObjectDeep } from 'lodash';

const HeaderSearchBar = ({ history, location }) => {
  const [state, setState] = useState({
    searchParam: 'name',
    searchName: '',
  });

  const { setIsFetching, setData } = useContext(SearchBarContext);

  const { searchParam, searchName } = state;

  const searchButton = async () => {
    const search = {
      ingredients: fetchRecipesByIngredient,
      name: fetchRecipesByName,
      firstLetter: fetchRecipesByFirstLetter,
    };

    if (searchParam === 'firstLetter' && searchName.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    // if (location.pathname === '/comidas') {
    const data = await search[searchParam](searchName, (location.pathname === '/comidas' ? 'meal' : 'cocktail'));
    const json = location.pathname === '/comidas' ? data.meals : data.drinks
    setData(json);
    setIsFetching(false);
    if (json) {
      if (json.length === 1) history.push(`/comidas/${json[0][location.pathname === '/comidas' ? 'idMeal' : 'idDrink']}`);
      if (json.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

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
        onClick={() => searchButton()}
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
