import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { fetchMeals } from '../../../services/theMealAPI';
import { fetchDrinks } from '../../../services/theCockTailAPI';

const FoodProvider = ({ children }) => {
  const [mealsData, setMeals] = useState([]);
  const [drinksData, setDrinks] = useState([]);
  const [error, setError] = useState([{ toDrink: '', toMeals: '' }]);
  const handleMealsFailure = (err) => {
    setError((currentState) => ({ ...currentState, toMeals: err }));
  };
  const handleMealsSuccess = (response) => {
    const { meals } = response;
    setMeals(meals);
  };

  const fetch12Meals = () => {
    fetchMeals('')
      .then(handleMealsFailure, handleMealsSuccess);
  };

  const handleDrinksFailure = (err) => {
    setError((currentState) => ({ ...currentState, toDrink: err }));
  };

  const handleDrinksSuccess = (response) => {
    const { drinks } = response;
    setDrinks(drinks);
  };

  const fetch12Drinks = () => {
    fetchDrinks('')
      .then(handleDrinksFailure, handleDrinksSuccess);
  };
  const context = {
    get12Meals: fetch12Meals,
    get12Drinks: fetch12Drinks,
    mealsData,
    drinksData,
    error,
  };
  return (
    <FoodContext.Provider value={context}>
      {children}
    </FoodContext.Provider>
  );
};

FoodProvider.propTypes = { children: PropTypes.node.isRequired };

export default FoodProvider;
