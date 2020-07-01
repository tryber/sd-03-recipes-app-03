import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import { fetchIngredientsList } from '../../services/theMealAPI';
import { fetchListDrinksIngredients } from '../../services/theCockTailAPI';
import Header from '../../components/Header/index';

const renderIngredients = async (pathname, setIngredients, setImgUrl) => {
  if (pathname === '/explorar/comidas/ingredientes') {
    const dataMeals = await fetchIngredientsList();
    setIngredients(dataMeals.meals);
    setImgUrl('https://www.themealdb.com/images/ingredients/');
  } else if (pathname === '/explorar/bebidas/ingredientes') {
    const dataDrinks = await fetchListDrinksIngredients();
    setIngredients(dataDrinks.drinks);
    setImgUrl('https://www.thecocktaildb.com/images/ingredients/');
  }
};

function ExplorerByIngredients({ location: { pathname } }) {
  const [ingredients, setIngredients] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    renderIngredients(pathname, setIngredients, setImgUrl);
  }, []);

  if (!ingredients) return <h1>Loading</h1>;

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={false} />
      <div className="explorer-container">
        {ingredients.map((ele, index) => (
          index < 12 &&
          <div
            key={`${ele}-key`}
            data-testid={`${index}-ingredient-card`}
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
        ))}
      </div>
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
