import React from 'react';
import ShareButton from '../Share/ShareButton';
import FavoriteButton from '../Favorite/FavoriteButton'
import { RecipeInProgressContext } from '../../pages/';

const ContentHeader = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { name, category, alcoholic = '', img,
    instructions, ingredients = [], type, id, englishType,
  } = recipeData;
  return (
    <div>
      <img data-testid="recipe-photo" src={img} alt={name} width="15%" />
      <h1 data-testid="recipe-title">{name}</h1>
      <FavoriteButton recipe={recipeData} />
      <ShareButton path={pathname} />
      <h3 data-testid="recipe-category">{alcoholic || category}</h3>
    </div>
  );
};

export default ContentHeader;
