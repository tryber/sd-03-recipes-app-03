import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import IngredientsCheckbox from './IngredientsCheckbox';
import ContentHeader from '../../../components/ContentHeader/ContentHeader';
import './RecipeInProgressComponent.css';

const RecipeInProgressComponent = () => {
  const [disabled, setDisabled] = useState(true);
  const { recipeData } = useContext(RecipeInProgressContext);
  const { instructions, ingredients = [], type, id, englishType } = recipeData;
  const finishButton = () => {
    const inProgressType = JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType];
    if (inProgressType[id].length === ingredients.length) return setDisabled(false);
    return setDisabled(true);
  };
  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
        <ContentHeader />
        <h2>Ingredients</h2>
        {ingredients.map(([ingredient, quantity], index) =>
          <IngredientsCheckbox
            key={ingredient + quantity}
            ingredient={ingredient}
            quantity={quantity}
            type={type}
            englishType={englishType}
            index={index}
            id={id}
            finishButton={finishButton}
          />,
        )}
        <h2>Instructions</h2>
        <p className="instructions-container" data-testid="instructions">{instructions}</p>
        <Link to="/receitas-feitas">
          <button
            data-testid="finish-recipe-btn"
            type="button"
            disabled={disabled}
          >
              Finalizar Receita
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeInProgressComponent;
