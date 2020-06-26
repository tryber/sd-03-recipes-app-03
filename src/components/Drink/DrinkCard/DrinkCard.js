import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../Food/FoodCard/FoodCard.css';

const DrinkCard = ({ drink: { strDrinkThumb, strDrink, idDrink }, index }) => (
  <Link className="card b-shadow" to={`/bebidas/${idDrink}`}>
    <div>
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
  </Link>
);

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;

