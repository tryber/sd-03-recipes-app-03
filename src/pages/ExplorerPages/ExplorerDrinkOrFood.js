import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css';
import Header from '../../components/Header/index';

function renderButtons(currentRoute, nextRoute, buttonTitle, testid) {
  return (
    <Link to={`/explorar/${currentRoute}/${nextRoute}`}>
      <button
        data-testid={`explore-by-${testid}`}
      >
        {buttonTitle}
      </button>
    </Link>
  );
}

function buttonSuprise() {
  return (
    <button
      data-testid={'explore-surprise'}
    >
    Me Surpreenda!
    </button>
  );
}

function ExplorerDrinkOrFoods({ location: { pathname } }) {
  if (pathname === '/explorar/comidas') {
    return (
      <div>
        <Header title="Explorar Comidas" searchIcon={false} />
        <div className="explorer-container">
          {renderButtons('comidas', 'ingredientes', 'Por Ingredientes', 'ingredient')}
          {renderButtons('comidas', 'area', 'Por Local de Origem', 'area')}
          {buttonSuprise()}
        </div>
        <Footer />
      </div>
    );
  } return (
    <div>
      <Header title="Explorar Bebidas" searchIcon={false} />
      <div className="explorer-container">
        {renderButtons('bebidas', 'ingredientes', 'Por Ingredientes', 'ingredient')}
        {buttonSuprise()}
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
