import React, { useContext, useEffect } from 'react';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
import Header from '../../components/Header';
import { SearchBarContext } from '../../components/HeaderSearchBar/HeaderSearchBarContext';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const Drinks = () => {
  const { data } = useContext(SearchBarContext);
  const { dataByIngredients = [] } = useContext(FoodContext);
  const { get12Drinks, drinksData } = useContext(FoodContext);

  useEffect(() => {
    get12Drinks();
  }, []);

  if (drinksData.length === 0) return <Loading />;

  if (dataByIngredients.length === 0) {
    return (
      <div>
        <Header title="Bebidas" searchIcon />
        <RecipeList recipes={data.length ? data : drinksData} type="drink" />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header title="Bebidas" searchIcon />
      <RecipeList recipes={data.length ? data : dataByIngredients.drinks} type="drink" />
      <Footer />
    </div>
  );
};

export default Drinks;
