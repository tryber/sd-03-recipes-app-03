export const fetchMeals = () => {
  const url12Meals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(url12Meals).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};

const urlCategoriesMeals = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const fetchCategoriesMeals = () => (
  fetch(urlCategoriesMeals).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

// Buscar Meals por categoria específica

const urlCategoryMealsButton = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
export const fetchCategoryMealsButton = (category) => (
  fetch(`${urlCategoryMealsButton}${category}`).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export const fetchMealById = (id) => {
  const urlMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(urlMealById).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};

const urlAllMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const fetchAllMeals = async () => {
  const response = await fetch(`${urlAllMeal}`);
  return response.json();
};

const urlRandomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const fetchRandomMeal = async () => {
  const response = await fetch(`${urlRandomMeal}`);
  return response.json();
};

const urlAreasList = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const fetchAreasList = async () => {
  const response = await fetch(`${urlAreasList}`);
  return response.json();
};

const urlFilterByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
export const fetchMealsByCountry = async (country) => {
  const response = await fetch(`${urlFilterByArea}${country}`);
  return response.json();
};

const urlListMealsIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const fetchIngredientsList = async () => {
  const response = await fetch(urlListMealsIngredients);
  return response.json();
};

export const fetchByIngredients = async (type, id) => {
  const urlFindByIngredients = `https://www.${type}.com/api/json/v1/1/filter.php?i=${id}`;
  const response = await fetch(urlFindByIngredients);
  return response.json();
};

export const fetchMealsByName = (name) => {
  const urlFindMealsByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(urlFindMealsByName).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};

export const fetchMealsByFirstLetter = (letter) => {
  const urlFindByFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  return fetch(urlFindByFirstLetter).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};
