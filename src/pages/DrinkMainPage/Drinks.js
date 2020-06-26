import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import DrinkList from '../../components/Drink/DrinkList/DrinkList';

const Drinks = () => {
  const { get12Drinks, drinksData } = useContext(FoodContext);
  useEffect(() => {
    get12Drinks();
  }, []);
  return (
    <DrinkList drinks={drinksData} />
  );
};

export default Drinks;