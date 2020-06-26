import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css';

function renderButtons(currentRote, nextRote, buttonTitle, testid) {
  return (
    <Link to={`/explorar/${currentRote}/${nextRote}`}>
      <button
        data-testid={`explore-by${testid}`}
      >
        {buttonTitle}
      </button>
    </Link>
  );
}

function ExplorerDrinkOrFoods({ location: { pathname } }) {
  const title = {
    ingredients: 'Por Ingredientes',
    origem: 'Por Local de Origem',
    random: 'Me Surpreenda!',
  };
  if (pathname === '/explorar/comidas') {
    return (
      <div>
        <div >
          {renderButtons('comidas', 'ingredientes', title.ingredients, 'ingredient')}
          {renderButtons('comidas', 'area', title.origem, 'area')}
        </div>
        <Footer />
      </div>
    );
  } return (
    <div>
      <div>
        {renderButtons('bebidas', 'ingredientes', title.ingredients, 'ingredient')}
      </div>
      <Footer />
    </div>
  );
}

ExplorerDrinkOrFoods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorerDrinkOrFoods;
