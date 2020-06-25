import React from 'react';
import './FoodCard.css';

const FoodCard = ({ meal: { strMealThumb, strMeal }, index }) => (
  <div>
    <div data-testid={`${index}-recipe-card`} className="Card">
      <img
        alt={`imagem de uma refeição: ${strMeal}`}
        data-testid={`${index}-card-img`}
        src={strMealThumb} width="100px" height="50px"
      />
    </div>
    <span data-testid={`${index}-card-name`}>{strMeal}</span>
  </div>
);

export default FoodCard;
