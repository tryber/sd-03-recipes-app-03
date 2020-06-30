import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard';
import ListCategories from '../../Categories/ListCategories';
import '../../Food/FoodList/FoodList.css';
import { fetchCategoriesDrinks } from '../../../services/theCockTailAPI';

const DrinkList = ({ drinks }) => {
  const [categories, setCategories] = useState({ drinks: [] });
  useEffect(() => {
    fetchCategoriesDrinks()
      .then((resp) => setCategories(resp), (resp) => resp);
  }, []);
  return (
    <section>
      <ListCategories strCategories={[{ strCategory: 'All' }, ...categories.drinks]}type="drink" />
      <div className="foodList">
        {drinks.map((drink, index) => (
          index < 12 && <DrinkCard key={drink.idDrink} drink={drink} index={index} />
        ))}
      </div>
    </section>
  );
};

DrinkList.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DrinkList;
