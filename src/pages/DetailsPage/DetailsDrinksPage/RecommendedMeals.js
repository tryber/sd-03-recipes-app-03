import React, { useState, useEffect } from 'react';
import { fetchMeals } from '../../../services/theMealAPI';
import RecommendedMealsComponent from './RecommendedMealsComponent';

const RecommendedMeals = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const apiRequestSucceedMeal = ({ meals }) => {
    setData(meals);
    setIsLoading(false);
  }

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  }

  useEffect(() => {
    const apiRequestFunction = () => {
      fetchMeals().then(apiRequestSucceedMeal, apiRequestFailure)
    }
    apiRequestFunction()
  }, [])

  const sixRecommendedMeals = data.slice(0, 6);

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
          />
        )}
      </div>
    </div>
  )
}

export default RecommendedMeals;
