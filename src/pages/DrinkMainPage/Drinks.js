import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
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
      <Header title="Bebidas" searchIcon />
      <RecipeList recipes={data.length ? data : drinksData} type="drink" />
    </div>
  );
};

export default Drinks;
