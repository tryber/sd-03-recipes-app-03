import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import DoneRecipesList from './DoneRecipesList';

const DoneRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  return (
    <div>
      <Header title="Receitas Feitas" searchIcon={false} />
      <DoneRecipesList recipes={recipes} type="doneRecipes" />
    </div>
  );
};

export default DoneRecipes;
