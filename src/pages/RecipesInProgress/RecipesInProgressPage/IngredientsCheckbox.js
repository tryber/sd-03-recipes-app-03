import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';

const IngredientsCheckbox = (props) => {
  const [textDecorationState, setTextDecorationState] = useState('');
  const { ingredient, index, quantity, type, id } = props;


  const riskIngredient = () => {
    if (textDecorationState === 'line-through') {
      return setTextDecorationState('')
    }
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

IngredientsCheckbox.propTypes = {
  ingredient: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
