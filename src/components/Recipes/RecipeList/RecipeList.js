import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCategoriesMeals } from '../../../services/theMealAPI';
import { fetchCategoriesDrinks } from '../../../services/theCockTailAPI';
import ListCategories from '../../Categories/ListCategories';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';
import { destructureMeal, destructureDrinks } from '../../../untils/destructureObject';

const recipeModal = (recipe) => ({
  ...recipe,
  img: recipe.image,
});

const RecipeList = ({ recipes, type }) => {
  const [categories, setCategories] = useState({ recipes: [] });
  const [favoriteds, setFavoriteds] = useState(false);
  useEffect(() => {
    if (type === 'favoriteds') {
      setFavoriteds(true);
    }
    if (type === 'meal') {
      fetchCategoriesMeals()
        .then((resp) => setCategories({ recipes: resp.meals }), (resp) => resp);
    }
    if (type === 'drink') {
      fetchCategoriesDrinks()
      .then((resp) => setCategories({ recipes: resp.drinks }), (resp) => resp);
    }
  }, []);
  return (
    <section>
      <ListCategories
        strCategories={[{ strCategory: 'All' }, ...categories.recipes]}
        type={type}
      />
      <div className="foodList">
        {!favoriteds && recipes.slice(0, 12).map((recipe, index) => (
          <RecipeCard
            key={Object.values(recipe)[0]}
            recipe={type === 'meal' ? destructureMeal(recipe) : destructureDrinks(recipe)}
            index={index}
          />
        ))}
        {favoriteds && recipes.map((recipe, index) => (
          <RecipeCard
            key={Object.values(recipe)[0]}
            recipe={recipeModal(recipe)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeList;
