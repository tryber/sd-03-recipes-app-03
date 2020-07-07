import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCategoriesMeals } from '../../../services/theMealAPI';
import { fetchCategoriesDrinks } from '../../../services/theCockTailAPI';
import ListCategories from '../../Categories/ListCategories';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';
import '../../Categories/ListCategories.css';
import destructureAPI from '../../../untils/destructureObject';

const recipeModal = (recipe) => ({
  ...recipe,
  img: recipe.image,
  alcoholic: recipe.alcoholicOrNot,
});

const renderFavoriteCategories = (setFilteredRecipes, recipes) => {
  const categories = [{ all: 'todos' }, { food: 'comida' }, { drink: 'bebida' }];
  const filterRecipes = (value) => {
    if (value === 'todos') return recipes;
    return recipes.filter((recipe) => recipe.type === value);
  };
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className="categoryBtn"
          data-testid={`filter-by-${Object.keys(category)}-btn`}
          onClick={() => setFilteredRecipes(filterRecipes(Object.values(category)[0]))}
          key={Object.values(category)}
        >
          {Object.keys(category)}
        </button>
      ))}
    </div>
  );
};

const RecipeList = ({ recipes, type }) => {
  const [categories, setCategories] = useState({ recipes: [] });
  const [favoriteds, setFavoriteds] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <section>
      {!favoriteds &&
        <ListCategories
          strCategories={[{ strCategory: 'All' }, ...categories.recipes]}
          type={type}
        />
      }
      {favoriteds && renderFavoriteCategories(setFilteredRecipes, recipes)}
      <div className="foodList">
        {!favoriteds && recipes.slice(0, 12).map((recipe, index) => (
          <RecipeCard
            key={Object.values(recipe)[0]}
            recipe={destructureAPI(recipe)}
            index={index}
          />
        ))}
        {favoriteds && filteredRecipes.map((recipe, index) => (
          <RecipeCard
            favoriteds="disabled-link"
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
