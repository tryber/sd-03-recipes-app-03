import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import './RecipeCard.css';
import garfo from './garfo.svg';
import beber from './beber.svg';

const RecipeCard = ({ recipe, index, favoriteds }) => {
  const { img, name, id, type } = recipe;
  return (
    <Link className={`card b-shadow`} to={favoriteds ? '#' : `/${type}/${id}`}>
      <div data-testid={`${index}-recipe-card`}>
        <Link to={!favoriteds ? '#' : `/${type}s/${id}`}>
        <img
          className="thumbnail"
          alt={`imagem de uma refeição: ${name}`}
          data-testid={favoriteds ? `${index}-horizontal-image` : `${index}-card-img`}
          src={img}
        />
        </Link>
      </div>
      <div className="infoCard">
        <span
          data-testid={`${index}-horizontal-top-text`}
        >
          {recipe.type[0] === 'c' ? `${recipe.area} - ${recipe.category}` : recipe.alcoholic}
        </span>
        <div className="card-title">
          <Link to={!favoriteds ? '#' : `/${type}s/${id}`}>
            <span
              data-testid={favoriteds ? `${index}-horizontal-name` : `${index}-card-name`}>{name}
            </span>
            </Link>
          <img
            className="recipe-icon"src={type[0] === 'c' ? garfo : beber }
            width="20px" alt="icone de talheres"
          />
        </div>
        {favoriteds &&
          <div>
            <ShareButton index={index} path={`/${type}s/${id}`}/>
            <FavoriteButton recipe={recipe} index={index} />
          </div>}
        <span></span>
      </div>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  favoriteds: PropTypes.string.isRequired,
};


export default RecipeCard;
