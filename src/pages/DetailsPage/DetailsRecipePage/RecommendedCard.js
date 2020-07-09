import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './RecommendedCard.css';
import garfo from '../../../components/Recipes/RecipeCard/garfo.svg';
import beber from '../../../components/Recipes/RecipeCard/beber.svg';

const RecommendedCard = (props) => {
  const { name, category, img, id, alcoholic } = props.recommended;
  const { index } = props;
  const { pathname } = useLocation();

  const changePageURL = () => {
    if (pathname.includes('/bebidas')) return 'comidas';
    return 'bebidas';
  };

  return (
    <div data-testid={`${index}-recomendation-card`} className="recommended-card">
      <Link to={`/${changePageURL()}/${id}`}>
        <div>
          <img src={img} alt={name} width="100%" />
          <div className="recommended-content">
            <div className="recommended-titles-container">
              <h5>{alcoholic || category}</h5>
              <h4 data-testid={`${index}-recomendation-title`}>{name}</h4>
            </div>
            {pathname.includes('/bebidas') ? (
              <img src={garfo} alt="garfo" className="img-recommended" />
            ) : (
              <img src={beber} alt="garfo" className="img-recommended" />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedCard;

RecommendedCard.propTypes = {
  index: PropTypes.number,
  recommended: PropTypes.objectOf(PropTypes.any).isRequired,
};

RecommendedCard.defaultProps = {
  index: undefined,
};
