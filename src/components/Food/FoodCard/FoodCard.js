import React from 'react';
import PropTypes from 'prop-types';
import './FoodCard.css';

const FoodCard = ({ meal: { strMealThumb, strMeal }, index }) => (
  <div>
    <div data-testid={`${index}-recipe-card`} className="Card">
      <img
        alt={`imagem de uma refeição: ${strMeal}`}
        data-testid={`${index}-card-img`}
        src={strMealThumb} width="100px" height="50px"
      />
    </div>
    <span data-testid={`${index}-card-name`}>{strMeal}</span>
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
