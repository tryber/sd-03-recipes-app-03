import React, { useContext, useState } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import ReactPlayer from 'react-player';
import RecommendedDrinks from './RecommendedDrinks';
import RecipeButtonControl from '../RecipeButtonControl';

const MealsComponent = () => {
  const [inProgress, setInProgress] = useState(false);

  const { data } = useContext(DetailsPageContext);

  const { strMeal, strCategory, strMealThumb, strYoutube, strInstructions, idMeal } = data;

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
      <img data-testid="recipe-photo" src={strMealThumb} alt={strMeal} width="20%" />
      <h1 data-testid="recipe-title">{strMeal}</h1>
      <h3 data-testid="recipe-category">{strCategory}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity.map((e, index) =>
          (<li data-testid={`${index}-ingredient-name-and-measure`} key={e}>{e[0]} - {e[1]}</li>))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>
      <h2>Video</h2>
      <ReactPlayer data-testid="video" url={strYoutube} controls={true} />
      <RecommendedDrinks />
      <RecipeButtonControl
        type="comidas"
        id={idMeal}
        setInProgress={setInProgress}
        inProgress={inProgress}
      />
    </div>
  )
}

export default MealsComponent;
