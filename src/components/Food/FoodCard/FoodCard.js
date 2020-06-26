import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = ({ meal: { strMealThumb, strMeal, idMeal }, index }) => (
  <Link to={`/comidas/${idMeal}`}>
    <div className="card b-shadow">
      <div data-testid={`${index}-recipe-card`}>
        <img
          className="thumbnail"
          alt={`imagem de uma refeição: ${strMeal}`}
          data-testid={`${index}-card-img`}
          src={strMealThumb}
        />
      </div>
      <span className="card-title"data-testid={`${index}-card-name`}>{strMeal}</span>
    </div>
  </Link>
);

FoodCard.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


export default FoodCard;
