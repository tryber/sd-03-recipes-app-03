import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../components/Loading/Loading';
import RecipeInProgressComponent from './RecipeInProgressComponent';

const RecipesInProgressPage = (props) => {
  const { isLoading, errorMessage } = props.renderControl;

  if (isLoading) return <Loading />;
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div><RecipeInProgressComponent /></div>;
};

export default RecipesInProgressPage;

RecipesInProgressPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
