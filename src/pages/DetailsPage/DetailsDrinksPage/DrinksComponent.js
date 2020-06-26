import React, { useContext } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedMeals from './RecommendedMeals';

const DrinksComponent = () => {
  const {
    data,
  } = useContext(DetailsPageContext);

  const { strDrink, strAlcoholic, strDrinkThumb, strInstructions } = data;

  const ingredientsValues = Object.values(data).slice(21, 36);
  const ingredientsQuantity = Object.values(data).slice(36, 51);

  const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
      if (ingredientsQuantity[index] === null) ingredientsQuantity[index] = 'A seu gosto';
        acc.push([ currentElement, ingredientsQuantity[index] ]);
    }
    return acc;
  }, [])

  return (
    <div>
      <img src={strDrinkThumb} alt={strDrink} width="20%" />
      <h1>{strDrink}</h1>
      <h3>{strAlcoholic}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity.map((e) => (<li key={e}>{e[0]} - {e[1]}</li>))}
      </ul>
      <h2>Instructions</h2>
      <p>{strInstructions}</p>
      <RecommendedMeals />
    </div>
  )
}

export default DrinksComponent;
