import React from 'react';
import PropTypes from 'prop-types';
import RecipeComponent from './RecipeComponent';
import Loading from '../../../components/Loading/Loading';

const DetailsRecipesPage = (props) => {
  const { isLoading } = props.renderControl;

  if (isLoading) return <Loading />;
  return <div><RecipeComponent /></div>;
};

export default DetailsRecipesPage;

DetailsRecipesPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
