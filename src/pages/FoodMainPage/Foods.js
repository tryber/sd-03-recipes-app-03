import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import FoodList from '../../components/Food/FoodList/FoodList';
import Loading from '../../components/Loading/Loading';

const Foods = () => {
  const { get12Meals, mealsData } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
  }, []);
  if (mealsData.length === 0) return <Loading />
  return (
    <FoodList meals={mealsData} />
  );
};

export default Foods;
