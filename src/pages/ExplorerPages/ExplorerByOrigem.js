import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/index';
import { fetchMealsByCountry, fetchAreasList, fetchAllMeals } from '../../services/theMealAPI';
import garfo from '../../components/Recipes/RecipeCard/garfo.svg';
import Loading from '../../components/Loading/Loading';

const fetchCountryList = async (setCountryList) => {
  const countryList = await fetchAreasList();
  setCountryList(countryList.meals.map(({ strArea }) => strArea));
};

const fetchMeals = async (setMeals, option) => {
  if (option === 'All') {
    const meals = await fetchAllMeals();
    setMeals(meals.meals);
  } else {
    const meals = await fetchMealsByCountry(`${option}`);
    setMeals(meals.meals);
  }
};

function renderCards(meals) {
  return (
    meals && meals.map((e, index) => (
      index < 12 &&
      <Link to={`/comidas/${e.idMeal}`}>
        <div
          className="card-container"
          data-testid={`${index}-recipe-card`}
          key={`${e}`}
        >
          <img
            className="thumbnail"
            src={`${e.strMealThumb}`}
            alt={`${e.strMeal}`}
            data-testid={`${index}-card-img`}
          />
          <span
            className={'card-text'}
            data-testid={`${index}-card-name`}
          >
            {`${e.strMeal}`}
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
     ))
  );
}

function ExplorerByArea() {
  const [countryList, setCountryList] = useState(undefined);
  const [meals, setMeals] = useState(undefined);
  const [option, setOption] = useState('All');

  useEffect(() => {
    fetchCountryList(setCountryList);
  }, []);

  useEffect(() => {
    fetchMeals(setMeals, option);
  }, [option]);

  if (!countryList) return <Loading />;
  return (
    <div>
      <Header title="Explorar Origem" searchIcon />
      <div className="FlexCenter">
        <select
          className="SelectOrigem"
          key="area"
          onChange={(e) => setOption(e.target.value)}
          data-testid="explore-by-area-dropdown"
        >
          <option value="All" data-testid="All-option">All</option>
          {countryList.map((country) => (
            <option key={country} value={country} data-testid={`${country}-option`}>{country}</option>
          ))}
        </select>
      </div>
      <div className="explorer-container">
        {renderCards(meals)}
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerByArea;
