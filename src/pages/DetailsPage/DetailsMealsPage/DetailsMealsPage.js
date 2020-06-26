import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MealsComponent from './MealsComponent';
import { DetailsPageContext } from '../DetailsPageProvider';
import { fetchMealById } from '../../../services/theMealAPI';

const DetailsMealsPage = (props) => {
  const {
    isLoading,
    errorMessage,
    apiRequestFunction,
  } = useContext(DetailsPageContext);

  const { match: { params: { id } }} = props;

  useEffect(() => {
    apiRequestFunction(fetchMealById, id)
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (errorMessage !== '') return <span>Algum Error Ocorreu</span>
  return <div><MealsComponent /></div>
}

export default DetailsMealsPage;

DetailsMealsPage.propTypes = {
  id: PropTypes.string,
}

DetailsMealsPage.defaultProps = {
  id: '',
}
