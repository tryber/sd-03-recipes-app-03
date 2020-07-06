import React, { useContext } from 'react';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';
import RecommendedCard from './RecommendedCard';
import './RecommendedContainerComponent.css';

const RecommendedContainerComponent = () => {
  const { providerRecommended } = useContext(RecipeInProgressContext);
  console.log(providerRecommended)

  return (
    <div>
      <h2>Recomendadas</h2>
      <div className="recommended-container">
        {providerRecommended.map((recommended, index) =>
          <RecommendedCard
            key={recommended.id}
            recommended={recommended}
            index={index}
          />,
        )}
      </div>
      {/* <a className="prev" onClick={setIndexFunction}>&#10094;</a>
      <a className="next" onClick={setIndexFunction}>&#10095;</a> */}
      {/* <div>
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div> */}
    </div>
  );
};

export default RecommendedContainerComponent;
