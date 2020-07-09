import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';
import './FavoriteButton.css';

const recipeObject = (recipe, type) => {
  if (type === 'comida') {
    return {
      id: recipe.id,
      type: 'comida',
      area: recipe.area,
      category: recipe.category,
      alcoholicOrNot: '',
      name: recipe.name,
      image: recipe.img,
    };
  }
  return {
    id: recipe.id,
    type: 'bebida',
    area: '',
    category: recipe.category,
    alcoholicOrNot: recipe.alcoholic,
    name: recipe.name,
    image: recipe.img,
  };
};

const FavoriteButton = ({ recipe, index }) => {
  const [NotFavorited, setNotFavorited] = useState(true);
  const [srcIcon, setSrcIcon] = useState(whiteHeartIcon);
  const { setStorage } = useContext(FoodContext);
  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else {
      const favoriteds = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (favoriteds.some((favorited) => favorited.id === recipe.id)) {
        setNotFavorited(false);
        setSrcIcon(blackHeartIcon);
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
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = recipes.filter((element) => element.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipe));
    setSrcIcon(whiteHeartIcon);
    return null;
  };
  const handleFavorite = () => {
    if (NotFavorited) {
      addToLocalStorage();
    } else {
      removeLocalStorage();
    }
    setStorage(() => JSON.parse(localStorage.getItem('favoriteRecipes')));
    return setNotFavorited((currentState) => !currentState);
  };
  return (
    <button className="transparentBtn" onClick={() => handleFavorite()}>
      <img
        data-testid={
          typeof (index) === 'number' ? `${index}-horizontal-favorite-btn` : 'favorite-btn'
        }
        src={srcIcon} alt="Icone para favoritar receita"
      />
    </button>
  );
};

FavoriteButton.defaultProps = {
  index: undefined,
};

FavoriteButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number,
};

export default FavoriteButton;
