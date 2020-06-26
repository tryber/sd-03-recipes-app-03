import React from 'react';
import PropTypes from 'prop-types';
import '../../Food/FoodCard/FoodCard.css';

const DrinkCard = ({ drink: { strDrinkThumb, strDrink }, index }) => (
  <div className="card b-shadow">
    <div data-testid={`${index}-recipe-card`}>
      <img
        className="thumbnail"
        alt={`imagem de um drink: ${strDrink}`}
        data-testid={`${index}-card-img`}
        src={strDrinkThumb}
      />
    </div>
    <span className="card-title" data-testid={`${index}-card-name`}>{strDrink}</span>
  </div>
);

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;
