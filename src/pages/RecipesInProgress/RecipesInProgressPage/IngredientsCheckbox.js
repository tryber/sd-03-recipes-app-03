import React, { useContext } from 'react';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = () => {
  const { recipeData, recipeData: { ingredients = [] } } = useContext(RecipeInProgressContext);
  console.log(recipeData);
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map(([ingredient, quantity]) => (
        <div key={ingredient}>
          <label htmlFor={ingredient}>
            <input type="checkbox" id={ingredient} />
            {ingredient} - {quantity}
          </label>
        </div>),
      )}
    </div>
  );
};

export default IngredientsCheckbox;
