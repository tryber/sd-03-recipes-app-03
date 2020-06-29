import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DetailsPageContext } from '../DetailsPageProvider';
import './RecommendedCard.css';

const RecommendedCard = (props) => {
  const { name, category, img, id } = props.recommended;
  const { index } = props;
  const { pathName } = useContext(DetailsPageContext);
  const changePageURL = () => {
    if (pathName.includes('/bebidas')) return 'comidas';
    return 'bebidas';
  };
  return (
    <div data-testid={`${index}-recomendation-card`} className="recommended-card">
      <Link to={`/${changePageURL()}/${id}`}>
        <div>
          <img src={img} alt={name} width="100%" />
          <h5>{category}</h5>
          <h4 data-testid={`${index}-recomendation-title`}>{name}</h4>
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
