import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import FoodList from '../../components/Food/FoodList/FoodList';

const Foods = () => {
  const { get12Meals, mealsData } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
  }, []);
  return (
    <FoodList meals={mealsData} />
  );
};

export default Foods;
