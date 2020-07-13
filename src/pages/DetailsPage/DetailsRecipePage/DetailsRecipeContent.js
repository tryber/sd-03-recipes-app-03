import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';
import DetailsRecipesPage from './DetailsRecipesPage';
import { fetchMealById, fetchMeals } from '../../../services/theMealAPI';
import { fetchDrinkById, fetchDrinks } from '../../../services/theCockTailAPI';
import { useParams, useLocation } from 'react-router-dom';

const DetailsRecipeContent = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setRecipeDataFunc, setProviderRecommendedFunc } = useContext(RecipeInProgressContext);

  const { id } = useParams();
  const { pathname } = useLocation();
  // const { match: { params: { id } }, location: { pathname } } = props;

  const apiRequestSucceedMeal = ({ meals }) => {
    if (!pathname.includes('/comidas')) return setProviderRecommendedFunc(meals);
    setRecipeDataFunc(meals[0]);
    return setIsLoading(false);
  };

  const apiRequestSucceedDrink = ({ drinks }) => {
    if (!pathname.includes('/bebidas')) return setProviderRecommendedFunc(drinks);
    setRecipeDataFunc(drinks[0]);
    return setIsLoading(false);
  };

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  };

  useEffect(() => {
    const apiRequestFunction = (callback, recipeId = '') => {
      setIsLoading(true);
      if (callback === fetchMealById || callback === fetchMeals) {
        return callback(recipeId).then(apiRequestSucceedMeal, apiRequestFailure);
      }
      return callback(recipeId).then(apiRequestSucceedDrink, apiRequestFailure);
    };

    if (pathname.includes('/comidas')) {
      apiRequestFunction(fetchMealById, id);
      apiRequestFunction(fetchDrinks);
    } else {
      apiRequestFunction(fetchDrinkById, id);
      apiRequestFunction(fetchMeals);
    }
  }, [pathname]);

  return <div><DetailsRecipesPage renderControl={{ isLoading, errorMessage }} /></div>;
};

export default DetailsRecipeContent;

// DetailsRecipeContent.propTypes = {
//   match: PropTypes.objectOf(PropTypes.any).isRequired,
//   location: PropTypes.objectOf(PropTypes.any).isRequired,
// };
