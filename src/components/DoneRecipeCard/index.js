import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ShareButton from '../../components/Share/ShareButton';
import './style.css';

import garfo from './garfo.svg';
import beber from './beber.svg';

const renderThumb = (recipe, index, setRedirect) => {
  const { img, name } = recipe;
  return (
    <React.Fragment>
      <div data-testid={`${index}-recipe-card`}>
        <button onClick={() => setRedirect(true)} className="buttonCard">
          <img
            className="thumbnail"
            alt={`imagem de uma refeição: ${name}`}
            data-testid={`${index}-horizontal-image`}
            src={img}
          />
        </button>
      </div>
    </React.Fragment>
  );
};

const renderCardInfo = (recipe, index, setRedirect) => {
  const { name, type, id } = recipe;
  console.log(index);
  return (
    <React.Fragment>
      <div className="card-title">
        <div>
          <button onClick={() => setRedirect(true)} className="buttonCard">
            <span data-testid={`${index}-horizontal-name`}>{name}</span>
          </button>
        </div>
        <img
          className="recipe-icon" src={type[0] === 'c' ? garfo : beber}
          width="20px" alt="icone de talheres"
        />
      </div>
      <div>
        <ShareButton index={index} path={`/${type}s/${id}`} />
      </div>
    </React.Fragment>
  );
};

const renderTopInformantion = (recipe, index) => {
  const { area, category, alcoholic } = recipe;
  return (
    <React.Fragment>
      <span
        className="subtitle-card"
        data-testid={`${index}-horizontal-top-text`}
      >
        {recipe.type[0] === 'c' ? `${area} - ${category}` : alcoholic}
      </span>
    </React.Fragment>
  );
};

const renderDate = (recipe, index) => {
  const { doneDate } = recipe;
  return (
    <React.Fragment>
      <span
        data-testid={`${index}-horizontal-done-date`}
        className="subtitle-card"
      >
        Feita em: {doneDate}
      </span>
    </React.Fragment>
  );
};

const renderTagName = (recipe, index) => {
  const { tags = [] } = recipe;
  return (
    <React.Fragment>
      {tags.map((tagName) => (
        <span
          key={index}
          data-testid={`${index}-${tagName}-horizontal-tag`}
          className="subtitle-card"
        >
          {`${tagName}`}
        </span>
      ))}
    </React.Fragment>
  );
};

const DoneRecipeCard = ({ recipe, index, doneRecipes }) => {
  const [redirect, setRedirect] = useState(false);
  const { id, type } = recipe;

  if (redirect) return <Redirect to={!doneRecipes ? '#' : `/${type}s/${id}`} />;
  return (
    <Link className="card b-shadow" to={doneRecipes ? '#' : `/${type}s/${id}`}>
      {renderThumb(recipe, index, setRedirect)}
      <div className="infoCard">
        {renderTopInformantion(recipe, index)}
        {renderCardInfo(recipe, index, setRedirect)}
        {renderDate(recipe, index, doneRecipes)}
        {renderTagName(recipe, index)}
      </div>
    </Link>
  );
};

DoneRecipeCard.defaultProps = {
  doneRecipes: undefined,
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  doneRecipes: PropTypes.string,
};

export default DoneRecipeCard;
