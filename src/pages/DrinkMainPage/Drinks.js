import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import DrinkList from '../../components/Drink/DrinkList/DrinkList';

const Drinks = () => {
  const { get12Drinks, drinks } = useContext(FoodContext);
  useEffect(() => {
    get12Drinks();
  }, []);
  return (
    <DrinkList drinks={drinks}/>
  );
};

export default Drinks;
