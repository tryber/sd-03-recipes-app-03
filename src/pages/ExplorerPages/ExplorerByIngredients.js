import React from 'react';
import PropTypes from 'prop-types';
import './Explorer.css';

function ExplorerByIngredients({ location: { pathname } }) {
  if (pathname === '/explorar/comidas/ingredientes') {
    return (
      <div>
        Fetch Ingredientes de comida
      </div>
    );
  }
  return (
    <div>
      Fetch Ingredientes de bebida
    </div>
  );
}

ExplorerByIngredients.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorerByIngredients;
