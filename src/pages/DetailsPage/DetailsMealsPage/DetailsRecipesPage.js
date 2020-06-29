import React from 'react';
import PropTypes from 'prop-types';
import MealsComponent from './MealsComponent';

const destructureMeal = (data) => {
  const {
    strMeal: name, strCategory: category, strMealThumb: img, strYoutube: video,
    strInstructions: instructions, idMeal: id,
  } = data;
  const dataObj = {
    name, category, img, video, instructions, id, init: 9, mid: 29, end: 49, type: 'comidas',
  };
  return dataObj;
};

const destructureDrinks = (data) => {
  const {
    strDrink: name, strAlcoholic: category, strDrinkThumb: img,
    strInstructions: instructions, idDrink: id,
  } = data;
  const dataObj = {
    name, category, img, instructions, id, init: 21, mid: 36, end: 51, type: 'bebidas',
  };
  return dataObj;
};

const DetailsRecipesPage = (props) => {
  const { isLoading, errorMessage, data } = props.renderControl;
  const dataDestructure = (dataType) => (
    dataType.idMeal ? destructureMeal(data) : destructureDrinks(data)
  );
  if (isLoading) return <div>Loading...</div>;
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div><MealsComponent data={dataDestructure(data)} /></div>;
};

export default DetailsRecipesPage;

DetailsRecipesPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
