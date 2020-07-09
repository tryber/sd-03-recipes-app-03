import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
import Header from '../../components/Header';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';

const Foods = () => {
  const { data } = useContext(SearchBarContext);
  const { get12Meals, mealsData = [] } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
  }, []);
  if (mealsData === null || mealsData.length === 0) return <Loading />;
  return (
    <div className="recipes-container">
      <Header title="Comidas" searchIcon />
      <RecipeList recipes={data.length ? data : mealsData} type="meal" />
      <Footer />
    </div>
  );
};

export default Foods;
