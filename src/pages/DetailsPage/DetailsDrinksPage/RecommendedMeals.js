import React, { useState, useEffect, useContext, useCallback } from 'react';
import { fetchMeals } from '../../../services/theMealAPI';
import RecommendedMealsComponent from './RecommendedMealsComponent';
import FoodContext from '../../FoodMainPage/Context/FoodContext';

const RecommendedMeals = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const { mealsData } = useContext(FoodContext);

  // const apiRequestSucceedMeal = ({ meals }) => {
  //   setData(meals);
  //   setIsLoading(false);
  // };

  // const apiRequestFailure = ({ message }) => {
  //   setErrorMessage(message);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   const apiRequestFunction = () => {
  //     fetchMeals().then(apiRequestSucceedMeal, apiRequestFailure);
  //   };
  //   apiRequestFunction();
  // }, []);

  const sixRecommendedMeals = mealsData.slice(0, 6);
  // console.log(mealsData);
  // console.log(isLoading, errorMessage);
  return (
    <div>
      <h2>Recomendadas</h2>
      <div>
        {sixRecommendedMeals.map((meals, index) =>
          <RecommendedMealsComponent
            data-testid={`${index}-recomendation-card`}
            key={meals.idMeal}
            meals={meals}
            index={index}
          />,
        )}
      </div>
    </div>
  );
};

export default RecommendedMeals;
