import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = (props) => {
  // const { recipeData } = useContext(RecipeInProgressContext);
  const [textDecorationState, setTextDecorationState] = useState('');
  const { ingredient, index, quantity, type, id, finishButton } = props;

  const riskIngredient = () => {
    if (textDecorationState === 'line-through') {
      return setTextDecorationState('');
    }
    return setTextDecorationState('line-through');
  };

  const localStorageProgress = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'comidas') {
      const inProgressRecipes = {
        ...inProgress,
        meals: {
          ...inProgress.meals,
          [id]: [...inProgress.meals[id], index],
        },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    const inProgressRecipes = {
      ...inProgress,
      cocktails: {
        ...inProgress.cocktails,
        [id]: [...inProgress.cocktails[id], index],
      },
    };
    return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  return (
    <div>
      <div key={ingredient + quantity}>
        <label style={{ textDecoration: textDecorationState }} htmlFor={ingredient}>
          <input
            data-testid={`${index}-ingredient-step`}
            onClick={() => { riskIngredient(); localStorageProgress(); finishButton(); }}
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

IngredientsCheckbox.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
