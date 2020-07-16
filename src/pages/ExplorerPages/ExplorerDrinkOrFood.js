import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css';
import Header from '../../components/Header/index';
import { fetchRandomMeal } from '../../services/theMealAPI';
import { fetchRandomDrink } from '../../services/theCockTailAPI';

const fetchRandomRecipes = async (pathname, setRandomRecipe) => {
  if (pathname === '/explorar/comidas') {
    const randomRecipe = await fetchRandomMeal();
    const randomId = randomRecipe.meals[0].idMeal;
    setRandomRecipe(randomId);
  } else if (pathname === '/explorar/bebidas') {
    const randomRecipe = await fetchRandomDrink();
    const randomId = randomRecipe.drinks[0].idDrink;
    setRandomRecipe(randomId);
  }
};

function buttonFoodOrDrink(currentRoute, nextRoute, buttonTitle, testid) {
  return (
    <Link to={`/explorar/${currentRoute}/${nextRoute}`}>
      <button
        type="submit"
        className="buttonExplorer"
        data-testid={`explore-by-${testid}`}
      >
        {buttonTitle}
      </button>
    </Link>
  );
}

const buttonSuprise = (pathname, currentRoute, randomRecipe) => {
  if (pathname === '/explorar/comidas') {
    return (
      <Link to={`/${currentRoute}/${randomRecipe}`}>
        <button
          type="submit"
          className="buttonExplorer"
          data-testid={'explore-surprise'}
        >
          Me Surpreenda!
        </button>
      </Link>
    );
  }

  return (
    <Link to={`/${currentRoute}/${randomRecipe}`}>
      <button
        type="submit"
        className="buttonExplorer"
        data-testid={'explore-surprise'}
      >
        Me Surpreenda!
      </button>
    </Link>
  );
};

function ExplorerDrinkOrFoods() {
  const [randomRecipe, setRandomRecipe] = useState('');
  const { pathname } = useLocation();
  useEffect(() => {
    fetchRandomRecipes(pathname, setRandomRecipe);
  }, []);

  if (pathname === '/explorar/comidas') {
    return (
      <div>
        <Header title="Explorar Comidas" searchIcon={false} />
        <div className="explorer-container">
          {buttonFoodOrDrink('comidas', 'ingredientes', 'Por Ingredientes', 'ingredient')}
          {buttonFoodOrDrink('comidas', 'area', 'Por Local de Origem', 'area')}
          {buttonSuprise(pathname, 'comidas', randomRecipe)}
        </div>
        <Footer />
      </div>
    );
  } return (
    <div>
      <Header title="Explorar Bebidas" searchIcon={false} />
      <div className="explorer-container">
        {buttonFoodOrDrink('bebidas', 'ingredientes', 'Por Ingredientes', 'ingredient')}
        {buttonSuprise(pathname, 'bebidas', randomRecipe)}
      </div>
      <Footer />
    </div>
  );
}

// ExplorerDrinkOrFoods.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ExplorerDrinkOrFoods;
