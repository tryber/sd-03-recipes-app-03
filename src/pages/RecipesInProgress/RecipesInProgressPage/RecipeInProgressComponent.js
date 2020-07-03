import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import ShareButton from '../../../components/Share/ShareButton';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import IngredientsCheckbox from './IngredientsCheckbox';

const RecipeInProgressComponent = () => {
  const [disabled, setDisabled] = useState(true);
  const { recipeData } = useContext(RecipeInProgressContext);

  const { name, category, alcoholic = '', img,
    instructions, ingredients = [], type, id, englishType,
  } = recipeData;

  const { pathname } = useLocation();

  const finishButton = () => {
    const inProgressType = JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType];
    if (inProgressType[id].length === ingredients.length) return setDisabled(false);
    return setDisabled(true);
  };


  // console.log(recipeData)
  return (
    <div>
      <img data-testid="recipe-photo" src={img} alt={name} width="15%" />
      <h1 data-testid="recipe-title">{name}</h1>
      <FavoriteButton recipe={recipeData} />
      <ShareButton path={pathname} />
      <h3 data-testid="recipe-category">{alcoholic || category}</h3>
      <h2>Ingredients</h2>
      {ingredients.map(([ingredient, quantity], index) =>
        <IngredientsCheckbox
          key={ingredient + quantity}
          ingredient={ingredient}
          quantity={quantity}
          type={type}
          englishType={englishType}
          index={index}
          id={id}
          finishButton={finishButton}
        />,
      )}
      <h2>Instructions</h2>
      <p data-testid="instructions">{instructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={disabled}
      >
          Finalizar Receita
      </button>
    </div>
  );
};

export default RecipeInProgressComponent;
