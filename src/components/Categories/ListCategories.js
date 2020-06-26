import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';
import { fetchDrinkByCategoryButton } from '../../services/theCockTailAPI';
import { fetchCategoryMealsButton } from '../../services/theMealAPI';

// const filterByCategory = (category, categoryType) => {
//   if (categoryType === 'drink') {
//     if (handleAllCategories(setDrinksData, drinks, category)) {
//       return setAllCategories('');
//     };
//     handleCategories(category, fetchDrinkByCategoryButton, setDrinksData);
//     setAllCategories({ category });
//   } else {
//     if (handleAllCategories(setMealsData, meals, category)) {
//       return setAllCategories('');
//     };
//     handleCategories(category, fetchCategoryMealsButton, setMealsData);
//     setAllCategories({ category });
//   }
//   return null;
// };

const handleCategories = (category, fetchCallBack, setCallBack) => {
  fetchCallBack(category)
    .then((err) => err, (response) => setCallBack(Object.values(response)[0]));
};

const handleAllCategories = (callback, data, category, allCategories) => {
  console.log(allCategories);
  if (allCategories === category || category === 'All') {
    callback(data);
    return true;
  }
  return false;
};

const ListCategories = ({ strCategories, type }) => {
  const { setMealsData, setDrinksData, dataBase: { drinks, meals } } = useContext(FoodContext);
  const [allCategories, setAllCategories] = useState({ category: '' });

  const filterByCategory = (category, categoryType) => {
    if (categoryType === 'drink') {
      if (handleAllCategories(setDrinksData, drinks, category, allCategories.category)) {
        return setAllCategories('');
      };
      setAllCategories({ category });
      console.log(category, allCategories.category);
      handleCategories(category, fetchDrinkByCategoryButton, setDrinksData);
    } else {
      if (handleAllCategories(setMealsData, meals, category, allCategories.category)) {
        return setAllCategories('');
      };
      setAllCategories({ category });
      handleCategories(category, fetchCategoryMealsButton, setMealsData);
    }
    return null;
  };
  return (
    <div>
      {strCategories.slice(0, 6).map(({ strCategory }) => (
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
  type: PropTypes.string.isRequired,
};

export default ListCategories;
