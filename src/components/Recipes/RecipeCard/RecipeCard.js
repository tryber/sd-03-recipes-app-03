import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import './RecipeCard.css';

import garfo from './garfo.svg';
import beber from './beber.svg';

const renderThumb = (recipe, index, favoriteds, setRedirect) => {
  const { img, name } = recipe;
  return (
    <div data-testid={`${index}-recipe-card`}>
      <button
        data-testid={`${index}-redirect-btn`}
        onClick={() => setRedirect(true)} className="buttonCard"
      >
        <img
          className="thumbnail"
          alt={`imagem de uma refeição: ${name}`}
          data-testid={favoriteds ? `${index}-horizontal-image` : `${index}-card-img`}
          src={img}
        />
      </button>
    </div>
  );
};

const renderCardInfo = (recipe, index, favoriteds, setRedirect) => {
  const { name, type, id } = recipe;
  return (
    <React.Fragment>
      <div className="card-title">
        <button
          data-testid={`${index}-redirect-btn`}
          onClick={() => setRedirect(true)} className="buttonCard"
        >
          <span
            data-testid={favoriteds ? `${index}-horizontal-name` : `${index}-card-name`}
          >{name}
          </span>
        </button>
        <img
          className="recipe-icon"src={type[0] === 'c' ? garfo : beber}
          width="20px" alt="icone de talheres"
        />
      </div>
      {favoriteds &&
        <div>
          <ShareButton index={index} path={`/${type}s/${id}`} />
          <FavoriteButton recipe={recipe} index={index} />
        </div>
      }
    </React.Fragment>
  );
};

const renderSubtitleCard = (recipe, index, favoriteds) => {
  const { area, category, alcoholic } = recipe;
  return (
    <React.Fragment>
      {favoriteds &&
        <span
          className="subtitle-card"
          data-testid={`${index}-horizontal-top-text`}
        >
          {recipe.type[0] === 'c' ? `${area} - ${category}` : alcoholic}
        </span>
      }
    </React.Fragment>
  );
};
const RecipeCard = ({ recipe, index, favoriteds }) => {
  const [redirect, setRedirect] = useState(false);
  const { id, type } = recipe;
  if (redirect) return <Redirect to={{ pathname: `/${type}s/${id}` }} />;
  return (
    <Link className="card b-shadow" to={favoriteds ? '#' : `/${type}s/${id}`}>
      {renderThumb(recipe, index, favoriteds, setRedirect)}
      <div className="infoCard">
        {renderCardInfo(recipe, index, favoriteds, setRedirect)}
        {renderSubtitleCard(recipe, index, favoriteds)}
      </div>
    </Link>
  );
};

RecipeCard.defaultProps = {
  favoriteds: undefined,
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  favoriteds: PropTypes.string,
};


export default RecipeCard;
