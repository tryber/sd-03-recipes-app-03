import React from 'react';
import PropTypes from 'prop-types';
import './FoodCard.css';

const FoodCard = ({ meal: { strMealThumb, strMeal }, index }) => (
  <div className="card b-shadow">
    <div data-testid={`${index}-recipe-card`} className="card-image">
      <img
        className="thumbnail"
        alt={`imagem de uma refeição: ${strMeal}`}
        data-testid={`${index}-card-img`}
        src={strMealThumb}
      />
    </div>
    <span className="card-title"data-testid={`${index}-card-name`}>{strMeal}</span>
  </div>
);

FoodCard.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


export default FoodCard;
