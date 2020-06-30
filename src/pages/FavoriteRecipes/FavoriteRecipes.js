import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/index';
import FoodList from '../../components/Food/FoodList/FoodList';

const FavoriteRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [])
  return (
    <div>
      <Header title="Receitas Favoritas" searchIcon={false} />
      <FoodList meals={recipes}/>
    </div>
  );
}

export default FavoriteRecipe;
