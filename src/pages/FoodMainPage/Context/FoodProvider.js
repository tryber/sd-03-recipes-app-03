import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { fetchMeals } from '../../../services/theMealAPI';
import { fetchDrinks } from '../../../services/theCockTailAPI';

const FoodProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState({ drinks: [], meals: [] });
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [error, setError] = useState([{ toDrink: '', toMeals: '' }]);
  const handleMealsFailure = (err) => {
    setError((currentState) => ({ ...currentState, toMeals: err }));
  };
  const handleMealsSuccess = (response) => {
    const { meals } = response;
    setMealsData(meals);
    setDataBase((currentState) => ({ ...currentState, meals }));
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
    setDrinksData(drinks);
    setDataBase((currentState) => ({ ...currentState, drinks }));
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
    setMealsData,
    setDrinksData,
    error,
    dataBase,
  };
  return (
    <FoodContext.Provider value={context}>
      {children}
    </FoodContext.Provider>
  );
};

FoodProvider.propTypes = { children: PropTypes.node.isRequired };

export default FoodProvider;
