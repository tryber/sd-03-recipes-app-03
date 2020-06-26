import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecommendedMealsComponent = (props) => {
  const { strMeal, strCategory, strMealThumb, idMeal } = props.meals;
  const { index } = props
  return (
    <div>
      <Link to={`/comidas/${idMeal}`}>
        <div>
          <img src={strMealThumb} alt={strMeal} width="5%"/>
          <h5>{strCategory}</h5>
          <h4 data-testid={`${index}-recomendation-title`}>{strMeal}</h4>
        </div>
      </Link>
    </div>
  )
}

export default RecommendedMealsComponent;

RecommendedMealsComponent.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strAlcoholic: PropTypes.string,
  idDrink: PropTypes.string,
}
