import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { destructureDrinks, destructureMeal } from '../../untils/functions';

export const RecipeInProgressContext = createContext();

export const RecipeInProgressProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState({});

  const setRecipeDataFunc = (data) => {
    data.idMeal ? setRecipeData(destructureMeal(data)) : setRecipeData(destructureDrinks(data));
  };

  const recipesInProgressObj = {
    recipeData,
    setRecipeDataFunc,
  };

  return (
    <RecipeInProgressContext.Provider value={recipesInProgressObj}>
      {children}
    </RecipeInProgressContext.Provider>
  );
};

RecipeInProgressProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
