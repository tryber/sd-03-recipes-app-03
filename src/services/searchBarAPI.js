export const fetchRecipesByIngredient = (ingredient, type) => {
  const urlFindRecipesByIngredient = `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(urlFindRecipesByIngredient).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};

export const fetchRecipesByName = (name, type) => {
  const urlFindRecipesByName = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(urlFindRecipesByName).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};

export const fetchRecipesByFirstLetter = (letter, type) => {
  const urlFindByFirstLetter = `https://www.the${type}db.com/api/json/v1/1/search.php?f=${letter}`;
  return fetch(urlFindByFirstLetter).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
};
