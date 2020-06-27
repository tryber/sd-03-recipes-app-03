import React, { useContext, useEffect } from 'react';
import FoodContext from './Context/FoodContext';
import FoodList from '../../components/Food/FoodList/FoodList';
import Footer from '../../components/Footer/Footer';

const Foods = () => {
  const { get12Meals, mealsData, get12Drinks } = useContext(FoodContext);
  useEffect(() => {
    get12Meals();
    get12Drinks();
  }, []);
  return (
    <div>
      <FoodList meals={mealsData} />
      <Footer />
    </div>
  );
};

export default Foods;
