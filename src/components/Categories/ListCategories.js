import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';
import { fetchDrinkByCategoryButton } from '../../services/theCockTailAPI';
import { fetchCategoryMealsButton } from '../../services/theMealAPI';
import './ListCategories.css';
import ShareButton from '../Share/ShareButton';

const handleCategories = (category, fetchCallBack, setCallBack) => {
  fetchCallBack(category)
    .then((err) => err, (response) => setCallBack(Object.values(response)[0]));
};

const handleAllCategory = (callback, data, category, allCategories) => {
  console.log(allCategories);
  if (allCategories === category || category === 'All') {
    callback(data);
    return true;
  }
  return false;
};

const filterByCategory = (category, categoryType, untils) => {
  const { setMealsData, setDrinksData, allCategories, setAllCategories, drinks, meals } = untils;
  if (categoryType === 'drink') {
    if (handleAllCategory(setDrinksData, drinks, category, allCategories.category)) {
      return setAllCategories('');
    }
    setAllCategories({ category });
    console.log(category, allCategories.category);
    handleCategories(category, fetchDrinkByCategoryButton, setDrinksData);
  }
  if (handleAllCategory(setMealsData, meals, category, allCategories.category)) {
    return setAllCategories('');
  }
  setAllCategories({ category });
  handleCategories(category, fetchCategoryMealsButton, setMealsData);
  return null;
};

const ListCategories = ({ strCategories, type }) => {
  const { setMealsData, setDrinksData, dataBase: { drinks, meals } } = useContext(FoodContext);
  const [allCategories, setAllCategories] = useState({ category: '' });
  const untils = {
    setMealsData,
    setDrinksData,
    allCategories,
    setAllCategories,
    drinks,
    meals,
  };

  return (
    <div>
      <ShareButton />
      {strCategories.slice(0, 6).map(({ strCategory }) => (
        <button
          className="categoryBtn"
          onClick={() => filterByCategory(strCategory, type, untils)}
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
