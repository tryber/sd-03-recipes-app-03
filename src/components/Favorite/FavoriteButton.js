import React, { useState, useEffect } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const recipeObject = (recipe, type) => {
  if (type === 'comidas') {
    return {
      id: recipe.id,
      type: 'comida',
      area: recipe.area,
      category: recipe.category,
      alcoholicOrNot: '',
      name: recipe.name,
      image: recipe.img,
    };
  } else {
    return {
      id: recipe.id,
      type: 'bebida',
      area: '',
      category: recipe.category,
      alcoholicOrNot: recipe.alcoholic,
      name: recipe.name,
      image: recipe.img,
    };
  }
}

const FavoriteButton = ({ recipe }) => {
  const [NotFavorited, setNotFavorited] = useState(true);
  const [srcIcon, setSrcIcon] = useState(whiteHeartIcon);
  useEffect(() => {
    if(!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else {
      const favoriteds = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if(favoriteds.some((favorited) => favorited.id === recipe.id)) {
        setNotFavorited(false);
        setSrcIcon(blackHeartIcon)
      }
    }
  }, []);

  const addToLocalStorage = () => {
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = recipes.concat(recipeObject(recipe, recipe.type));
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipe));
    setSrcIcon(blackHeartIcon);
    return null;
  };

  const removeLocalStorage = () => {
    let recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = recipes.filter((element) => element.id !== recipe.id);
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
