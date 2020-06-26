import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCategoriesMeals } from '../../../services/theMealAPI';
import ListCategories from '../../Categories/ListCategories';
import FoodCard from '../FoodCard/FoodCard';
import './FoodList.css';

const FoodList = ({ meals }) => {
  const [categories, setCategories] = useState({ meals: [] });
  useEffect(() => {
    fetchCategoriesMeals()
      .then((resp) => console.log('1', resp), (resp) => setCategories(resp));
  }, []);
  return (
    <section>
      <ListCategories strCategories={[{ strCategory: 'All' }, ...categories.meals]} type="meal" />
      <div className="foodList">
        {meals.map((meal, index) => (
          index < 12 && <FoodCard key={meal.idMeal} meal={meal} index={index} />
        ))}
      </div>
    </section>
  );
};

FoodList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FoodList;
