import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { fetchCategoriesMeals } from '../../services/theMealAPI';
// import { fetchCategoriesDrinks } from '../../services/theCockTailAPI';
import ListCategories from '../../components/Categories/ListCategories';
import DoneRecipeCard from '../../components/DoneRecipeCard';
import './style.css';
import '../../components/Categories/ListCategories.css';
import destructureAPI from '../../untils/destructureObject';

const recipeModal = (recipe) => ({
  ...recipe,
  img: recipe.image,
  alcoholic: recipe.alcoholicOrNot,
});

const renderCategories = (setFilteredRecipes, recipes) => {
  const categories = [{ all: 'todos' }, { food: 'comida' }, { drink: 'bebida' }];
  const filterRecipes = (value) => {
    if (value === 'todos') return recipes;
    return recipes.filter((recipe) => recipe.type.includes(value));
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

const DoneRecipeList = ({ recipes, type }) => {
  const [categories] = useState({ recipes: [] });
  const [doneRecipes, setDoneRecipes] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    if (type === 'doneRecipes') {
      setDoneRecipes(true);
    }
    // if (type === 'meal') {
    //   fetchCategoriesMeals()
    //     .then((resp) => setCategories({ recipes: resp.meals }), (resp) => resp);
    // }
    // if (type === 'drink') {
    //   fetchCategoriesDrinks()
    //   .then((resp) => setCategories({ recipes: resp.drinks }), (resp) => resp);
    // }
  }, []);
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);
  return (
    <section>
      {!doneRecipes &&
        <ListCategories
          strCategories={[{ strCategory: 'All' }, ...categories.recipes]}
          type={type}
        />
      }
      {doneRecipes && renderCategories(setFilteredRecipes, recipes)}
      <div className="foodList">
        {!doneRecipes && recipes.slice(0, 12).map((recipe, index) => (
          <DoneRecipeCard
            key={Object.values(recipe)[0]}
            recipe={destructureAPI(recipe)}
            index={index}
          />
        ))}
        {doneRecipes && filteredRecipes.map((recipe, index) => (
          <DoneRecipeCard
            doneRecipes="disabled-link"
            key={Object.values(recipe)[0]}
            recipe={recipeModal(recipe)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

DoneRecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  type: PropTypes.string.isRequired,
};

export default DoneRecipeList;
