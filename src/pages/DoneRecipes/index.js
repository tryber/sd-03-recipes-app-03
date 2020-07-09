import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import DoneRecipesList from './DoneRecipesList';
import FoodContext from '../../pages/FoodMainPage/Context/FoodContext';

const DoneRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { storage } = useContext(FoodContext);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('doneRecipes')) !== null) {
      setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, [storage]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
      localStorage.setItem('doneRecipes', JSON.stringify(recipes));
    }
  }, []);
  // useEffect(() => {
  //   setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  // }, []);

  return (
    <div>
      <Header title="Receitas Feitas" searchIcon={false} />
      <DoneRecipesList recipes={recipes} type="doneRecipes" />
    </div>
  );
};

export default DoneRecipes;
