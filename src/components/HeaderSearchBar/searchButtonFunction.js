import { fetchRecipesByIngredient, fetchRecipesByName, fetchRecipesByFirstLetter } from '../../services/searchBarAPI';

const searchButton = async (
    history,
    type,
    setIsFetching,
    setData,
    searchParam,
    searchName,
  ) => {
  const search = {
    ingredients: fetchRecipesByIngredient,
    name: fetchRecipesByName,
    firstLetter: fetchRecipesByFirstLetter,
  };
  if (searchParam === 'firstLetter' && searchName.length !== 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const data = await search[searchParam](searchName, type);
    console.log(data);
    
    setData(data.meals || data.drinks);
    setIsFetching(false);
    if (data.length === 0) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    if (type === 'meal' && data.meals.length === 1) {
      history.push(`/comidas/${data.meals[0].idMeal}`);
    }
    if (type === 'cocktail' && data.drinks.length === 1) {
      history.push(`/bebidas/${data.drinks[0].idDrink}`);
    }
  }
};

export default searchButton;
