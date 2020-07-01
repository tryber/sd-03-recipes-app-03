import React from 'react';
import PropTypes from 'prop-types';
import RecipeComponent from './RecipeComponent';
import Loading from '../../../components/Loading/Loading';
import destructureAPI from '../../../untils/destructureObject';

const DetailsRecipesPage = (props) => {
  const { isLoading, errorMessage, data } = props.renderControl;

  if (isLoading) return <Loading />;
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div><RecipeComponent data={destructureAPI(data)} /></div>;
};

export default DetailsRecipesPage;

DetailsRecipesPage.propTypes = {
  renderControl: PropTypes.objectOf(PropTypes.any).isRequired,
};
