import { fetchRecipesByIngredient, fetchRecipesByName, fetchRecipesByFirstLetter } from '../../services/searchBarAPI';

const search = {
  ingredients: fetchRecipesByIngredient,
  name: fetchRecipesByName,
  firstLetter: fetchRecipesByFirstLetter,
};

const pushRoute = (history, type, data) => {
  if (type === 'meal' && data.meals.length === 1) {
    history.push(`/comidas/${data.meals[0].idMeal}`);
  }
  if (type === 'cocktail' && data.drinks.length === 1) {
    history.push(`/bebidas/${data.drinks[0].idDrink}`);
  }
}

const searchButton = async (
    history,
    type,
    setIsFetching,
    setData,
    searchParam,
    searchName,
  ) => {
  if (searchParam === 'firstLetter' && searchName.length !== 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const data = await search[searchParam](searchName, type);
    setData(data.meals || data.drinks);
    setIsFetching(false);
    if (data.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    pushRoute(history, type, data);
  }
};

export default searchButton;
