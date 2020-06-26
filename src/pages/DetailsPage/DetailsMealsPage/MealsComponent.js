import React, { useContext } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import ReactPlayer from 'react-player';
import RecommendedDrinks from './RecommendedDrinks';

const MealsComponent = () => {
  const {
    data,
  } = useContext(DetailsPageContext);

  const { strMeal, strCategory, strMealThumb, strYoutube, strInstructions } = data;

  const ingredientsValues = Object.values(data).slice(9, 29);
  const ingredientsQuantity = Object.values(data).slice(29, 49);

  const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
        acc.push([ currentElement, ingredientsQuantity[index] ]);
    }
    return acc;
  }, [])

  return (
    <div>
      <img src={strMealThumb} alt={strMeal} width="20%" />
      <h1>{strMeal}</h1>
      <h3>{strCategory}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity.map((e) => (<li key={e}>{e[0]} - {e[1]}</li>))}
      </ul>
      <h2>Instructions</h2>
      <p>{strInstructions}</p>
      <h2>Video</h2>
      <ReactPlayer url={strYoutube} controls={true} />
      <RecommendedDrinks />
    </div>
  )
}

export default MealsComponent;
