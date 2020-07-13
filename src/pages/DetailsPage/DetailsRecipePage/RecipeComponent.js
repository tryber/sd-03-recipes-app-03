import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';
import RecommendedContainerComponent from './RecommendedContainerComponent';
import RecipeButtonControl from '../RecipeButtonControl';
import Ingredients from './Ingredients';
import './RecipeComponent.css';
import ContentHeader from '../../../components/ContentHeader/ContentHeader';

const RecipeComponent = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { instructions } = recipeData;

  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
        <ContentHeader data={recipeData} />
        <Ingredients />
        <h2>Instructions</h2>
        <div className="instructions-container">
          <p data-testid="instructions">{instructions}</p>
        </div>
        {recipeData.video ?
          <div>
            <h2>Video</h2>
            <div>
              <ReactPlayer data-testid="video" url={recipeData.video} height={200} width={'100%'} />
            </div>
          </div>
          :
          null
        }
        <RecommendedContainerComponent />
        <RecipeButtonControl />
      </div>
    </div>
  );
};

export default RecipeComponent;
