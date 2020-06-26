import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecommendedDrinksComponent = (props) => {
  const { strDrink, strAlcoholic, strDrinkThumb, idDrink } = props.drinks;
  const { index } = props
  return (
    <div>
      <Link to={`/bebidas/${idDrink}`}>
        <div>
          <img src={strDrinkThumb} alt={strDrink} width="5%"/>
          <h5>{strAlcoholic}</h5>
          <h4 data-testid={`${index}-recomendation-title`}>{strDrink}</h4>
        </div>
      </Link>
    </div>
  )
}

export default RecommendedDrinksComponent;

RecommendedDrinksComponent.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strAlcoholic: PropTypes.string,
  idDrink: PropTypes.string,
}
