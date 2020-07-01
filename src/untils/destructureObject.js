export const destructureMeal = (data) => {
  const {
    strMeal: name, strCategory: category, strMealThumb: img, strYoutube: video,
    strInstructions: instructions, idMeal: id, strArea: area, strTags: tags,
  } = data;
  const dataObj = {
    name,
    category,
    img,
    video,
    instructions,
    id,
    area,
    init: 9,
    mid: 29,
    end: 49,
    type: 'comidas',
    tags,
  };
  console.log('destructureNEW:', dataObj);
  return dataObj;
};

export const destructureDrinks = (data) => {
  const {
    strDrink: name, strAlcoholic: alcoholic, strDrinkThumb: img, strCategory: category,
    strInstructions: instructions, idDrink: id, strArea: area,
  } = data;
  const dataObj = {
    name,
    category,
    alcoholic,
    img,
    instructions,
    id,
    area,
    init: 21,
    mid: 36,
    end: 51,
    type:
    'bebidas',
  };
  return dataObj;
};
