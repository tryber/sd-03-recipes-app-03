import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { DetailsPageContext } from '../DetailsPage/DetailsPageProvider';
import { useLocation, useParams } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import { fetchMealById } from '../../../services/theMealAPI';
import { fetchDrinkById } from '../../../services/theCockTailAPI';
import RecipesInProgressPage from './RecipesInProgressPage';

const createLocalStorage = (id, type) => {
  if (JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails.id
    || JSON.parse(localStorage.getItem('inProgressRecipes')).meals.id
  ) return null
  if (JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'))
    if (type === 'comidas') {
      const inProgressRecipes = {
        ...inProgress,
        meals: {
          ...inProgress.meals,
          [id]: [],
        }
      }
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes))
    } else if (type !== 'comidas') {
      const inProgressRecipes = {
        ...inProgress,
        cocktails: {
          ...inProgress.cocktails,
          [id]: [],
        }
      }
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes))
    }
    const inProgressRecipes = { cocktails: {}, meals: {} }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes))
  }
}

const RecipesInProgressContent = () => {
  const { setRecipeDataFunc } = useContext(RecipeInProgressContext);
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
      createLocalStorage(id, 'comidas');
    } else {
      apiRequestFunction(fetchDrinkById, id);
      createLocalStorage(id);
    }
  }, [pathname]);

  return (
    <div>
      <RecipesInProgressPage renderControl={{ isLoading, errorMessage }} />
    </div>
  );
};

export default RecipesInProgressContent;

// RecipesInProgressContent.propTypes = {

// };
