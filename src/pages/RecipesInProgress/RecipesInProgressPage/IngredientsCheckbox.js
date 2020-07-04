import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const riskIngredient = (textDecorationState, setCheckState, setTextDecorationState) => {
  if (textDecorationState === 'line-through') {
    setCheckState(false);
    return setTextDecorationState('');
  }
  setCheckState(true);
  return setTextDecorationState('line-through');
};

const IngredientsCheckbox = (props) => {
  const [textDecorationState, setTextDecorationState] = useState('');
  const [checkState, setCheckState] = useState(false);
  const { ingredient, index, quantity, id, finishButton, englishType } = props;
  useEffect(() => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress[englishType][id] && inProgress[englishType][id].some((e) => e === index)) {
      setCheckState(true);
      finishButton();
      setTextDecorationState('line-through');
    }
  }, []);
  const localStorageProgress = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress[englishType][id].some((e) => e === index)) {
      const newArr = [...inProgress[englishType][id]];
      const elementIndex = newArr.indexOf(index);
      newArr.splice(elementIndex, 1);
      const inProgressRecipes = {
        ...inProgress,
        [englishType]: { ...inProgress[englishType], [id]: newArr },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    const inProgressRecipes = {
      ...inProgress,
      [englishType]: { ...inProgress[englishType], [id]: [...inProgress[englishType][id], index] },
    };
    return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };
  return (
    <div data-testid={`${index}-ingredient-step`}>
      <label style={{ textDecoration: textDecorationState }} htmlFor={ingredient} />
        <input
          type="checkbox"
          defaultChecked={checkState}
          onChange={() => {
            riskIngredient(textDecorationState, setCheckState, setTextDecorationState);
            localStorageProgress();
            finishButton();
          }}
          id={ingredient}
        />
        {ingredient} - {quantity}
    </div>
  );
};

export default IngredientsCheckbox;

IngredientsCheckbox.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  finishButton: PropTypes.func.isRequired,
  englishType: PropTypes.string.isRequired,
};
