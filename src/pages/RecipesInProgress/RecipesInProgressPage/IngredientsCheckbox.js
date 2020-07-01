import React, { useContext } from 'react';
import { ingredientsWithQuantity } from '../../../untils/ingredientsWithQuantity';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = () => {
  const { recipeData, recipeData: { ingredients = [] } } = useContext(RecipeInProgressContext);
  console.log(recipeData);
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map(([ingredients, quantity]) => {
        return (
          <div key={ingredients}>
            <label htmlFor={ingredients}>
              <input type="checkbox" id={ingredients} />
              {ingredients} - {quantity}
            </label>
          </div>
        )
      })
      }
    </div>
  );
};

export default IngredientsCheckbox;
