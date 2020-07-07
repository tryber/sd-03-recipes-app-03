import React, { useContext } from 'react';
import { RecipeInProgressContext } from '../../RecipesInProgress/RecipeInProgressProvider';

const Ingredients = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { ingredients = [] } = recipeData;

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(([ingredient, quantity], index) =>
          (<li
            data-testid={`${index}-ingredient-name-and-measure`}
            key={ingredient + quantity}
          >
            {ingredient} - {quantity}
          </li>))}
      </ul>
    </div>
  );
};

export default Ingredients;
