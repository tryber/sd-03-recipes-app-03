import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import FoodList from '../../components/Food/FoodList/FoodList';
import Header from '../../components/Header';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';

const Foods = () => {
  const { get12Meals, mealsData, get12Drinks } = useContext(FoodContext);
  const { data } = useContext(SearchBarContext);
  useEffect(() => {
    get12Meals();
    get12Drinks();
  }, []);
  return (
    <div>
      <Header title="Comidas" searchIcon />
      <FoodList meals={data.length ? data : mealsData} />
    </div>
  );
};

export default Foods;
