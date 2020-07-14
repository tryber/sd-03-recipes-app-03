import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../Share/ShareButton';
import FavoriteButton from '../Favorite/FavoriteButton';
import './ContentHeader.css';

const ContentHeader = ({ data }) => {
  const { name, category, alcoholic = '', img, type, id } = data;

  return (
    <div>
      <img className="food-img" data-testid="recipe-photo" src={img} alt={name} width="20%" />
      <div className="details-meals-header">
        <div className="details-meals-titles">
          <h1 data-testid="recipe-title">{name}</h1>
          <p data-testid="recipe-category">{alcoholic || category}</p>
        </div>
        <div className="fav-share-button">
          <ShareButton path={`/${type}s/${id}`} />
          <FavoriteButton recipe={data} />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

ContentHeader.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
