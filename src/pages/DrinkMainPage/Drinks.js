import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';
import Footer from '../../components/Footer/Footer';

const Drinks = () => {
  const { data } = useContext(SearchBarContext);
  const { get12Drinks, drinksData } = useContext(FoodContext);
  useEffect(() => {
    get12Drinks();
  }, []);
  return (
    <div>
      <RecipeList recipes={data.length ? data : drinksData} type="drink" />
      <Footer />
    </div>
  );
};

export default Drinks;
