import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import ShareButton from '../../../components/Share/ShareButton';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import IngredientsCheckbox from './IngredientsCheckbox';

const RecipeInProgressComponent = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { name, category, alcoholic = '', img, instructions } = recipeData;
  const { pathname } = useLocation();

  return (
    <div>
      <img src={img} alt={name} width="15%" />
      <h1>{name}</h1>
      <FavoriteButton recipe={recipeData} />
      <ShareButton path={pathname} />
      <h3>{alcoholic || category}</h3>
      <IngredientsCheckbox />
      <h2>Instructions</h2>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeInProgressComponent;
