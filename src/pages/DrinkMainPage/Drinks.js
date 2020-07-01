import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import DrinkList from '../../components/Drink/DrinkList/DrinkList';
import Header from '../../components/Header';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';

const Drinks = () => {
  const { data } = useContext(SearchBarContext);
  const { get12Drinks, drinksData } = useContext(FoodContext);
  useEffect(() => {
    get12Drinks();
  }, []);
  return (
    <div>
      <Header title="Comidas" searchIcon />
      <DrinkList drinks={data.length ? data : drinksData} />
    </div>
  );
};

export default Drinks;
