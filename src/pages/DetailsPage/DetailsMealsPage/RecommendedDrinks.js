import React, { useContext, useState } from 'react';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedDrinksComponent from './RecommendedDrinksComponent';
import './RecommendedDrinks.css';

const destructureMeal = (data) => {
  const { strMeal: name,strCategory: category, strMealThumb: img, idMeal: id } = data;
  const dataObj = { name, category, img, id };
  return dataObj;
};

const destructureDrinks = (data) => {
  const { strDrink: name, strAlcoholic: category, strDrinkThumb: img, idDrink: id } = data;
  const dataObj = { name, category, img, id };
  return dataObj;
};

const RecommendedDrinks = () => {
  // const [index, setIndex] = useState(2);

  const { providerRecommended } = useContext(DetailsPageContext);

  // const setIndexFunction = () => {
  //   setIndex((current) => current + 2)
  // }

  const sixRecommended = providerRecommended.slice(0, 6);

  // const showingRecommendedDrinks = sixRecommendedDrinks[index];

  const dataRecommendedDestructure = (data) =>
    data.idMeal ? destructureMeal(data) : destructureDrinks(data);
  return (
    <div>
      <h2>Recomendadas</h2>
      <div className="slideshow-container">
        <div className="recommended-drinks-container">
          {sixRecommended.map((recommended, index) =>
            <RecommendedDrinksComponent
              data-testid={`${index}-recomendation-card`}
              key={dataRecommendedDestructure(recommended).id}
              recommended={dataRecommendedDestructure(recommended)}
              index={index}
            />,
          )}
        </div>
      </div>
      {/* <a className="prev" onClick={setIndexFunction}>&#10094;</a>
      <a className="next" onClick={setIndexFunction}>&#10095;</a>
      <div>
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div> */}
    </div>
  );
};

export default RecommendedDrinks;
