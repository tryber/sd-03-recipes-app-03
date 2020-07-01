import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header/index';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';

const FavoriteRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const { storage } = useContext(FoodContext);
  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [storage]);
  return (
    <div>
      <Header title="Receitas Favoritas" searchIcon={false} />
      <RecipeList recipes={recipes} type="favoriteds" />
    </div>
  );
};

export default FavoriteRecipe;
