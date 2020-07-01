import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { DetailsPageContext } from '../DetailsPage/DetailsPageProvider';
import { useLocation, useParams } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import { fetchMealById } from '../../../services/theMealAPI';
import { fetchDrinkById } from '../../../services/theCockTailAPI';
import RecipesInProgressPage from './RecipesInProgressPage';

const RecipesInProgressContent = (props) => {
  const { recipeData, setRecipeDataFunc  } = useContext(RecipeInProgressContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();

  const apiRequestSucceedMeal = ({ meals }) => {
    setRecipeDataFunc(meals[0]);
    return setIsLoading(false);
  };

  const apiRequestSucceedDrink = ({ drinks }) => {
    setRecipeDataFunc(drinks[0]);
    return setIsLoading(false);
  };

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  };

  useEffect(() => {
    const apiRequestFunction = (callback, recipeId) => {
      setIsLoading(true);
      if (callback === fetchMealById) {
        return callback(recipeId).then(apiRequestSucceedMeal, apiRequestFailure);
      }
      return callback(recipeId).then(apiRequestSucceedDrink, apiRequestFailure);
    };
    if (pathname.includes('/comidas')) {
      apiRequestFunction(fetchMealById, id);
    } else {
      apiRequestFunction(fetchDrinkById, id);
    }
  }, [pathname]);

  return (
    <div>
      Hello
      <RecipesInProgressPage renderControl={{ isLoading, errorMessage }} />
    </div>
  );
};

export default RecipesInProgressContent;

RecipesInProgressContent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
