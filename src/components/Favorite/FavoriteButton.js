import React, { useState, useEffect } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const recipeObject = (recipe, type) => {
  if (type === 'meal') {
    return {
      id: recipe.idMeal,
      type,
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };
  } else {
    return {
      id: recipe.idDrink,
      type,
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
  }
}

const FavoriteButton = ({ recipe, type }) => {
  const [NotFavorited, setNotFavorited] = useState(true);
  const [srcIcon, setSrcIcon] = useState(whiteHeartIcon);
  useEffect(() => {
    if(!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  const addToLocalStorage = () => {
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = recipes.concat(recipeObject(recipe, type));
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipe));
    setSrcIcon(blackHeartIcon);
    return null;
  };

  const removeLocalStorage = () => {
    let recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = recipes.filter((element) => element.id !== recipe.idMeal);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipe));
    setSrcIcon(whiteHeartIcon);
    return null;
  };

  const handleFavorite = () => {
    NotFavorited ? addToLocalStorage() : removeLocalStorage();
    setNotFavorited((currentState) => !currentState);
    return null;
  };

  return (
      <img
        onClick={() => handleFavorite()}
        data-testid="favorite-btn"
        src={srcIcon} alt="Icone para favoritar receita"
      />
  );
};

export default FavoriteButton;
