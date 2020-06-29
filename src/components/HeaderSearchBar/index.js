import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import { fetchDrinksByIngredient, fetchDrinksByName, fetchDrinksByFirstLetter} from '../../services/theCockTailAPI';
import { fetchMealsByIngredients, fetchMealsByName, fetchMealsByFirstLetter} from '../../services/theMealAPI';
import { SearchBarContext } from './HeaderSearchBarContext';

const HeaderSearchBar = ({ history, location }) => {

    const [state, setState] = useState({
    searchParam: 'name',
    searchName: '',
  });

  const { setIsFetching, setData, data } = useContext(SearchBarContext);
  console.log('context', data);
  
  const { searchParam, searchName } = state;

  
  const searchButton = async () => {
    const searchMeal = {
      ingredients: fetchMealsByIngredients,
      name: fetchMealsByName,
      firstLetter: fetchMealsByFirstLetter,
    }

    const searchDrink = {
      ingredients: fetchDrinksByIngredient,
      name: fetchDrinksByName,
      firstLetter: fetchDrinksByFirstLetter,
    }

    if (searchParam === 'firstLetter' && searchName.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if(location.pathname === '/comidas') {
      const data = await searchMeal[searchParam](searchName)
      setData(data.meals)
      setIsFetching(false);
      console.log( 1323, history )
      if (data.meals) {
        if (data.meals.length === 1) history.push(`/comidas/${data.meals[0].idMeal}`);
        if (data.meals.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
    }

    if(location.pathname === '/bebidas') {
      const data = await searchDrink[searchParam](searchName)
      setData(data.drinks)
      setIsFetching(false);
      if (data.drinks) {
        if (data.drinks.length === 1) history.push(`/bebidas/${data.drinks[0].idDrink}`);
        if (data.drinks.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
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
      <label htmlFor="ingredient" className="ingredient-search-label">
        <input
          type="radio"
          name={searchParam}
          data-testid="ingredient-search-radio"
          onClick={(e) => handleChange(e)}
          value="ingredients"
        />
        Ingrediente
      </label>
      <label htmlFor="name" className="name-search-label">
        <input
          type="radio"
          name="searchParam"
          value="name"
          data-testid="name-search-radio"
          onClick={(e) => handleChange(e)}/>
        Nome
      </label>
      <label htmlFor="first-letter" className="first-letter-search-label" onClick={(e) => handleChange(e)}>
        <input
          type="radio"
          name="searchParam"
          data-testid="first-letter-search-radio"
          onClick={(e) => handleChange(e)}
          value="firstLetter"
        />
        Primeira letra
      </label>
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
};
