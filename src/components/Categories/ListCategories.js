import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';
import { fetchDrinkByCategoryButton } from '../../services/theCockTailAPI';
import { fetchCategoryMealsButton } from '../../services/theMealAPI';


const ListCategories = ({ strCategories, type }) => {
  const { setMealsData, setDrinksData, dataBase: { drinks, meals } } = useContext(FoodContext);
  const [allCategories, setAllCategories] = useState('');

  const handleAllCategories = (callback, data, category) => {
    if (allCategories.category === category || category === 'All') {
      setAllCategories('');
      callback(data);
      return true;
    }
    return false;
  }

  const handleCategories = (category, fetchCallBack, setCallBack) => {
    setAllCategories({ category });
    fetchCallBack(category)
      .then(err => err, (response) => setCallBack(Object.values(response)[0]));
  }

  const filterByCategory = (category, type) => {
    if (type === 'drink') {
      if (handleAllCategories(setDrinksData, drinks, category)) return null;
      setAllCategories({ category });
      fetchDrinkByCategoryButton(category)
        .then(err => err, ({ drinks }) => setDrinksData(drinks));
    } else {
        if (handleAllCategories(setMealsData, meals, category)) return null;
        handleCategories(category, fetchCategoryMealsButton, setMealsData);
        // setAllCategories({ category });
        // fetchCategoryMealsButton(category)
        //   .then(err => err, ({ meals }) => setMealsData(meals));
    }
  };
  return (
    <div>
      {strCategories.map(({ strCategory }, index) => (
        index < 6 &&
        <button
          onClick={() => filterByCategory(strCategory, type)}
          data-testid={`${strCategory}-category-filter`} key={strCategory}
        >
          {`${strCategory}`}
        </button>
      ))}
    </div>
  );
};

ListCategories.propTypes = {
  strCategories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ListCategories;
