import React, { useContext } from 'react';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';
import RecommendedCard from './RecommendedCard';
import './RecommendedContainerComponent.css';

const RecommendedContainerComponent = () => {
  const { providerRecommended } = useContext(RecipeInProgressContext);

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
    </div>
  );
};

export default RecommendedContainerComponent;
