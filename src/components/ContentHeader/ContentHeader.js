import React, { useContext } from 'react';
import ShareButton from '../Share/ShareButton';
import FavoriteButton from '../Favorite/FavoriteButton';
import { RecipeInProgressContext } from '../../pages/RecipesInProgress/RecipeInProgressProvider';
import './ContentHeader.css';

const ContentHeader = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { name, category, alcoholic = '', img, type, id } = recipeData;
  return (
    <div>
      <img className="food-img" data-testid="recipe-photo" src={img} alt={name} width="20%" />
      <div className="details-meals-header">
        <div className="details-meals-titles">
          <h1 data-testid="recipe-title">{name}</h1>
          <p data-testid="recipe-category">{alcoholic || category}</p>
        </div>
        <div className="fav-share-button">
          <ShareButton path={`/${type}/${id}`} />
          <FavoriteButton recipe={recipeData} />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
