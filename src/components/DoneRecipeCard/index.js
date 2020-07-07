import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ShareButton from '../../components/Share/ShareButton';
import './style.css';

import garfo from './garfo.svg';
import beber from './beber.svg';

const renderThumb = (recipe, index, doneRecipes, setRedirect) => {
  const { img, name } = recipe;
  return (
    <div data-testid={`${index}-recipe-card`}>
      <button onClick={() => setRedirect(true)} className="buttonCard">
        <img
          className="thumbnail"
          alt={`imagem de uma refeição: ${name}`}
          data-testid={doneRecipes ? `${index}-horizontal-image` : `${index}-card-img`}
          src={img}
        />
      </button>
    </div>
  );
};

const renderCardInfo = (recipe, index, doneRecipes, setRedirect) => {
  const { name, type, id } = recipe;
  return (
    <React.Fragment>
      <div className="card-title">
        <button onClick={() => setRedirect(true)} className="buttonCard">
          <span
            data-testid={doneRecipes ? `${index}-horizontal-name` : `${index}-card-name`}
          >{name}
          </span>
        </button>
        <img
          className="recipe-icon"src={type[0] === 'c' ? garfo : beber}
          width="20px" alt="icone de talheres"
        />
      </div>
      {doneRecipes &&
        <div>
          <ShareButton index={index} path={`/${type}/${id}`} />
        </div>
      }
    </React.Fragment>
  );
};

const renderTopInformantion = (recipe, index, doneRecipes) => {
  const { area, category, alcoholic } = recipe;
  return (
    <React.Fragment>
      {doneRecipes &&
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

const renderDate = (recipe, index, doneRecipes) => {
  const { doneData } = recipe;
  return (
    <React.Fragment>
      {doneRecipes &&
        <span
          className="subtitle-card"
          data-testid={`${index}-horizontal-top-text`}
        >
          {doneData}
        </span>
      }
    </React.Fragment>
  );
};

const renderTagName = (recipe, index) => {
  const { tags } = recipe;
    if (tags.length > 1) {
      return (
        <React.Fragment>
          {[tags].map(tag => (
            <span
              key={index}
              className="subtitle-card"
              data-testid={`${index}-horizontal-top-text`}
            >
              {`${tag}`}
            </span>
          ))}
        </React.Fragment>
      );
    }
};

const DoneRecipeCard = ({ recipe, index, doneRecipes }) => {
  const [redirect, setRedirect] = useState(false);
  const { id, type } = recipe;
  if (redirect) return <Redirect to={!doneRecipes ? '#' : `/${type}/${id}`} />;
  return (
    <Link className="card b-shadow" to={doneRecipes ? '#' : `/${type}/${id}`}>
      {renderThumb(recipe, index, doneRecipes, setRedirect)}
      <div className="infoCard">
        {renderTopInformantion(recipe, index, doneRecipes)}
        {renderCardInfo(recipe, index, doneRecipes, setRedirect)}
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
