import React, { useContext, useState } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedMeals from './RecommendedMeals';
import RecipeButtonControl from '../RecipeButtonControl';

const DrinksComponent = () => {
  const [inProgress, setInProgress] = useState(false);
  const { data } = useContext(DetailsPageContext);

  const { strDrink, strAlcoholic, strDrinkThumb, strInstructions, idDrink } = data;

  const ingredientsValues = Object.values(data).slice(21, 36);
  const ingredientsQuantity = Object.values(data).slice(36, 51);

  const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
      if (ingredientsQuantity[index] === null) ingredientsQuantity[index] = 'A seu gosto';
      acc.push([currentElement, ingredientsQuantity[index]]);
    }
    return acc;
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={strDrinkThumb} alt={strDrink} width="20%" />
      <h1 data-testid="recipe-title">{strDrink}</h1>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity.map((e, index) =>
          (<li data-testid={`${index}-ingredient-name-and-measure`} key={e}>{e[0]} - {e[1]}</li>))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>
      <RecommendedMeals />
      <RecipeButtonControl
        type="bebidas"
        id={idDrink}
        setInProgress={setInProgress}
        inProgress={inProgress}
      />
    </div>
  );
};

export default DrinksComponent;
