import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import destructureAPI from '../../untils/destructureObject';

export const RecipeInProgressContext = createContext();

export const RecipeInProgressProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState({});
  const [recipeInProgress, setRecipeInProgress] = useState({});
  const [providerRecommended, setProviderRecommended] = useState([]);

  const setInProgressFunc = (data) => setRecipeInProgress(destructureAPI(data));
  const setRecipeDataFunc = (data) => setRecipeData(destructureAPI(data));
  const setProviderRecommendedFunc = (recommendedData) => {
    const sixRecommended = recommendedData
      .map((recommended) => destructureAPI(recommended)).slice(0, 6);
    setProviderRecommended(sixRecommended);
  };

  const recipesInProgressObj = {
    recipeData,
    setRecipeDataFunc,
    providerRecommended,
    setProviderRecommendedFunc,
    recipeInProgress,
    setInProgressFunc,
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
