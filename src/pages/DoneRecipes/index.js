import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

const DoneRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [recipes]);
  return (
    <div>
      <Header title="Receitas Feitas" />
    </div>
  );
};

export default DoneRecipes;
