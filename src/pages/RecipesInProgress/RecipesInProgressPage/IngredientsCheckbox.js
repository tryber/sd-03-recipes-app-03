import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './IngredientsCheckbox.css';

const riskIngredient = (textDecorationState, setTextDecorationState) => {
  if (textDecorationState === 'line-through') {
    return setTextDecorationState('');
  }
  return setTextDecorationState('line-through');
};

const localStorageProgress = (englishType, id, index) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress[englishType][id].some((e) => e === index)) {
    const newArr = [...inProgress[englishType][id]].filter((e) => e !== index);
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

const IngredientsCheckbox = (props) => {
  const [textDecorationState, setTextDecorationState] = useState('');
  const { ingredient, index, quantity, id, finishButton, englishType } = props;
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('inProgressRecipes')) &&
      JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType][id].some((e) => e === index)
    ) {
      finishButton(englishType, id, index);
      setTextDecorationState('line-through');
    }
  }, []);

  const verifyCheck = () => {
    if (
      JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType][id].some((e) => e === index)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="checkbox-container" data-testid={`${index}-ingredient-step`}>
      <div className="checkbox-igredients">
        <label
          data-testid="label"
          style={{ textDecoration: textDecorationState }}
          htmlFor={ingredient}
        >
          <input
            data-testid={`${index}-ingredient-test`}
            type="checkbox"
            checked={verifyCheck()}
            onChange={() => {
              localStorageProgress(englishType, id, index);
              riskIngredient(textDecorationState, setTextDecorationState);
              finishButton();
            }}
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
  id: PropTypes.string.isRequired,
  finishButton: PropTypes.func.isRequired,
  englishType: PropTypes.string.isRequired,
};
