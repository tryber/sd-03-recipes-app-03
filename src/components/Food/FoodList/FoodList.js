import React from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../FoodCard/FoodCard';
import './FoodList.css';

const FoodList = ({ meals }) => (
  <div className="foodList">
    {meals.map((meal, index) => (
      index < 12 && <FoodCard key={meal.idMeal} meal={meal} index={index} />
    ))}
  </div>
);

FoodList.propTypes = { meals: PropTypes.array.isRequired };

export default FoodList;
