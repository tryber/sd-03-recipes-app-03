import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchMealById } from '../../services/theMealAPI';

export const DetailsPageContext = createContext();

export const DetailsPageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiRequestSucceedMeal = ({ meals }) => {
    setData(meals[0]);
    setIsLoading(false);
  };

  const apiRequestSucceedDrink = ({ drinks }) => {
    setData(drinks[0]);
    setIsLoading(false);
  };

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  };

  const apiRequestFunction = (callback, id) => {
    setIsLoading(true);
    if (callback === fetchMealById) {
      return callback(id).then(apiRequestSucceedMeal, apiRequestFailure);
    }
    return callback(id).then(apiRequestSucceedDrink, apiRequestFailure);
  };

  const detailsPageObj = {
    data,
    isLoading,
    errorMessage,
    apiRequestFunction,
  };

  return (
    <DetailsPageContext.Provider value={detailsPageObj}>
      {children}
    </DetailsPageContext.Provider>
  );
};

DetailsPageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
