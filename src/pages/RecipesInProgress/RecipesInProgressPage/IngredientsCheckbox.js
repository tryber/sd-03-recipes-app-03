import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = (props) => {
  const [textDecorationState, setTextDecorationState] = useState('');
  const { ingredient, index, quantity, id, finishButton, englishType } = props;
  const riskIngredient = () => {
    if (textDecorationState === 'line-through') {
      return setTextDecorationState('');
    }
    return setTextDecorationState('line-through');
  };
  const localStorageProgress = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress[englishType][id].some((e) => e === index)) {
      const newArr = [...inProgress[englishType][id]];
      const elementIndex = newArr.indexOf(index);
      newArr.splice(elementIndex, 1);
      const inProgressRecipes = {
        ...inProgress,
        [englishType]: {
          ...inProgress[englishType],
          [id]: newArr,
        },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    const inProgressRecipes = {
      ...inProgress,
      [englishType]: {
        ...inProgress[englishType],
        [id]: [...inProgress[englishType][id], index],
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
  finishButton: PropTypes.func.isRequired,
  englishType: PropTypes.string.isRequired,
};
