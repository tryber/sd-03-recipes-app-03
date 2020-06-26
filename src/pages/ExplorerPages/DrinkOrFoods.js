import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css'


function renderButton(pathname, newRote, title, testid) {
  return (
    <Link className="link" to={`/${pathname}/${newRote}`}>
      <button
        data-testid={`explore-by${testid}`}
      >
        {title}
      </button>
    </Link>
  );
}

function isComidasOrBebidas(pathname) {
  const title = {
    ingredients: 'Por Ingredientes',
    origem: 'Por Local de Origem',
    random: 'Me Surpreenda!',
  };
  if (pathname === '/explorar/comidas') {
    return (
      <div >
        {renderButton(pathname, 'ingredientes', title.ingredients, 'ingredients')}
        {renderButton(pathname, 'area', title.origem, 'area')}
        {renderButton(pathname, '?detalhesAleatoria', title.random, 'surprise')}
      </div>
    );
  } return (
    <div>
      {renderButton(pathname, 'ingredientes', title.ingredients)}
      {renderButton(pathname, '?', title.random)}
    </div>
  );
}

function DrinkOrFoods({ location: { pathname } }) {
  return (
    <div>
      {isComidasOrBebidas(pathname)}
      <Footer />
    </div>
  );
}

DrinkOrFoods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkOrFoods;
