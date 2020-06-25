const url12Meals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const fetchMeals = (quantity) => (
  fetch(`${url12Meals}${quantity}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlCategoriesMeals = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const fetchCategoriesMeals = () => (
  fetch(urlCategoriesMeals)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

//Buscar Meals por categoria específica
const urlCategoryMealsButton = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
export const fetchCategoryMealsButton = (category) => (
  fetch(`${urlCategoryMealsButton}${category}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlMealById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const fetchMealById = (id) => (
  fetch(`${urlMealById}${id}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlRandomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const fetchRandomMeal = () => (
  fetch(urlRandomMeal)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlAreasList = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const fetchAreasList = () => (
  fetch(urlAreasList)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFilterByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
export const fetchMealsByCountry = (country) => (
  fetch(`${urlFilterByArea}${country}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlListMealsIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const fetchIngredientsList = () => (
  fetch(urlListMealsIngredients)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFindMealsByIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
export const fetchMealsByIngredients = (ingredient) => (
  fetch(`${urlFindMealsByIngredients}${ingredient}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFindMealsByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const fetchMealsByName = (name) => (
  fetch(`${urlFindMealsByName}${name}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFindByFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
export const fetchMealsByFirstLetter = (letter) => (
  fetch(`${urlFindByFirstLetter}${letter}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);
