import { fetchRecipesByIngredient, fetchRecipesByName, fetchRecipesByFirstLetter } from '../../services/searchBarAPI';

const search = {
  ingredients: fetchRecipesByIngredient,
  name: fetchRecipesByName,
  firstLetter: fetchRecipesByFirstLetter,
};

const pushRoute = (history, type, data) => {
  if (type === 'meal' && data.meals.length === 1) {
    history.push({ pathname: `/comidas/${data.meals[0].idMeal}` });
  }
  if (type === 'cocktail' && data.drinks.length === 1) {
    history.push(`/bebidas/${data.drinks[0].idDrink}`);
  }
};

const performSearch = async (
  history,
  type,
  setIsFetching,
  setData,
  searchParam,
  searchName,
) => {
  const data = await search[searchParam](searchName, type);
  if (data.meals || data.drinks) {
    setData(data.meals || data.drinks);
    setIsFetching(false);
  } else {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  pushRoute(history, type, data);
  return false;
};

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
    performSearch(
      history,
      type,
      setIsFetching,
      setData,
      searchParam,
      searchName,
    );
  }
};

export default searchButton;
