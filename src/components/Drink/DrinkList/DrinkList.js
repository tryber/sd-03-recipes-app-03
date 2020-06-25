import React from 'react';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard';
import '../../Food/FoodList/FoodList.css';

const DrinkList = ({ drinks }) => (
  <div className="foodList">
    {drinks.map((drink, index) => (
      index < 12 && <DrinkCard key={drink.idDrink} drink={drink} index={index} />
    ))}
  </div>
);

DrinkList.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DrinkList;
