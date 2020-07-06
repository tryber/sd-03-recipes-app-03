import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';
import RecommendedContainerComponent from './RecommendedContainerComponent';
import RecipeButtonControl from '../RecipeButtonControl';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import Ingredients from './Ingredients';
import './RecipeComponent.css';

const RecipeComponent = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { name, category, img, instructions, id, type, alcoholic } = recipeData;
  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
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
        <Ingredients />
        <h2>Instructions</h2>
        <div className="instructions-container">
          <p data-testid="instructions">{instructions}</p>
        </div>
        {recipeData.video ?
          <div>
            <h2>Video</h2>
            <div data-testid="video">
              <ReactPlayer url={recipeData.video} height={200} width={400} />
            </div>
          </div>
          :
          null
        }
        <RecommendedContainerComponent />
        <RecipeButtonControl type={type} id={id} recipeData={recipeData} />
      </div>
    </div>
  );
};

export default RecipeComponent;
