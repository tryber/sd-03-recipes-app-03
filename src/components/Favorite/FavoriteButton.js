import React, { useState } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteButton = (recipe, type) => {
  const [favorited, setFavorited] = useState(false);
  const [srcIcon, setSrcIcon] = useState(whiteHeartIcon);
  const newRecipe = {
    id: '',
    type,
    area: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  };

  const addToLocalStorage = () => {
    const recipes = localStorage.getItem('favoriteRecipes');
    recipes.push(newRecipe);
    localStorage.setItem('favoriteRecipes', recipes);
    setSrcIcon(whiteHeartIcon);
    return recipe;
  };

  const removeLocalStorage = () => {
    setSrcIcon(blackHeartIcon);
    return newRecipe;
  };

  const handleFavorite = () => {
    favorited ? addToLocalStorage() : removeLocalStorage();
    setFavorited((currentState) => !currentState);
  };

  // console.log(removeLocalStorage, addToLocalStorage, favorited);

  return (
    <button onClick={() => handleFavorite()}>
      <img src={srcIcon} alt="Icone para favoritar receita" />
    </button>
  );
};

export default FavoriteButton;
