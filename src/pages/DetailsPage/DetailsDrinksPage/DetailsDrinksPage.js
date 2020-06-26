import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DetailsPageContext } from '../DetailsPageProvider';
import DrinksComponent from './DrinksComponent';
import { fetchDrinkById } from '../../../services/theCockTailAPI';

const DetailsDrinksPage = (props) => {
  const {
    isLoading,
    errorMessage,
    apiRequestFunction,
  } = useContext(DetailsPageContext);

  const { match: { params: { id } } } = props;

  useEffect(() => {
    apiRequestFunction(fetchDrinkById, id);
  }, []);


  if (isLoading) return <div>Loading...</div>;
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div><DrinksComponent /></div>;
};

export default DetailsDrinksPage;

DetailsDrinksPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

// DetailsDrinksPage.defaultProps = {
//   id: '',
// }
