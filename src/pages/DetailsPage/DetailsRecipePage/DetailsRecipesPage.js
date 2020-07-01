import React from 'react';
import PropTypes from 'prop-types';
import RecipeComponent from './RecipeComponent';
import { destructureMeal, destructureDrinks } from '../../../untils/destructureObject';

const DetailsRecipesPage = (props) => {
  const { isLoading, errorMessage, data } = props.renderControl;
  const dataDestructure = (dataType) => (
    dataType.idMeal ? destructureMeal(data) : destructureDrinks(data)
  );

  if (isLoading) return <div>Loading...</div>;
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div><RecipeComponent data={dataDestructure(data)} /></div>;
};

export default DetailsRecipesPage;

DetailsRecipesPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
