import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FoodCard.css';
import garfo from './garfo.svg';

const FoodCard = ({ meal: { strMealThumb, strMeal, idMeal }, index }) => (
  <Link className="card b-shadow" to={`/comidas/${idMeal}`}>
    <div data-testid={`${index}-recipe-card`}>
      <img
        className="thumbnail"
        alt={`imagem de uma refeição: ${strMeal}`}
        data-testid={`${index}-card-img`}
        src={strMealThumb}
      />
    </div>
    <div className="card-title">
      <span data-testid={`${index}-card-name`}>{strMeal}</span>
      <img className="recipe-icon"src={garfo} width="20px" alt="icone de talheres" />
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
