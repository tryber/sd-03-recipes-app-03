const url_12meals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const fetchMeals = (quantity) => {
  return fetch(`${url_12meals}${quantity}`)
    .then((response) => response.json())
    .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
};

const urlCategoriesMeals = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const fetchCategoriesMeals = () => {
  return fetch(urlCategoriesMeals)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlCategoryMealsButton = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
export const fetchMealsByCategory = (category) => {
  return fetch(`${urlCategoryMealsButton}${category}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlMealById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const fetchMealById = (id) => {
  return fetch(`${urlMealById}${id}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlRandomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const fetchRandomMeal = () => {
  return fetch(urlRandomMeal)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlAreasList = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const fetchAreasList = () => {
  return fetch(urlAreasList)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFilterByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
export const fetchMealsByCategory = (country) => {
  return fetch(`${urlFilterByArea}${country}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlListMealsIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const fetchMealsByCategory = () => {
  return fetch(urlListMealsIngredients)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFindMealsByIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
export const fetchMealsByCategory = (ingredient) => {
  return fetch(`${urlFindMealsByIngredients}${ingredient}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFindMealsByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export const fetchMealsByName = (name) => {
  return fetch(`${urlFindMealsByName}${name}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFindByFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
export const fetchMealsByFirstLetter = (letter) => {
  return fetch(`${urlFindByFirstLetter}${letter}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}
