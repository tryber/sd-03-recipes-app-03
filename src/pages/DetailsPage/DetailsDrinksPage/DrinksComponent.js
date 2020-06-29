import React, { useContext, useState } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedMeals from './RecommendedMeals';
import RecipeButtonControl from '../RecipeButtonControl';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';

const DrinksComponent = () => {
  const [inProgress, setInProgress] = useState(false);
  const { data } = useContext(DetailsPageContext);

  const { strDrink, strAlcoholic, strDrinkThumb, strInstructions, idDrink } = data;

  const ingredientsValues = Object.values(data).slice(21, 36);
  const ingredientsQuantity = Object.values(data).slice(36, 51);

  const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
      ingredientsQuantity[index] = ingredientsQuantity[index] || 'A seu gosto';
      acc.push([currentElement, ingredientsQuantity[index]]);
    }
    return acc;
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={strDrinkThumb} alt={strDrink} width="20%" />
      <ShareButton />
      <FavoriteButton recipe={data} type="drink" />
      <h1 data-testid="recipe-title">{strDrink}</h1>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity.map(([ingredient, quantity], index) =>
          (<li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient}>
            {ingredient} - {quantity}
          </li>))}
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
