import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../components/Loading/Loading';
import RecipeInProgressComponent from './RecipeInProgressComponent';

const RecipesInProgressPage = (props) => {
  const { isLoading } = props.renderControl;

  if (isLoading) return <Loading />;
  // if (errorMessage) return <div data-testid="error-message">Algum erro ocorreu!</div>
  return <div><RecipeInProgressComponent /></div>;
};

export default RecipesInProgressPage;

RecipesInProgressPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
