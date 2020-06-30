import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedContainerComponent from './RecommendedContainerComponent';
import RecipeButtonControl from '../RecipeButtonControl';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import './RecipeComponent.css';
import Ingredients from './Ingredients';

const RecipeComponent = (props) => {
  const [inProgress, setInProgress] = useState(false);
  const { data } = props;
  const { name, category, img, instructions, id, type, alcoholic } = data;
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
            <ShareButton />
            <FavoriteButton recipe={data} />
          </div>
        </div>
        <Ingredients data={data} />
        <h2>Instructions</h2>
        <div className="instructions-container">
          <p data-testid="instructions">{instructions}</p>
        </div>
        {data.video ?
          <div>
            <h2>Video</h2>
            <div data-testid="video">
              <ReactPlayer url={data.video} height={200} width={400} />
            </div>
          </div>
          :
          null
        }
        <RecommendedContainerComponent />
        <RecipeButtonControl
          type={type}
          id={id}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      </div>
    </div>
  );
};

export default RecipeComponent;

RecipeComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
