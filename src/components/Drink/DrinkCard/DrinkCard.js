import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../Food/FoodCard/FoodCard.css';
import beber from './beber.svg';

const DrinkCard = ({ drink, index }) => {
  const { strDrinkThumb, strDrink, idDrink } = drink;

  return (
    <Link className="card b-shadow" to={`/bebidas/${idDrink}`}>
      <div data-testid={`${index}-recipe-card`}>
        <img
          className="thumbnail"
          alt={`imagem de um drink: ${strDrink}`}
          data-testid={`${index}-card-img`}
          src={strDrinkThumb}
        />
      </div>
      <div className="card-title">
        <span data-testid={`${index}-card-name`}>{strDrink}</span>
        <img className="recipe-icon" src={beber} alt="icone de uma taça" width="20px"/>
      </div>
    </Link>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;

