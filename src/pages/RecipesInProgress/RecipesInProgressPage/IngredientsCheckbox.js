import React, { useState } from 'react';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = (props) => {
  const [textDecorationState, setTextDecorationState] = useState('');
  const { ingredient, index, quantity, type, id } = props;

  const riskIngredient = () => {
    if (type === 'comidas') {
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
      console.log(inProgressRecipes.meals[id])
      if (inProgressRecipes.meals[id]) {
        console.log('kkk')
        inProgressRecipes.meals.id.push(ingredient[0])
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes))
      }
      return console.log('kkk')
    }


    if (textDecorationState === 'line-through') {

      return setTextDecorationState('')
    }
    // const startedRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
    // if (!startedRecipe) return localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
    // return localStorage.setItem('doneRecipes', JSON.stringify([...startedRecipe, doneRecipes]));
    return setTextDecorationState('line-through')
  }

  return (
    <div>
      <div key={ingredient + quantity}>
        <label style={{textDecoration: textDecorationState }} htmlFor={ingredient}>
          <input
            data-testid={`${index}-ingredient-step`}
            onClick={riskIngredient}
            type="checkbox"
            id={ingredient}
          />
          {ingredient} - {quantity}
        </label>
      </div>
    </div>
  );
};

export default IngredientsCheckbox;
