import { fetchRecipesByIngredient, fetchRecipesByName, fetchRecipesByFirstLetter } from '../../services/searchBarAPI';

const searchButton = async ( history, location, setIsFetching, setData, searchParam, searchName) => {
  const search = {
    ingredients: fetchRecipesByIngredient,
    name: fetchRecipesByName,
    firstLetter: fetchRecipesByFirstLetter,
  };

  if (searchParam === 'firstLetter' && searchName.length !== 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
  const data = await search[searchParam](searchName, (location.pathname === '/comidas' ? 'meal' : 'cocktail'));
  const json = location.pathname === '/comidas' ? data.meals : data.drinks;
  setData(json);
  setIsFetching(false);
  if (json) {
    if (json.length === 1) history.push(`/comidas/${json[0][location.pathname === '/comidas' ? 'idMeal' : 'idDrink']}`);
    if (json.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
};

export default searchButton;
