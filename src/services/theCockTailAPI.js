export const fetchDrinks = () => {
  const url12Drinks = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  return fetch(url12Drinks).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
};

const urlCategoriesDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const fetchCategoriesDrinks = () => (
  fetch(urlCategoriesDrinks)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlCategoryDrinksButton = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
export const fetchDrinkByCategoryButton = (category) => (
  fetch(`${urlCategoryDrinksButton}${category}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

export const fetchDrinkById = (id) => {
  const urlDrinkById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(urlDrinkById).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
};

const urlRandomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
export const fetchRandomDrink = () => (
  fetch(urlRandomDrink)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlListDrinksIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
export const fetchListDrinksIngredients = () => (
  fetch(urlListDrinksIngredients)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFindDrinkByIngredients = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const fetchDrinksByIngredient = (ingredient) => (
  fetch(`${urlFindDrinkByIngredients}${ingredient}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);

const urlFindDrinksByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const fetchDrinksByName = (name) => (
  fetch(`${urlFindDrinksByName}${name}`)
    .then((response) => response.json())
    .then((json) => (Promise.ok ? Promise.resolve(json) : Promise.reject(json)))
);
