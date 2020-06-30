import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import garfo from './garfo.svg';

const RecipeCard = ({ recipe: { img, name, id, type }, index }) => (
  <Link className="card b-shadow" to={`/${type}/${id}`}>
    <div data-testid={`${index}-recipe-card`}>
      <img
        className="thumbnail"
        alt={`imagem de uma refeição: ${name}`}
        data-testid={`${index}-card-img`}
        src={img}
      />
    </div>
    <div className="card-title">
      <span data-testid={`${index}-card-name`}>{name}</span>
      <img className="recipe-icon"src={garfo} width="20px" alt="icone de talheres" />
    </div>
  </Link>
);

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


export default RecipeCard;
