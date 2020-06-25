import React from 'react';
import '../../Food/FoodCard/FoodCard.css';

const FoodCard = ({ drink: { strDrinkThumb, strDrink }, index }) => (
  <div className="card">
    <div data-testid={`${index}-recipe-card`} className="Card">
      <img
        alt={`imagem de um drink: ${strDrink}`}
        data-testid={`${index}-card-img`}
        src={strDrinkThumb} width="100px" height="50px"
      />
    </div>
    <span data-testid={`${index}-card-name`}>{strDrink}</span>
  </div>
);

export default FoodCard;
