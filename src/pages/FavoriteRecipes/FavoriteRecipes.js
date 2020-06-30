import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/index';
import RecipeList from '../../components/Recipes/RecipeList/RecipeList';

const FavoriteRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [])
  return (
    <div>
      <Header title="Receitas Favoritas" searchIcon={false} />
      <RecipeList recipes={recipes} type="favoriteds" />
    </div>
  );
}

export default FavoriteRecipe;
