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
      <button onClick={() => setRedirect(true)} className="buttonCard">
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
  const { name, type } = recipe;
  return (
    <React.Fragment>
      <span data-testid={`${index}-horizontal-top-text`}>
        {recipe.type[0] === 'c' ? `${recipe.area} - ${recipe.category}` : recipe.alcoholic}
      </span>
      <div className="card-title">
        <button onClick={() => setRedirect(true)} className="buttonCard">
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
    </React.Fragment>
  );
};
const RecipeCard = ({ recipe, index, favoriteds }) => {
  const [redirect, setRedirect] = useState(false);
  const { id, type } = recipe;
  if (redirect) return <Redirect to={!favoriteds ? '#' : `/${type}s/${id}`}/>
  return (
    <Link className="card b-shadow" to={favoriteds ? '#' : `/${type}/${id}`}>
      {renderThumb(recipe, index, favoriteds, setRedirect)}
      <div className="infoCard">
        {renderCardInfo(recipe, index, favoriteds, setRedirect)}
        {favoriteds &&
          <div>
            <ShareButton index={index} path={`/${type}s/${id}`} />
            <FavoriteButton recipe={recipe} index={index} />
          </div>}
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
