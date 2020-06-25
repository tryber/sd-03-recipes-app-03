import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import FoodList from '../../components/Food/FoodList/FoodList';

const Foods = () => {
  const { get12Meals, meals } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
    console.log('fui montado', meals);
  }, []);
  return (
    <FoodList meals={meals}/>
  );
};

export default Foods;
