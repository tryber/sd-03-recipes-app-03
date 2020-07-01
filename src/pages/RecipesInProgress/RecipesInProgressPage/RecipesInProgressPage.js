import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import RecipeInProgressComponent from './RecipeInProgressComponent';

const RecipesInProgressPage = (props) => {
  const { isLoading } = props.isLoading;
  // console.log(isLoading)
  if (isLoading) return <Loading />;
  // if (errorMessage !== '') return <span>Algum Error Ocorreu</span>;
  return <div>kkk</div>
  // return <div><RecipeInProgressComponent /></div>;
};

export default RecipesInProgressPage;
