import React, { useContext, useState } from 'react';
import { DetailsPageContext } from './DetailsPageProvider';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RecipeButtonControl.css';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

const RecipeButtonControl = (props) => {
  console.log(props);
  const { recipeData: { id, type, name, area, category, alcoholic = '', img, } } = props;
  let { recipeData: { tags = '', } } = props;

  if (tags !== null && tags.includes(',')) tags = tags.split(',');

  const startingRecipe = () => {
    const doneRecipes = {
        id, type, area, category, alcoholicOrNot: alcoholic,
        name, image: img, doneData: today, tags,
    };
    const startedRecipe =  JSON.parse(localStorage.getItem('doneRecipes'));
    if (!startedRecipe) return localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
    return localStorage.setItem('doneRecipes', JSON.stringify([...startedRecipe, doneRecipes]));
  }

  if (
    JSON.parse(localStorage.getItem('doneRecipes')) &&
    JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
  ) {
    return (
      <div>
        <Link to={`/${type}/${id}/in-progress`}>
          <button type="button">
            Continuar Receita
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link className="recipe-btn" data-testid="start-recipe-btn" to={`/${type}/${id}/in-progress`}>
        <button type="button" onClick={startingRecipe}>
          Iniciar Receita
        </button>
      </Link>
    </div>
  );
};

export default RecipeButtonControl;

RecipeButtonControl.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  setInProgress: PropTypes.func,
  inProgress: PropTypes.bool,
};

RecipeButtonControl.defaultProps = {
  type: '',
  id: undefined,
  setInProgress: () => {},
  inProgress: false,
};
