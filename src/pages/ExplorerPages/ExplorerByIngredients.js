import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import { fetchIngredientsList, fetchByIngredients } from '../../services/theMealAPI';
import { fetchListDrinksIngredients } from '../../services/theCockTailAPI';
import Header from '../../components/Header/index';
import garfo from '../../components/Recipes/RecipeCard/garfo.svg';
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

const handle = async (ingredient, lastRoute, setDataBy) => {
  if (lastRoute === '/comidas') {
    const type = 'themealdb';
    const dataIngredients = await fetchByIngredients(type, ingredient);
    setDataBy(dataIngredients);
  } else {
    const type = 'thecocktaildb';
    const dataIngredients = await fetchByIngredients(type, ingredient);
    setDataBy(dataIngredients);
  }
};

function renderCards(ingredients, imgUrl, newRoute, setDataBy) {
  console.log('INGREDIENTS ', ingredients);
  return (
    <div className="explorer-container">
      {ingredients.map((ele, index) => (
        index < 12 &&
        <Link to={`${newRoute}`}>
          <div
            key={`${ele}-k`}
            data-testid={`${index}-ingredient-card`}
            className="card-container"
            onClick={() => handle(ele.strIngredient ||
              ele.strIngredient1, newRoute, setDataBy)}
            onKeyDown={() => handle(ele.strIngredient ||
              ele.strIngredient1, newRoute, setDataBy)}
            >
            <img
              className="thumbnail"
              data-testid={`${index}-card-img`}
              src={`${imgUrl}${ele.strIngredient || ele.strIngredient1}-Small.png`}
              alt={`${ele.strIngredient || ele.strIngredient1}`}
            />
            <span data-testid={`${index}-card-name`} className={'card-text'}>
              {ele.strIngredient || ele.strIngredient1}
            </span>
            <div>
              <img
                className="recipe-iconTwo"
                src={garfo}
                alt={'garfo'}
              />
            </div>
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
  const { dataByIngredients, setDataBy } = useContext(FoodContext);

  useEffect(() => {
    fetchIngredients(pathname, setIngredients, setImgUrl, setNewRoute);
  }, []);

  if (!ingredients) return <Loading />;

  console.log('oqe tem', dataByIngredients);
  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={false} />
      {renderCards(ingredients, imgUrl, newRoute, setDataBy)}
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
