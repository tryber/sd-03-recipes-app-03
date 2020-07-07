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
  const { instructions, id, type } = recipeData;
  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
        <ContentHeader />
        <Ingredients />
        <h2>Instructions</h2>
        <div className="instructions-container">
          <p data-testid="instructions">{instructions}</p>
        </div>
        {recipeData.video ?
          <div>
            <h2>Video</h2>
            <div data-testid="video">
              <ReactPlayer url={recipeData.video} height={200} width={360} />
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
