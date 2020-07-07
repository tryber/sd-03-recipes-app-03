import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/index';
import { fetchMealsByCountry, fetchAreasList, fetchAllMeals } from '../../services/theMealAPI';

const fetchCountryList = async (setCountryList) => {
  const countryList = await fetchAreasList();
  setCountryList(countryList.meals.map(({ strArea }) => strArea));
};

const fetchMeals = async (setMeals, option) => {
  if (option === 'All') {
    const meals = await fetchAllMeals();
    setMeals(meals.meals);
    console.log('Meals = ', meals.meals);
  } else {
    const meals = await fetchMealsByCountry(`${option}`);
    setMeals(meals.meals);
  }
};

function renderCards(meals) {
  return (
    meals && meals.map((e, index) => (
      index < 12 &&
      <div
        className="card-container"
        data-testid={`${index}-recipe-card`}
        key={`${e}`}
      >
        <Link to={`/comidas/${e.idMeal}`}>
          <img
            src={`${e.strMealThumb}`}
            alt={`${e.strMeal}`}
            data-testid={`${index}-card-img`}
          />
          <p
            data-testid={`${index}-card-name`}
          >
            {`${e.strMeal}`}
          </p>
        </Link>
      </div>
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

  if (!countryList) return <h1>Loading</h1>;
  return (
    <div>
      <Header title="Explorar Origem" searchIcon />
      <div className="explorer-container">
        <select
          key="area"
          onChange={(e) => setOption(e.target.value)}
          data-testid="explore-by-area-dropdown"
        > 
          <option value="All" data-testid="All-option">All</option>
          {countryList.map((country) => (
            <option key={country} value={country} data-testid={`${country}-option`}>{country}</option>
          ))}
        </select>
        {renderCards(meals)}
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerByArea;
