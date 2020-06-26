import React, { useState, useEffect } from 'react';
import { fetchDrinks } from '../../../services/theCockTailAPI';
import RecommendedDrinksComponent from './RecommendedDrinksComponent';

const RecommendedDrinks = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const apiRequestSucceedDrink = ({ drinks }) => {
    setData(drinks);
    setIsLoading(false);
  }

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  }

  useEffect(() => {
    const apiRequestFunction = () => {
      fetchDrinks().then(apiRequestSucceedDrink, apiRequestFailure)
    }
    apiRequestFunction()
  }, [])

  const sixRecommendedDrinks = data.slice(0, 6);

  return (
    <div>
      <h2>Recomendadas</h2>
      <div>
        {sixRecommendedDrinks.map((drinks) =>
            <RecommendedDrinksComponent key={drinks.idDrink} drinks={drinks} />
        )}
      </div>
    </div>
  )
}

export default RecommendedDrinks;
