import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FoodContext from '../FoodMainPage/Context/FoodContext';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import { fetchIngredientsList, fetchByIngredients } from '../../services/theMealAPI';
import { fetchListDrinksIngredients } from '../../services/theCockTailAPI';
import Header from '../../components/Header/index';
<<<<<<< HEAD
=======
import garfo from '../../components/Recipes/RecipeCard/garfo.svg';
>>>>>>> 87cf3f710e10e1b2c85c72c3d5f4d77e48bfa6c7
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

const handlerFetchIngredients = async (ingredient, lastRoute, setDataByIngredients) => {
  if (lastRoute === '/comidas') {
    const type = 'themealdb';
    const dataIngredients = await fetchByIngredients(type, ingredient);
    setDataByIngredients(dataIngredients);
  } else {
    const type = 'thecocktaildb';
    const dataIngredients = await fetchByIngredients(type, ingredient);
    setDataByIngredients(dataIngredients);
  }
};

function renderCards(ingredients, imgUrl, newRoute, setDataByIngredients) {
  console.log('INGREDIENTS ', ingredients);
  return (
    <div className="explorer-container">
      {ingredients.map((ele, index) => (
        index < 12 &&
        <Link to={`${newRoute}`}>
          <button
            key={`${ele}-k`}
            type="submit"
            data-testid={`${index}-ingredient-card`}
            className="card-container"
            onClick={() => handlerFetchIngredients(ele.strIngredient ||
              ele.strIngredient1, newRoute, setDataByIngredients)}
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
          </button>
        </Link>
      ))}
    </div>
  );
}

function ExplorerByIngredients({ location: { pathname } }) {
  const [ingredients, setIngredients] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const { dataByIngredients, setDataByIngredients } = useContext(FoodContext);

  useEffect(() => {
    fetchIngredients(pathname, setIngredients, setImgUrl, setNewRoute);
  }, []);

  if (!ingredients) return <Loading />;

  console.log('oqe tem', dataByIngredients);
  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={false} />
      {renderCards(ingredients, imgUrl, newRoute, setDataByIngredients)}
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
