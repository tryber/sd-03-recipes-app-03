import ingredientsWithQuantity from '../untils/ingredientsWithQuantity';

const destructureAPI = (data) => {
  let apiType = 'Drink';
  let init = 21;
  let mid = 36;
  let end = 51;
  let type = 'bebida';
  let englishType = 'cocktails';
  if (data.idMeal) {
    apiType = 'Meal';
    init = 9;
    mid = 29;
    end = 49;
    type = 'comida';
    englishType = 'meals';
  }

  const ingredientsValues = Object.values(data).slice(init, mid);
  const ingredientsQuantity = Object.values(data).slice(mid, end);

  const {
    [`str${apiType}`]: name, strCategory: category, [`str${apiType}Thumb`]: img, strYoutube: video,
    strInstructions: instructions, [`id${apiType}`]: id, strArea: area, strTags: tags, strAlcoholic: alcoholic,
  } = data;

  const dataObj = {
    name,
    category,
    alcoholic,
    img,
    video,
    instructions,
    id,
    ingredients: ingredientsWithQuantity(ingredientsValues, ingredientsQuantity),
    area,
    init,
    mid,
    end,
    type,
    englishType,
    tags,
  };

  return dataObj;
};

export default destructureAPI;
