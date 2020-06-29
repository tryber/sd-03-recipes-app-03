import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { DetailsPageContext } from '../DetailsPageProvider';
import DetailsRecipesPage from './DetailsRecipesPage';
import { fetchMealById, fetchMeals } from '../../../services/theMealAPI';
import { fetchDrinkById, fetchDrinks } from '../../../services/theCockTailAPI';

const DetailsMealsPage = (props) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    setProviderDataFunc, setPathNameFunc, setProviderRecommendedFunc,
  } = useContext(DetailsPageContext);
  const { match: { params: { id } }, location: { pathname } } = props;
  const apiRequestSucceedMeal = ({ meals }) => {
    if (!pathname.includes('/comidas')) return setProviderRecommendedFunc(meals);
    setData(meals[0]);
    setProviderDataFunc(meals[0]);
    setPathNameFunc(pathname);
    setIsLoading(false);
  };
  const apiRequestSucceedDrink = ({ drinks }) => {
    if (!pathname.includes('/bebidas')) return setProviderRecommendedFunc(drinks);
    setData(drinks[0]);
    setProviderDataFunc(drinks[0]);
    setPathNameFunc(pathname);
    setIsLoading(false);
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
  return <div><DetailsRecipesPage renderControl={{ isLoading, errorMessage, data }} /></div>;
};

export default DetailsMealsPage;

DetailsMealsPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

// DetailsMealsPage.defaultProps = {
//   id: '',
// }
