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


const ListCategories = ({ strCategories, type }) => {
  const { setMealsData, setDrinksData, dataBase: { drinks, meals } } = useContext(FoodContext);
  const [allCategories, setAllCategories] = useState({ category: '' });

  const handleAllCategories = (callback, data, category) => {
    if (allCategories.category === category || category === 'All') {
      callback(data);
      return true;
    }
    return false;
  };
  const filterByCategory = (category, categoryType) => {
    console.log(allCategories.category);
    if (categoryType === 'drink') {
      handleAllCategories(setDrinksData, drinks, category) ? setAllCategories('') :
      handleCategories(category, fetchDrinkByCategoryButton, setDrinksData);
      setAllCategories({ category });
    } else {
      handleAllCategories(setMealsData, meals, category) ? setAllCategories('') :
      handleCategories(category, fetchCategoryMealsButton, setMealsData);
      setAllCategories({ category });
    }
    return null;
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
  type: PropTypes.string.isRequired,
};

export default ListCategories;
