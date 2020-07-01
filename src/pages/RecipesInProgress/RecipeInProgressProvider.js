import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { destructureAPI } from '../../untils/destructureObject';

export const RecipeInProgressContext = createContext();

export const RecipeInProgressProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState({});

  const setRecipeDataFunc = (data) => setRecipeData(destructureAPI(data))

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
