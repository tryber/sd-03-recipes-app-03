import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { fetchMeals } from '../../../services/theMealAPI';
import { fetchDrinks } from '../../../services/theCockTailAPI';

const FoodProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState({ drinks: [], meals: [] });
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [storage, setStorage] = useState([]);
  const [dataByIngredients, setDataByIngredients] = useState([]);

  const handleMealsSuccess = (response) => {
    const { meals } = response;
    setMealsData(meals);
    setDataBase((currentState) => ({ ...currentState, meals }));
  };
  const fetch12Meals = () => {
    fetchMeals()
      .then(handleMealsSuccess, (e) => e);
  };
  const handleDrinksSuccess = (response) => {
    const { drinks } = response;
    setDrinksData(drinks);
    setDataBase((currentState) => ({ ...currentState, drinks }));
  };
  const fetch12Drinks = () => {
    fetchDrinks()
      .then(handleDrinksSuccess, (e) => e);
  };
  const context = {
    get12Meals: fetch12Meals,
    get12Drinks: fetch12Drinks,
    mealsData,
    drinksData,
    dataByIngredients,
    setMealsData,
    setDrinksData,
    setDataByIngredients,
    storage,
    setStorage,
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
