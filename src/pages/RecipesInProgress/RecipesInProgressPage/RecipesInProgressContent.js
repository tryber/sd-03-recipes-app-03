import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import { fetchMealById } from '../../../services/theMealAPI';
import { fetchDrinkById } from '../../../services/theCockTailAPI';
import RecipesInProgressPage from './RecipesInProgressPage';

const createLocalStorage = (id, type) => {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    console.log('entre');
    const inProgressRecipes = { cocktails: {}, meals: {} };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgressRecipes = {
    ...inProgress,
    [type]: {
      [id]: [],
      ...inProgress[type],
    },
  };
  return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const RecipesInProgressContent = () => {
  const { setInProgressFunc } = useContext(RecipeInProgressContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();

  const apiRequestSucceedMeal = ({ meals }) => {
    setInProgressFunc(meals[0]);
    return setIsLoading(false);
  };

  const apiRequestSucceedDrink = ({ drinks }) => {
    setInProgressFunc(drinks[0]);
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
      createLocalStorage(id, 'meals');
      apiRequestFunction(fetchMealById, id);
    } else {
      createLocalStorage(id, 'cocktails');
      apiRequestFunction(fetchDrinkById, id);
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
