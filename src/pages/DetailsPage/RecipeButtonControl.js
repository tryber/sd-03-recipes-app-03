import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipesInProgress/RecipeInProgressProvider';
import './RecipeButtonControl.css';

const RecipeButtonControl = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { id, type, englishType } = recipeData;

  if (
    JSON.parse(localStorage.getItem('doneRecipes')) &&
    JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
  ) return <div data-testid="done-recipe!" className="done-recipe">Receita Feita!</div>;
  if (
    englishType &&
    JSON.parse(localStorage.getItem('inProgressRecipes')) &&
    JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType][id]
    ) {
    return (
      <div>
        <Link className="cont-btn" data-testid="start-recipe-btn" to={`/${type}s/${id}/in-progress`}>
          <button className="cont-btn" type="button">
            Continuar Receita
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link className="recipe-btn" data-testid="start-recipe-btn" to={`/${type}s/${id}/in-progress`}>
        <button className="recipe-btn" type="button">
          Iniciar Receita
        </button>
      </Link>
    </div>
  );
};

export default RecipeButtonControl;

// RecipeButtonControl.propTypes = {
//   recipeData: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// RecipeButtonControl.defaultProps = {

// };
