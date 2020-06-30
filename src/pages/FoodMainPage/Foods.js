import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
import Header from '../../components/Header';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';
import Loading from '../../components/Loading/Loading';

const Foods = () => {
  const { data } = useContext(SearchBarContext);
  const { get12Meals, mealsData } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
  }, []);
  if (mealsData.length === 0) return <Loading />;
  return (
    <div>
      <Header title="Comidas" searchIcon />
      <RecipeList recipes={data.length ? data : mealsData} type="meal" />
    </div>
  );
};

export default Foods;
