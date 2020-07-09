import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import { fetchIngredientsList } from '../../services/theMealAPI';
import { fetchListDrinksIngredients } from '../../services/theCockTailAPI';
import Header from '../../components/Header/index';
import Loading from '../../components/Loading/Loading';

const fetchIngredients = async (pathname, setIngredients, setImgUrl, setNewRoute) => {
  if (pathname === '/explorar/comidas/ingredientes') {
    const dataMeals = await fetchIngredientsList();
    setIngredients(dataMeals.meals);
    setImgUrl('https://www.themealdb.com/images/ingredients/');
    const newRoute = '/comidas';
    setNewRoute(newRoute);
  } else if (pathname === '/explorar/bebidas/ingredientes') {
    const dataDrinks = await fetchListDrinksIngredients();
    setIngredients(dataDrinks.drinks);
    setImgUrl('https://www.thecocktaildb.com/images/ingredients/');
    const newRoute = '/bebidas';
    setNewRoute(newRoute);
  }
};

function renderCards(ingredients, imgUrl, newRoute) {
  return (
    <div className="explorer-container">
      {ingredients.map((ele, index) => (
        index < 12 &&
        <Link to={`${newRoute}`}>
          <div
            key={`${ele}`}
            data-testid={`${index}-ingredient-card`}
            className="card-container"
          >
            <img
              data-testid={`${index}-card-img`}
              src={`${imgUrl}${ele.strIngredient || ele.strIngredient1}-Small.png`}
              alt={`${ele.strIngredient || ele.strIngredient1}`}
            />
            <p data-testid={`${index}-card-name`}>
              {ele.strIngredient || ele.strIngredient1}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ExplorerByIngredients({ location: { pathname } }) {
  const [ingredients, setIngredients] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    fetchIngredients(pathname, setIngredients, setImgUrl, setNewRoute);
  }, []);

  if (!ingredients) return <Loading />;

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={false} />
      {renderCards(ingredients, imgUrl, newRoute)}
      <Footer />
    </div>
  );
}

ExplorerByIngredients.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorerByIngredients;
